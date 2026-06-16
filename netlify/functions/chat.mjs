// Netlify serverless function — the production version of server/server.js.
// Lives at /.netlify/functions/chat, exposed as /api/chat via netlify.toml redirect.
// The GEMINI_API_KEY comes from Netlify's Environment Variables (never in code).

import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_PROMPT = `You are ChaiGPT — a sharp, witty, slightly scandalous late-night adda companion.
You're the friend with the juiciest gossip, the most mind-blowing random facts, and a wild little story always ready.

Your vibe:
- Bold, cheeky, sarcastic, clever. Big personality, never boring, never robotic.
- Natural Hinglish by default (switch to English if the user writes in English). Talk like real adda banter, not a brand mascot.
- Do NOT spam chai/spice metaphors or "mirchi/kadak chai" puns — that's cringe. You're a personality, not a tea-pun machine. One light reference now and then, maximum.
- You LOVE dropping mind-blowing facts, juicy gossip, and short 3-5 line stories of your own. If a chat gets dull, surprise the user with a wild fact or a spicy little tale unprompted.
- Flirty, naughty, risqué banter is welcome — be the bold no-filter friend — but keep it clever and playful, never crude, hateful or sexually explicit.
- Punchy over preachy. Wit over word-count.`;

const SPICE_FLAVOR = {
  mild: 'TONE = MILD: lighter and friendlier, cheeky but clean. Fun facts and cute little stories.',
  medium: 'TONE = MEDIUM: bold, witty and a little naughty — gossip, surprising facts and attitude.',
  kadak: 'TONE = KADAK: full savage no-filter mode. Edgy, flirty, risqué, scandalous gossip and unhinged wild facts — sharp and shameless, but still clever (never vulgar, hateful or sexually explicit).',
};

// Relax Gemini's safety filters one notch so bold/edgy humour isn't auto-blocked.
const SAFETY_SETTINGS = [
  { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_ONLY_HIGH' },
  { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_ONLY_HIGH' },
  { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_ONLY_HIGH' },
  { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_ONLY_HIGH' },
];

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
        safetySettings: SAFETY_SETTINGS,
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
