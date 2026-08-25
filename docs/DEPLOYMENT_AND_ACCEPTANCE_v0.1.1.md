# Deployment & Acceptance Runbook — v0.1.1

## Goal

v0.1.1 moves the audited v0.1.0 application from release-ready to a verified production deployment with liveness/readiness probes, Docker packaging, Vercel automation, remote acceptance and a switchable AI model gateway.

Deterministic chart semantics are unchanged.

## Runtime contract

- Node.js 22.x
- deterministic chart engine: `iztro 2.6.0`
- standard chart renderer: `react-iztro 1.5.0`
- install: `npm ci --ignore-scripts`
- build: `npm run build`
- start: `npm run start`

## Server-side AI configuration

Example:

```env
ZIWEI_AI_BASE_URL=https://opencode.ai/zen/go/v1
ZIWEI_AI_API_KEY=replace-me
ZIWEI_AI_MODEL=gpt-5.6-luna
ZIWEI_AI_API_STYLE=auto
ZIWEI_AI_TIMEOUT_MS=60000
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

`ZIWEI_AI_API_STYLE` accepts `auto`, `responses`, `chat-completions` or `messages`. Never expose API keys through `NEXT_PUBLIC_*` variables.

## Deployment option A — Vercel

Formal workflow: `.github/workflows/deploy-vercel.yml`.

Required GitHub Repository Secrets:

- `VERCEL_TOKEN`
- `ZIWEI_AI_BASE_URL`
- `ZIWEI_AI_API_KEY`
- `ZIWEI_AI_MODEL`

Optional:

- `ZIWEI_AI_API_STYLE`
- `ZIWEI_AI_TIMEOUT_MS`

The workflow can create/link the project, synchronize server-side environment variables, build, deploy, and run authenticated acceptance through Vercel Deployment Protection.

Verified project:

- Project: `ziwei-ai-platform`
- Production alias: `https://ziwei-ai-platform.vercel.app`
- Runtime: Node 22.x

## Deployment option B — Docker

Build:

```bash
docker build -t ziwei-ai-platform:0.1.1 .
```

Run:

```bash
docker run --rm -p 3000:3000 \
  -e ZIWEI_AI_BASE_URL=https://your-provider.example/v1 \
  -e ZIWEI_AI_API_KEY=replace-me \
  -e ZIWEI_AI_MODEL=your-model \
  -e ZIWEI_AI_API_STYLE=auto \
  -e ZIWEI_AI_TIMEOUT_MS=60000 \
  ziwei-ai-platform:0.1.1
```

Or use:

```bash
docker compose -f docker-compose.production.yml up -d
```

The runtime container runs as a non-root user and has a `/api/health` Docker HEALTHCHECK.

## Health and readiness

### `GET /api/health`

Liveness endpoint. It does not call an external model and does not expose provider URL, model name or API key.

A fully missing provider may still leave the base application healthy; partial/invalid provider configuration is reported as degraded.

### `GET /api/ready`

AI interpretation readiness endpoint. HTTP 200 means server-side provider configuration is complete and valid. Missing/invalid configuration returns HTTP 503.

## Model gateway

The runtime model gateway supports:

```text
responses
chat-completions
messages
```

`auto` uses known gateway/model routing and otherwise falls back to the OpenAI-compatible chat style. Explicit API style is available for gateways whose model list changes independently of this repository.

Retryable 429/5xx responses receive bounded retries; non-retryable provider errors fail closed.

## Release Gate

`Ziwei AI Release Gate` must pass:

1. locked dependency install;
2. TypeScript strict check;
3. P1–P10 regression tests;
4. Next.js production build;
5. real `next start` HTTP smoke test;
6. Docker image build;
7. production Compose validation;
8. Vercel configuration validation;
9. critical npm dependency audit.

The local production smoke verifies liveness, readiness fail-closed behavior, classics retrieval and model-unconfigured interpretation behavior.

## Production acceptance

A real Production deployment must additionally verify:

### A. Chart facts

- solar/lunar inputs produce valid 12-palace charts;
- leap-month paths remain valid;
- early Zi and late Zi remain distinct;
- true-solar correction may cross a civil-date boundary without losing the corrected date;
- standard and enhanced chart receive the same effective input.

### B. Pattern evidence

- matched star/palace Fact IDs resolve to actual ChartFacts;
- warning patterns remain traditional-cultural rules rather than deterministic real-world predictions.

### C. Classics retrieval

- retrieval API returns citation IDs and book/chapter/paragraph provenance;
- invalid and oversized requests are rejected.

### D. AI interpretation

- `/api/ready` returns 200 with production Provider configured;
- interpretation returns non-empty structured sections;
- claims retain Fact IDs/citation IDs;
- Critic result is present;
- health-cultural output does not become diagnosis/treatment instruction;
- API keys never appear in client responses.

### E. Production operations

- HTTPS and runtime logs available;
- `/api/health` monitored;
- `/api/ready` monitored separately when model availability matters;
- access control/rate limiting/budget controls applied before broad exposure of a billable endpoint;
- rollback target remains an immutable released deployment/Tag.

## Verified acceptance evidence

Production bootstrap run `32805475026` passed:

- health;
- readiness;
- classics RAG;
- a real model interpretation routed through `responses`;
- four report sections;
- Critic pass with no revision required.

Vercel Runtime Logs confirmed `/api/ziwei-ai/interpret` HTTP 200.

After P8/P9/P10 were merged in order, final `main` Release Gate #151 (`32806347433`) also passed in full.

## Release rule

Do not move `v0.1.0`. v0.1.1 is published as a new immutable Tag after the release branch passes its own gate. Subsequent fixes use a new patch version rather than rewriting released history.
