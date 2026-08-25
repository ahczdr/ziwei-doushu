const base = (process.env.ZIWEI_AI_TARGET_URL || '').replace(/\/$/, '');
if (!base) throw new Error('ZIWEI_AI_TARGET_URL is required');

const requireReady = process.env.ZIWEI_AI_REQUIRE_READY === '1';
const checkInterpret = process.env.ZIWEI_AI_CHECK_INTERPRET === '1';
const bypassSecret = process.env.VERCEL_AUTOMATION_BYPASS_SECRET?.trim();

function headers(extra = {}) {
  return {
    ...(bypassSecret ? { 'x-vercel-protection-bypass': bypassSecret } : {}),
    ...extra,
  };
}

async function request(path, init = {}, timeoutMs = 20_000) {
  return fetch(`${base}${path}`, {
    cache: 'no-store',
    ...init,
    headers: headers(init.headers || {}),
    signal: AbortSignal.timeout(timeoutMs),
  });
}

async function parseJson(response, label) {
  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch {
    throw new Error(`${label}: response was not JSON: ${text}`);
  }
}

const healthResponse = await request('/api/health');
if (healthResponse.status !== 200) {
  throw new Error(`/api/health expected 200, got ${healthResponse.status}: ${await healthResponse.text()}`);
}
const health = await parseJson(healthResponse, '/api/health');
if (health.status !== 'ok') throw new Error(`unexpected health payload: ${JSON.stringify(health)}`);

const readyResponse = await request('/api/ready');
if (![200, 503].includes(readyResponse.status)) {
  throw new Error(`/api/ready unexpected status ${readyResponse.status}: ${await readyResponse.text()}`);
}
if (requireReady && readyResponse.status !== 200) {
  throw new Error(`AI provider is not ready on production target: HTTP ${readyResponse.status}`);
}
const ready = await parseJson(readyResponse, '/api/ready');

const retrievalResponse = await request('/api/ziwei-ai/retrieve', {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify({ query: '紫微 天府', limit: 2 }),
});
if (!retrievalResponse.ok) {
  throw new Error(`retrieve failed: ${retrievalResponse.status} ${await retrievalResponse.text()}`);
}
const retrieval = await parseJson(retrievalResponse, 'retrieve');
if (!Array.isArray(retrieval.hits)) throw new Error('retrieve response missing hits');

let interpretSummary = null;
if (checkInterpret) {
  const interpretResponse = await request('/api/ziwei-ai/interpret', {
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
      question: '请仅依据命盘事实、格局证据与检索到的古籍证据做一段简要综合解读。',
    }),
  }, 90_000);
  if (!interpretResponse.ok) {
    throw new Error(`interpret failed: ${interpretResponse.status} ${await interpretResponse.text()}`);
  }
  const interpretation = await parseJson(interpretResponse, 'interpret');
  if (!interpretation.report || !Array.isArray(interpretation.report.sections) || interpretation.report.sections.length === 0) {
    throw new Error('interpret response missing non-empty report.sections');
  }
  if (!interpretation.critic || typeof interpretation.critic !== 'object') {
    throw new Error('interpret response missing critic result');
  }
  interpretSummary = {
    sections: interpretation.report.sections.length,
    providerId: interpretation.providerId || null,
    revised: Boolean(interpretation.revised),
  };
}

console.log(JSON.stringify({
  health: health.status,
  readiness: readyResponse.status,
  readinessState: ready?.aiProvider?.state || ready?.state || null,
  retrievalHits: retrieval.hits.length,
  interpretation: interpretSummary,
  target: base,
}, null, 2));
