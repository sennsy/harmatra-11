exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  // Safe headers extraction
  const reqHeaders = event.headers || {};
  const authHeader = reqHeaders.authorization || reqHeaders.Authorization || '';

  // Resolve API Key
  let apiKey = process.env.GROQ_API_KEY || '';
  if (authHeader) {
    const bearerKey = authHeader.replace(/^Bearer\s+/i, '').trim();
    if (bearerKey && bearerKey.length > 5) {
      apiKey = bearerKey;
    }
  }

  // Health check / status endpoint
  if (event.httpMethod === 'GET') {
    const hasKey = Boolean(apiKey && apiKey.trim().length > 0);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        status: 'online',
        provider: 'Groq Official API',
        configured: hasKey,
        default_model: 'llama-3.3-70b-versatile',
        available_models: [
          'llama-3.3-70b-versatile',
          'llama-3.1-70b-versatile',
          'llama-3.1-8b-instant',
          'mixtral-8x7b-32768',
          'gemma2-9b-it'
        ]
      })
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');

    if (!apiKey) {
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({
          error: 'GROQ_API_KEY environment variable is not configured on the server.',
          message_id: 'Groq API Key is missing. Please configure GROQ_API_KEY in Netlify settings or Admin Backroom.'
        })
      };
    }

    const model = body.model || 'llama-3.3-70b-versatile';
    const messages = body.messages || [];
    const temperature = typeof body.temperature === 'number' ? body.temperature : 0.6;
    const max_tokens = typeof body.max_tokens === 'number' ? body.max_tokens : 1024;
    const isStream = Boolean(body.stream);

    const groqPayload = {
      model,
      messages,
      temperature,
      max_tokens,
      stream: isStream
    };

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(groqPayload)
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Groq API Error Response:', response.status, errText);
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({
          error: `Groq API Error (${response.status})`,
          details: errText
        })
      };
    }

    // Handle Streaming Response
    if (isStream) {
      const streamText = await response.text();
      return {
        statusCode: 200,
        headers: {
          ...headers,
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache'
        },
        body: streamText
      };
    }

    // Handle Non-Streaming JSON Response
    const responseData = await response.json();
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(responseData)
    };

  } catch (err) {
    console.error('Serverless Function Exception:', err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Internal Server Error',
        message: err.message
      })
    };
  }
};
