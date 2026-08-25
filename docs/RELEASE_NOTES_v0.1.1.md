# Ziwei AI Platform v0.1.1

Release date: 2026-08-25

v0.1.1 is the first production-validated deployment release of the Ziwei AI Platform. It keeps the v0.1.0 deterministic chart/evidence architecture intact while adding runtime observability, Docker/Vercel deployment paths, authenticated online acceptance, and a switchable multi-protocol AI model gateway.

## Highlights

### Production deployment

- Added `/api/health` liveness and `/api/ready` AI readiness endpoints.
- Added real `next start` HTTP smoke verification.
- Added production Docker image, non-root runtime and container healthcheck.
- Added Docker Compose and GHCR publication paths.
- Added formal Vercel deployment workflow with Node.js 22.x pinning.
- Production acceptance works through Vercel Deployment Protection using authenticated Vercel requests.

### Switchable model gateway

AI interpretation is no longer tied to a single `/chat/completions` request shape.

Supported API styles:

```text
auto
responses
chat-completions
messages
```

Server-side configuration:

```text
ZIWEI_AI_BASE_URL
ZIWEI_AI_API_KEY
ZIWEI_AI_MODEL
ZIWEI_AI_API_STYLE       optional, default auto
ZIWEI_AI_TIMEOUT_MS      optional
```

The gateway supports OpenCode Go, OpenAI-compatible providers and local compatible endpoints. Known OpenCode Go routes can be selected automatically; explicit protocol override remains available for provider changes.

Retryable 429 and common 5xx failures receive bounded retries.

## Verified production acceptance

Vercel project:

- Project: `ziwei-ai-platform`
- Project ID: `prj_fpI3Wzf8pn6mxIEwOosIhLUCdsAw`
- Runtime: Node.js 22.x
- Production alias: `https://ziwei-ai-platform.vercel.app`

Authenticated production run `32805475026` successfully validated:

```text
health                  PASS
readiness               PASS
classics RAG            PASS
real AI interpretation  PASS
provider protocol       responses
report sections         4
Critic                   PASS
revision required       no
```

Vercel Runtime Logs confirmed the accepted `/api/ziwei-ai/interpret` request returned HTTP 200.

## Release verification

P8, P9 and P10 were merged to `main` in stacked order. Final merged main commit before release preparation:

`b43fa90f5670eaa77c5a1134c4df2cba9c12c463`

Main Release Gate #151 (`32806347433`) passed:

- locked dependency install;
- TypeScript strict;
- P1–P10 regression tests;
- Next.js production build;
- production HTTP smoke;
- production Docker image build;
- production Compose validation;
- Vercel config validation;
- critical npm dependency audit.

The v0.1.1 release branch performs the same gate again after version/documentation cleanup.

## Deterministic architecture unchanged

```text
ChartInput
  -> iztro
  -> ChartFacts
  -> Pattern Engine
  -> Classics Hybrid RAG
  -> AI Agent
  -> Critic
```

`iztro 2.6.0` remains the sole source of deterministic chart facts. The model must not recalculate positions, transformations or patterns.

## Grounding and safety boundaries

- AI claims retain Fact IDs and/or citation IDs.
- Critic checks grounding, citation precision, fatalistic wording and traditional-health boundaries.
- Health-related interpretation is cultural/historical only and is not medical diagnosis or treatment advice.
- Provider API keys and Vercel credentials remain server-side Secrets.
- `/api/health` and `/api/ready` do not expose provider credentials, URLs or model names.

## Known limitations

- Classics electronic transcription provenance is not yet verified paragraph-by-paragraph against named scanned editions.
- Public/billable deployments should maintain suitable authentication, rate limiting, budget controls and monitoring.
- External model names, protocols and availability can change independently of this repository; explicit `ZIWEI_AI_API_STYLE` exists for compatibility overrides.
- Public APIs remain pre-1.0 and may evolve.

## Upgrade from v0.1.0

1. Update to `v0.1.1`.
2. Run `npm ci` under Node.js 22.x.
3. Review `.env.example` and select a Provider/model.
4. Keep `ZIWEI_AI_API_STYLE=auto` unless the Provider requires an explicit protocol.
5. Run `npm run verify:release`.
6. Verify `/api/health` and `/api/ready` after deployment.

The immutable `v0.1.0` Tag is not moved or rewritten.
