export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }

  try {
    const body = await req.json();
    const { content, passcode, filename = 'data.json' } = body;

    const envPasscode = process.env.ADMIN_PASSCODE || '';
    if (!envPasscode || passcode !== envPasscode) {
      return new Response(JSON.stringify({ error: 'Unauthorized. Invalid or missing passcode.' }), { status: 401 });
    }

    const token = process.env.GITHUB_TOKEN;
    const owner = process.env.GITHUB_OWNER || 'sennsy';
    const repo = process.env.GITHUB_REPO || 'harmatra-11';
    const branch = process.env.TARGET_BRANCH || 'main';

    if (!token) {
      return new Response(JSON.stringify({ error: 'GITHUB_TOKEN is not configured on the server.' }), { status: 500 });
    }

    const filepath = filename;
    
    // 1. Get file SHA
    const fileRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${filepath}?ref=${branch}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'HARMATRA-AutoDeploy'
      }
    });

    let sha = '';
    if (fileRes.ok) {
      const fileData = await fileRes.json();
      sha = fileData.sha;
    }

    // 2. Commit changes
    const commitBody = {
      message: `Auto-deploy update to ${filepath} from Backroom`,
      content: content, // Must be base64 from client
      branch: branch
    };

    if (sha) {
      commitBody.sha = sha;
    }

    const updateRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${filepath}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
        'User-Agent': 'HARMATRA-AutoDeploy'
      },
      body: JSON.stringify(commitBody)
    });

    if (!updateRes.ok) {
      const errText = await updateRes.text();
      return new Response(JSON.stringify({ error: 'GitHub API error', details: errText }), { status: updateRes.status });
    }

    const updateData = await updateRes.json();
    return new Response(JSON.stringify({ success: true, commit: updateData.commit.sha }), { status: 200 });

  } catch (err) {
    return new Response(JSON.stringify({ error: 'Internal server error', details: err.message }), { status: 500 });
  }
}
