# Ziwei AI Platform v0.1.2

Release date: 2026-08-25

v0.1.2 is the production-safety and multi-model-control release of the Ziwei AI Platform. It keeps the deterministic chart/evidence architecture unchanged while adding declarative model Profiles, verified multi-model routing, billable-endpoint guardrails, Vercel Firewall rate limiting, request tracing, and privacy-safe runtime observability.

## Highlights

### Declarative multi-model Profiles

P11 moves runtime model selection into a declarative Profile registry:

```text
config/ziwei-ai-model-profiles.json
```

Profiles can select model name, API protocol and timeout without committing Provider credentials. Supported protocols remain:

```text
auto
responses
chat-completions
messages
```

The production baseline was validated with both the default GPT-5.6 Luna Responses route and the `qwen3.7-plus` Messages route. Runtime clients can read the non-secret Profile registry from `/api/ziwei-ai/models`.

### Production safety and cost controls

P12 protects the billable endpoint:

```text
POST /api/ziwei-ai/interpret
```

Application guardrails:

```text
ZIWEI_AI_INTERPRET_ENABLED
ZIWEI_AI_MAX_INFLIGHT
ZIWEI_AI_MAX_PROVIDER_CALLS
ZIWEI_AI_ALLOWED_ORIGINS
```

Production defaults:

```text
interpret enabled       true
max in-flight/instance  2
max Provider calls      2 per request
browser Origin          https://ziwei-ai-platform.vercel.app
```

`MAX_PROVIDER_CALLS=2` permits the normal “initial generation + at most one Critic-driven revision” path while preventing unbounded upstream calls.

### Vercel Firewall

A live project-level Firewall rule protects the interpretation endpoint before serverless execution:

```text
Path       /api/ziwei-ai/interpret
Method     POST
Key        IP
Limit      3 requests / 60 seconds
Algorithm  fixed_window
Action     rate_limit
```

Live verification confirmed requests 1–3 reached application validation and request 4 was rejected with HTTP 429 at the edge. The verification payloads were intentionally invalid and did not trigger model calls.

### Request tracing and privacy-safe logs

Every application `/interpret` response includes:

```text
Cache-Control: no-store
X-Request-Id: <uuid>
```

Runtime interpretation logs contain only operational metadata such as request ID, outcome, Profile ID, Provider call count, duration, revision status and Critic result. They do not log birth input, user question text, API keys, Provider Base URLs or client IPs.

## Verified production acceptance

Production project:

- Vercel project: `ziwei-ai-platform`
- Project ID: `prj_fpI3Wzf8pn6mxIEwOosIhLUCdsAw`
- Production alias: `https://ziwei-ai-platform.vercel.app`
- Accepted deployment: `dpl_6YjtWqt4aSJYcnrXJYDdp49K2wQN`
- Runtime: Node.js 22.x

P12 online evidence:

```text
Preview health/readiness/models/RAG      PASS
Preview real AI interpretation           PASS
Preview Critic                           PASS
Firewall published live                  PASS
Firewall 4th request -> HTTP 429         PASS
Production malicious Origin -> HTTP 403  PASS
Production real interpretation -> 200    PASS
Provider calls                           1
Critic                                   PASS
Revision required                        no
Cache-Control: no-store                  PASS
X-Request-Id                             PASS
```

Relevant acceptance runs:

- Preview acceptance: `32837901457`
- Firewall live verification: `32838316433`
- Public-edge header verification: `32843252935`

The first one-shot Production acceptance workflow used the beta `vercel curl --dump-header` path and failed a header assertion after the real interpretation had already succeeded. Vercel Runtime Logs and a direct public-edge HTTPS verification subsequently confirmed that the deployed application was healthy and both required response headers were present.

## Release verification

P12 was merged into `main` as commit:

```text
8b73ebe47e4a82771e8fca4f310aa96c1e411aa7
```

Main Release Gate #190 (`32843560512`) passed:

- locked dependency install;
- TypeScript strict;
- P1–P12 regression tests;
- Next.js production build;
- production HTTP smoke;
- production Docker image build;
- production Compose validation;
- Vercel config validation;
- declarative model Profile validation;
- critical npm dependency audit.

The v0.1.2 release branch runs the same gate again after version and documentation finalization.

## Deterministic architecture unchanged

```text
ChartInput
  -> iztro 2.6.0
  -> ChartFacts
  -> Pattern Engine
  -> Classics Hybrid RAG
  -> AI Agent
  -> Critic
```

`iztro 2.6.0` remains the sole source of deterministic chart facts. AI is not permitted to recalculate star positions, palaces, transformations or deterministic pattern hits.

## Grounding and safety boundaries

- AI claims retain Fact IDs and/or citation IDs.
- Critic checks grounding, citation precision, fatalistic wording and traditional-health boundaries.
- Health-related interpretation is cultural/historical only and is not medical diagnosis or treatment advice.
- Provider API keys and Vercel credentials remain server-side Secrets.
- Health/readiness/model-list endpoints do not expose credentials or Provider secrets.

## Known limitations

- Classics electronic transcription provenance is not yet verified paragraph-by-paragraph against named scanned editions.
- P12 does not implement a strongly consistent per-user daily quota; that requires durable storage plus an identity layer.
- External model names, protocols and availability can change independently of this repository.
- Public APIs remain pre-1.0 and may evolve.

## Upgrade from v0.1.1

1. Update to `v0.1.2`.
2. Run `npm ci` under Node.js 22.x.
3. Review `.env.example`, the Profile registry and P12 safety variables.
4. Run `npm run verify:release`.
5. Verify `/api/health`, `/api/ready` and `/api/ziwei-ai/models` after deployment.
6. Confirm the production Vercel Firewall rule remains published before enabling a billable Provider.

Existing `v0.1.0` and `v0.1.1` Tags are not moved or rewritten.
