import { spawn } from 'node:child_process';

const port = Number(process.env.ZIWEI_AI_SMOKE_PORT || 3100);
const baseUrl = `http://127.0.0.1:${port}`;

const childEnv = { ...process.env, NODE_ENV: 'production' };
delete childEnv.ZIWEI_AI_BASE_URL;
delete childEnv.ZIWEI_AI_API_KEY;
delete childEnv.ZIWEI_AI_MODEL;
delete childEnv.ZIWEI_AI_TIMEOUT_MS;

const server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '-p', String(port)], {
  env: childEnv,
  stdio: ['ignore', 'pipe', 'pipe'],
});

let output = '';
server.stdout.on('data', (chunk) => { output += chunk.toString(); });
server.stderr.on('data', (chunk) => { output += chunk.toString(); });

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function waitForHealth() {
  const deadline = Date.now() + 30_000;
  while (Date.now() < deadline) {
    if (server.exitCode !== null) throw new Error(`production server exited early (${server.exitCode})\n${output}`);
    try {
      const response = await fetch(`${baseUrl}/api/health`, { cache: 'no-store' });
      if (response.ok) return response.json();
    } catch {
      // Server may still be booting.
    }
    await sleep(500);
  }
  throw new Error(`health endpoint did not become ready\n${output}`);
}

async function assertJson(response, expectedStatus, label) {
  const text = await response.text();
  if (response.status !== expectedStatus) {
    throw new Error(`${label}: expected HTTP ${expectedStatus}, received ${response.status}: ${text}`);
  }
  try {
    return JSON.parse(text);
  } catch {
    throw new Error(`${label}: response was not JSON: ${text}`);
  }
}

try {
  const health = await waitForHealth();
  if (health?.status !== 'ok' || health?.aiProvider?.state !== 'missing') {
    throw new Error(`unexpected health payload: ${JSON.stringify(health)}`);
  }

  const readiness = await assertJson(await fetch(`${baseUrl}/api/ready`, { cache: 'no-store' }), 503, 'AI readiness');
  if (readiness.ready !== false || readiness.aiProvider?.state !== 'missing') {
    throw new Error(`unexpected readiness payload: ${JSON.stringify(readiness)}`);
  }

  const retrieval = await assertJson(await fetch(`${baseUrl}/api/ziwei-ai/retrieve`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ query: '紫微 天府', limit: 2 }),
  }), 200, 'classics retrieval');
  if (!Array.isArray(retrieval.hits)) throw new Error('classics retrieval did not return hits array');

  const interpret = await assertJson(await fetch(`${baseUrl}/api/ziwei-ai/interpret`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      input: {
        calendarType: 'solar',
        date: '2000-8-16',
        hourIndex: 2,
        gender: 'female',
      },
      topic: 'overview',
    }),
  }), 503, 'AI provider guard');
  if (interpret.error !== 'ai-provider-not-configured') {
    throw new Error(`unexpected provider guard payload: ${JSON.stringify(interpret)}`);
  }

  console.log('Production smoke test passed:', {
    health: health.status,
    readiness: readiness.ready,
    aiProvider: health.aiProvider.state,
    retrievalHits: retrieval.hits.length,
    providerGuard: interpret.error,
  });
} finally {
  if (server.exitCode === null) server.kill('SIGTERM');
  await Promise.race([
    new Promise((resolve) => server.once('exit', resolve)),
    sleep(2_000),
  ]);
  if (server.exitCode === null) server.kill('SIGKILL');
}
