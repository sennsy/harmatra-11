exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "OpenRouter API Key is missing in environment variables." }),
    };
  }

  try {
    const requestBody = JSON.parse(event.body);
    const { messages, model, temperature, max_tokens } = requestBody;

    const openRouterModel = model || "google/gemini-2.5-flash";
    const temp = temperature !== undefined ? temperature : 0.7;
    const maxTokens = max_tokens || 800;

    const openRouterPayload = {
      model: openRouterModel,
      messages: messages,
      temperature: temp,
      max_tokens: maxTokens,
    };

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://harmatra11.netlify.app",
        "X-Title": "MATRA AI",
      },
      body: JSON.stringify(openRouterPayload),
    });

    if (!response.ok) {
      const errText = await response.text();
      return {
        statusCode: response.status,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: `OpenRouter Error: ${errText}` }),
      };
    }

    const data = await response.json();
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("OpenRouter Proxy Error:", error);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: `Internal Server Error: ${error.message}` }),
    };
  }
};
