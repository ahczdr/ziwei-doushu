# Changelog

All notable changes to this fork are documented here. The project follows Semantic Versioning while the public API is still pre-1.0.

## [Unreleased]

## [0.1.1] - 2026-08-25

### Added

- P8 deployment-readiness layer with `GET /api/health` and `GET /api/ready`.
- Production `next start` HTTP smoke test covering health, readiness, classics retrieval and AI fail-closed behavior.
- Production Docker packaging with non-root runtime user and container healthcheck.
- P9 GHCR publication workflow, production Docker Compose template and remote HTTPS acceptance workflow.
- P10 Vercel project configuration, formal deployment workflow and authenticated production acceptance.
- Switchable AI model gateway supporting `responses`, `chat-completions` and `messages` API styles.
- `ZIWEI_AI_API_STYLE=auto` routing with explicit override support.
- OpenCode Go model routing, including GPT-5.6 Luna through the Responses-style endpoint.
- Bounded retry for retryable 429/5xx upstream model responses.
- Production live interpretation acceptance with Critic validation.
- Vercel Deployment Protection support through authenticated `vercel curl` in the formal deploy workflow and optional bypass header in generic remote smoke.

### Changed

- Vercel and application runtime are pinned to Node.js 22.x.
- Release gate now covers P1–P10 tests, production HTTP smoke, Docker image build, Compose validation and Vercel deployment configuration validation.
- `verify:release` includes the production smoke test after build.
- Remote smoke requests are bounded by timeouts and can enforce production AI readiness.
- AI Provider is no longer tied to a single `/chat/completions` request shape; model and protocol are selected by server-side environment configuration.
- README and deployment documentation now describe the verified v0.1.1 production path instead of the v0.1.0 development baseline.
- One-time Vercel bootstrap workflow removed after successful project creation and production acceptance; ongoing deployments use the formal `Deploy to Vercel` workflow.

### Production validation

- Vercel project `ziwei-ai-platform` created and deployed with Node.js 22.x.
- Production alias: `https://ziwei-ai-platform.vercel.app`.
- Authenticated production acceptance passed health, readiness, classics RAG, real AI interpretation and Critic checks.
- Accepted live interpretation returned four sections; Critic passed without requiring revision.
- Vercel Runtime Logs confirmed `/api/ziwei-ai/interpret` HTTP 200 for the accepted deployment.
- Final merged `main` Release Gate #151 (`32806347433`) passed all P1–P10, build, smoke, Docker, Compose, Vercel config and critical audit checks.

### Security / Grounding

- Provider API keys and Vercel tokens remain server-side Secrets and are not committed to the repository.
- Production acceptance can traverse Vercel Deployment Protection without making protected deployments public.
- AI still cannot calculate or modify deterministic chart facts.
- Claim-level Fact IDs/citation IDs and Critic grounding checks remain mandatory.
- Health-related output remains limited to traditional-cultural interpretation and cannot replace medical diagnosis or treatment.

### Known limitations

- Electronic transcription provenance for the classics corpus is not yet verified paragraph-by-paragraph against named scanned editions.
- Public/billable deployments should maintain suitable access control, rate limits, budget controls and operational monitoring.
- Provider protocol/model availability is controlled by external services and may change independently of this repository; use `ZIWEI_AI_API_STYLE` to override automatic routing when required.
- Public APIs are still pre-1.0 and may evolve.

## [0.1.0] - 2026-08-24

### Added

- Deterministic `ChartInput → iztro → ChartFacts` adapter.
- `react-iztro 1.5.0` standard chart integration while retaining the existing enhanced chart.
- Date-aware true-solar-time bridge with Equation of Time correction, cross-midnight handling and iztro late-Zi index `12`.
- Structured Pattern Engine with 42 registered deterministic rules and Fact ID evidence chains.
- Three-book classics corpus adapter with stable source/citation metadata.
- Chinese lexical retrieval, deterministic offline embeddings, and Hybrid RAG.
- Server-only OpenAI-compatible AI interpretation Agent with bounded provider timeout.
- Structured interpretation reports with claim-level `factIds` and `citationIds`.
- Deterministic Critic with grounding, citation precision, fatalistic-language and cultural-health boundary checks.
- Critic protection against empty/evidence-free reports.
- Server APIs: `/api/ziwei-ai/interpret` and `/api/ziwei-ai/retrieve` with bounded request validation.
- User-facing AI interpretation panel with topic modes and citation/critic display.
- P1–P7 regression test layers and release verification script.
- Committed npm lockfile for reproducible installs.

### Changed

- Release documentation now describes this fork rather than the upstream production site.
- CI release gate targets Node.js 22, uses `npm ci`, and covers `release/**` branches.
- Package metadata normalized to `ziwei-ai-platform` v0.1.0.
- React type definitions aligned with React 19.
- Removed unused/deprecated Vercel CLI, Cloudflare next-on-pages, Anthropic, Redis and PostgreSQL dependency chains from the release manifest.
- Critical `tar` dependency is overridden to the patched 7.5.22 line.

### Security / Grounding

- Model API keys remain server-side and are not exposed through `NEXT_PUBLIC_*` variables.
- The LLM is not permitted to calculate chart facts or invent citations.
- Health-related output is limited to traditional-cultural interpretation and cannot replace medical diagnosis or treatment.
- Model provider requests have a bounded timeout.
- Release CI blocks on critical npm audit findings.

### Known limitations

- No external live-LLM credential is stored in the repository; online provider integration must be configured by the deployer.
- Repository classics transcription provenance is not yet fully verified against a named scanned edition for every paragraph.
- Public deployments should add infrastructure-level authentication/rate limiting before attaching a billable model endpoint.
