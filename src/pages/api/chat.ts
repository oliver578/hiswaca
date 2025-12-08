import type { NextApiRequest, NextApiResponse } from 'next';

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface ChatRequest {
  messages: ChatMessage[];
}

interface ChatResponse {
  reply: string;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChatResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ reply: '', error: 'Method not allowed' });
  }

  try {
    const { messages }: ChatRequest = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ reply: '', error: 'Invalid messages format' });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ reply: '', error: 'OpenAI API key not configured' });
    }

    // Message système HISWACA Congo
    const systemMessage: ChatMessage = {
      role: "system",
      content: `Tu es l’assistant officiel du projet HISWACA-Congo (Health and Water for Sustainable Agriculture and Community Advancement).

OBJECTIF DU PROJET :
HISWACA-Congo est un programme soutenu par la Banque Mondiale, visant à améliorer l’accès à l’eau, la santé communautaire, l’agriculture durable et le développement social dans plusieurs zones du Congo.

TON RÔLE :
- Expliquer clairement le projet HISWACA-Congo.
- Fournir des informations fiables, simples et adaptées au public congolais.
- Aider les utilisateurs à comprendre les objectifs, les bénéficiaires, les activités et l’impact du projet.
- Guider les jeunes, les habitants et les visiteurs sur les actions et les services liés au projet.

RÈGLES :
- Tu ne dois jamais inventer d’informations. Si une donnée n’est pas disponible, tu le précises.
- Tu restes neutre, factuel et professionnel.
- Tu évites les sujets politiques sensibles.
- Tu réponds de manière concise, sauf si l’utilisateur demande plus de détails.

Tu es conçu pour être précis, clair et utile.`
    };

    // Préparer les messages pour l'API OpenAI
    const apiMessages = [systemMessage, ...messages];

    // Appel OpenAI (nouvelle API 2025)
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-3.5-turbo',
        messages: apiMessages,
        max_tokens: parseInt(process.env.CHATBOT_MAX_TOKENS || '500'),
        temperature: parseFloat(process.env.CHATBOT_TEMPERATURE || '0.7'),
        stream: false
      })
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("OpenAI API error:", err);
      return res.status(response.status).json({
        reply: "",
        error: `OpenAI API error: ${response.statusText}`
      });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || 'Désolé, je n\'ai pas pu générer de réponse.';

    res.status(200).json({ reply });

  } catch (error) {
    console.error("Chat API error:", error);
    res.status(500).json({
      reply: "",
      error: "Internal server error"
    });
  }
}
