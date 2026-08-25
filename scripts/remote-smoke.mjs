const base = (process.env.ZIWEI_AI_TARGET_URL || '').replace(/\/$/, '');
if (!base) throw new Error('ZIWEI_AI_TARGET_URL is required');

async function getJson(path, expectedStatus = 200) {
  const response = await fetch(`${base}${path}`, { signal: AbortSignal.timeout(15000), cache: 'no-store' });
  const text = await response.text();
  if (response.status !== expectedStatus) throw new Error(`${path}: expected ${expectedStatus}, got ${response.status}: ${text}`);
  return JSON.parse(text);
}

const health = await getJson('/api/health');
if (health.status !== 'ok') throw new Error(`unexpected health payload: ${JSON.stringify(health)}`);

const ready = await fetch(`${base}/api/ready`, { signal: AbortSignal.timeout(15000), cache: 'no-store' });
if (![200, 503].includes(ready.status)) throw new Error(`/api/ready unexpected status ${ready.status}`);

const retrievalResponse = await fetch(`${base}/api/ziwei-ai/retrieve`, {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify({ query: '紫微 天府', limit: 2 }),
  signal: AbortSignal.timeout(15000),
});
if (!retrievalResponse.ok) throw new Error(`retrieve failed: ${retrievalResponse.status} ${await retrievalResponse.text()}`);
const retrieval = await retrievalResponse.json();
if (!Array.isArray(retrieval.hits)) throw new Error('retrieve response missing hits');

console.log(JSON.stringify({ health: health.status, readiness: ready.status, retrievalHits: retrieval.hits.length, target: base }, null, 2));
