# Changelog

All notable changes to this fork are documented here. The project follows Semantic Versioning while the public API is still pre-1.0.

## [Unreleased]

### Added

- P8 deployment-readiness layer targeting `v0.1.1`.
- `GET /api/health` liveness endpoint with secret-safe runtime status.
- `GET /api/ready` AI readiness endpoint.
- Production `next start` HTTP smoke test covering health, readiness, classics retrieval and AI fail-closed behavior.
- Production Docker packaging with non-root runtime user and container healthcheck.
- Deployment and online acceptance runbook.
- P9 GHCR publication workflow, production Docker Compose template and remote HTTPS acceptance workflow.
- P10 Vercel project configuration and bootstrap deployment workflow.
- Production remote acceptance can require AI readiness and execute one live interpretation with Critic validation.
- Vercel Deployment Protection bypass support in the remote smoke client.

### Changed

- Release gate now covers P1–P10 tests, production HTTP smoke verification, Docker image build, Compose validation and Vercel deployment configuration validation.
- `verify:release` includes the production smoke test after build.
- Remote smoke requests are bounded by timeouts and can enforce production AI readiness.

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
