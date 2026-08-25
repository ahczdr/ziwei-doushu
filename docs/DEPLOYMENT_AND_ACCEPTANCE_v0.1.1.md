# P8 Deployment & Acceptance Runbook — target v0.1.1

## Goal

Move the audited v0.1.0 codebase from release-ready to deployable and observable. P8 does not change chart calculation semantics; it adds deployment packaging, runtime status checks and production smoke verification.

## Runtime contract

- Node.js 22+
- deterministic chart engine: `iztro 2.6.0`
- standard chart renderer: `react-iztro 1.5.0`
- install with `npm ci --ignore-scripts`
- build with `npm run build`
- start with `npm run start`

## Required server-side AI configuration

```env
ZIWEI_AI_BASE_URL=https://api.deepseek.com/v1
ZIWEI_AI_API_KEY=replace-me
ZIWEI_AI_MODEL=deepseek-chat
ZIWEI_AI_TIMEOUT_MS=60000
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

Never expose `ZIWEI_AI_API_KEY` through a `NEXT_PUBLIC_*` variable.

## Deployment option A — Git repository / managed Next.js host

1. Import `ahczdr/ziwei-doushu` into the hosting platform.
2. Use Node.js 22.
3. Build command: `npm run build`.
4. Install command: `npm ci --ignore-scripts`.
5. Configure the five environment variables above.
6. Deploy from an audited branch/commit only.
7. Verify `/api/health` and `/api/ready` after deployment.

## Deployment option B — Docker

Build:

```bash
docker build -t ziwei-ai-platform:0.1.1 .
```

Run:

```bash
docker run --rm -p 3000:3000 \
  -e ZIWEI_AI_BASE_URL=https://api.deepseek.com/v1 \
  -e ZIWEI_AI_API_KEY=replace-me \
  -e ZIWEI_AI_MODEL=deepseek-chat \
  -e ZIWEI_AI_TIMEOUT_MS=60000 \
  -e NEXT_PUBLIC_SITE_URL=https://your-domain.example \
  ziwei-ai-platform:0.1.1
```

The runtime container runs as a non-root user.

## Health and readiness

### `GET /api/health`

Purpose: liveness and base runtime monitoring. It does not call an external model.

Expected healthy response when the application is alive:

```json
{
  "service": "ziwei-ai-platform",
  "status": "ok",
  "nodeEnv": "production",
  "aiProvider": {
    "state": "configured",
    "timeoutMs": 60000
  }
}
```

A fully missing provider is reported as `state=missing` while the base app remains healthy. Partial/invalid provider configuration reports `status=degraded` and HTTP 503.

### `GET /api/ready`

Purpose: full Ziwei AI interpretation readiness. Returns HTTP 200 only when the AI provider configuration is complete and valid. Missing/invalid provider configuration returns HTTP 503.

Neither endpoint returns API keys, provider URLs or model identifiers.

## Automated deployment gates

`Ziwei AI Release Gate` must pass:

1. locked dependency install;
2. TypeScript strict check;
3. P1–P8 regression tests;
4. Next.js production build;
5. real `next start` HTTP smoke test;
6. Docker image build;
7. critical npm dependency audit.

The production smoke test verifies:

- `/api/health` returns a valid healthy payload;
- `/api/ready` correctly rejects a missing AI provider;
- `/api/ziwei-ai/retrieve` works without a model credential;
- `/api/ziwei-ai/interpret` fails closed with HTTP 503 when no server provider is configured.

## Online acceptance checklist

### A. Chart facts

- [ ] solar input produces a 12-palace chart;
- [ ] lunar input produces a valid equivalent chart;
- [ ] leap-month input works;
- [ ] early Zi and late Zi remain distinct;
- [ ] true-solar correction can cross a civil-date boundary without losing the corrected date;
- [ ] standard and enhanced chart display the same effective input.

### B. Pattern evidence

- [ ] pattern panel loads without browser errors;
- [ ] matched star/palace Fact IDs resolve to actual ChartFacts;
- [ ] warning patterns are displayed as traditional-cultural rules, not deterministic real-world predictions.

### C. Classics retrieval

- [ ] retrieval API returns citation IDs;
- [ ] each result contains book/chapter/paragraph provenance;
- [ ] empty and oversized requests are rejected correctly.

### D. AI interpretation

- [ ] `/api/ready` is 200 after production model variables are configured;
- [ ] overview interpretation returns structured JSON-backed UI;
- [ ] career / wealth / relationship / health-cultural topic modes work;
- [ ] every factual claim has fact IDs and/or citation IDs;
- [ ] Critic score and revision state are visible;
- [ ] health-cultural output contains no diagnosis/treatment instruction;
- [ ] API key never appears in browser source, network response or health endpoint.

### E. Production operations

- [ ] HTTPS enabled;
- [ ] custom domain configured;
- [ ] access logs available;
- [ ] `/api/health` monitored;
- [ ] `/api/ready` monitored separately if AI availability is business-critical;
- [ ] rate limiting/authentication added before exposing a billable model endpoint publicly;
- [ ] provider billing/usage alerts configured;
- [ ] rollback target is the immutable `v0.1.0` tag.

## v0.1.1 release rule

Do not move the existing `v0.1.0` tag. Deployment fixes are accumulated on `project/ziwei-ai-p8-deployment`, reviewed through a PR to `main`, then released as a new SemVer patch `v0.1.1` after online acceptance.
