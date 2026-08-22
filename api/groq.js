export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const headers = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json'
  });

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers });
  }

  const authHeader = req.headers.get('authorization') || '';
  let apiKey = process.env.GROQ_API_KEY || '';
  
  if (authHeader) {
    const bearerKey = authHeader.replace(/^Bearer\s+/i, '').trim();
    if (bearerKey && bearerKey.length > 5) {
      apiKey = bearerKey;
    }
  }

  if (req.method === 'GET') {
    const hasKey = Boolean(apiKey && apiKey.trim().length > 0);
    return new Response(JSON.stringify({
      status: 'online',
      provider: 'Groq Official API',
      configured: hasKey,
      default_model: 'openai/gpt-oss-120b',
      available_models: [
        'openai/gpt-oss-120b',
        'llama-3.3-70b-versatile',
        'llama-3.1-8b-instant',
        'mixtral-8x7b-32768',
        'gemma2-9b-it'
      ]
    }), { status: 200, headers });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers });
  }

  try {
    const body = await req.json().catch(() => ({}));

    if (!apiKey) {
      return new Response(JSON.stringify({
        error: 'GROQ_API_KEY environment variable is not configured on the server.',
        message_id: 'Groq API Key is missing. Please configure GROQ_API_KEY in Vercel settings.'
      }), { status: 401, headers });
    }

    const model = body.model || 'openai/gpt-oss-120b';

    const messages = body.messages || [];
    const temperature = typeof body.temperature === 'number' ? body.temperature : 0.6;
    const max_tokens = typeof body.max_tokens === 'number' ? body.max_tokens : 1024;
    const isStream = Boolean(body.stream);

    const payload = {
      model,
      messages,
      temperature,
      max_tokens,
      stream: isStream
    };

    // Use Groq Endpoint
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('OpenAI API Error Response:', response.status, errText);
      return new Response(JSON.stringify({
        error: `OpenAI API Error (${response.status})`,
        details: errText
      }), { status: response.status, headers });
    }

    if (isStream) {
      const streamHeaders = new Headers(headers);
      streamHeaders.set('Content-Type', 'text/event-stream');
      streamHeaders.set('Cache-Control', 'no-cache');
      streamHeaders.set('Connection', 'keep-alive');
      return new Response(response.body, { status: 200, headers: streamHeaders });
    }

    const responseData = await response.json();
    return new Response(JSON.stringify(responseData), { status: 200, headers });

  } catch (err) {
    console.error('Serverless Function Exception:', err);
    return new Response(JSON.stringify({
      error: 'Internal Server Error',
      message: err.message
    }), { status: 500, headers });
  }
}
