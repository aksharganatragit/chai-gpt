import { Injectable } from '@angular/core';

/** One turn of the conversation in the shape the LLM API expects. */
export interface LlmMessage {
  role: 'user' | 'assistant';
  content: string;
}

/**
 * Talks to OUR backend (server/server.js) — never to Anthropic/Gemini directly.
 * The API key stays safe on the server; the browser only ever sees this URL.
 *
 * Uses fetch + AbortSignal so the chat can CANCEL an in-flight request
 * when the user hits the Stop button.
 */
@Injectable({ providedIn: 'root' })
export class LlmService {
  // Local dev → talk to server/server.js on :3001.
  // Production (Netlify) → call the serverless function's native URL directly.
  // (Going direct avoids the SPA _redirects catch-all that was swallowing /api/chat.)
  private readonly apiUrl =
    location.hostname === 'localhost' || location.hostname === '127.0.0.1'
      ? 'http://localhost:3001/api/chat'
      : '/.netlify/functions/chat';

  /** Send the whole history + spice level, get back the model's reply text. */
  async getReply(
    messages: LlmMessage[],
    spice: string,
    signal?: AbortSignal
  ): Promise<string> {
    const res = await fetch(this.apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages, spice }),
      signal, // lets the caller abort this request
    });

    if (!res.ok) throw new Error(`Backend error ${res.status}`);

    const data = await res.json();
    return data.reply as string;
  }
}
