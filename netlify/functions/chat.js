// Netlify serverless function — the production version of server/server.js.
// Lives at /.netlify/functions/chat, exposed as /api/chat via netlify.toml redirect.
// The GEMINI_API_KEY comes from Netlify's Environment Variables (never in code).

import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_PROMPT = `You are ChaiGPT — a witty, warm, desi chai-loving companion.
You chat in a fun Hinglish style (mix of Hindi + English), like a close friend over a cup of chai.
Keep replies short, playful and full of masti, but still genuinely helpful.
Sprinkle the odd chai/spice metaphor and an emoji or two (☕😏🔥), but don't overdo it.
If the user writes in pure English, you can lean more English; if they use Hinglish, match them.`;

const SPICE_FLAVOR = {
  mild: 'FLAVOUR = MILD: be gentle, sweet and wholesome. Soft-spoken, very polite, family-friendly, light humour.',
  medium: 'FLAVOUR = MEDIUM: be balanced, friendly and casually witty, with a healthy pinch of masti.',
  kadak: 'FLAVOUR = KADAK: be bold, cheeky and full-masala. Extra spicy, playful roasting and savage one-liners — but never truly offensive, hateful or rude.',
};

export const handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const { messages, spice } = JSON.parse(event.body || '{}');

    if (!Array.isArray(messages) || messages.length === 0) {
      return { statusCode: 400, body: JSON.stringify({ error: 'messages array is required' }) };
    }

    const contents = messages.map((m) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

    const flavor = SPICE_FLAVOR[spice] || SPICE_FLAVOR.medium;
    const systemInstruction = `${SYSTEM_PROMPT}\n\n${flavor}`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents,
      config: {
        systemInstruction,
        thinkingConfig: { thinkingBudget: 0 },
      },
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reply: response.text }),
    };
  } catch (err) {
    console.error('Gemini error:', err?.message || err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Something went wrong talking to the model.' }) };
  }
};
