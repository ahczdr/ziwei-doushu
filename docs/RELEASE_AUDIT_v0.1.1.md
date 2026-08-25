# Release Audit — Ziwei AI Platform v0.1.1

Date: 2026-08-25

## Scope

This audit covers the v0.1.1 patch release built on the immutable v0.1.0 baseline. v0.1.1 adds deployment readiness, production observability, Vercel/Docker automation, authenticated online acceptance and a switchable multi-protocol AI model gateway. It does not change the deterministic chart-calculation authority.

Core invariant remains:

```text
ChartInput -> iztro -> ChartFacts -> Pattern Engine -> RAG -> AI Agent -> Critic
```

`iztro 2.6.0` remains the sole source of deterministic chart facts; the model must not recalculate chart positions, transformations or patterns.

## Version integrity

Release metadata is aligned to `0.1.1` in:

- `VERSION`
- `package.json`
- `package-lock.json`
- `CHANGELOG.md`
- `docs/RELEASE_NOTES_v0.1.1.md`

The npm metadata was generated with Node.js 22 using `npm version 0.1.1 --no-git-tag-version`; the one-time metadata workflow was removed before the final release gate.

The existing `v0.1.0` Tag is not moved or rewritten.

## P8 — Deployment readiness

Verified additions include:

- `/api/health` liveness endpoint;
- `/api/ready` AI readiness endpoint;
- production `next start` HTTP smoke;
- Docker multi-stage production image;
- non-root container runtime;
- Docker HEALTHCHECK;
- deployment and online acceptance runbook.

## P9 — Deployment automation

Verified additions include:

- GHCR publication workflow;
- production Docker Compose template;
- remote HTTPS acceptance workflow/client;
- Compose validation in the release gate.

## P10 — Vercel and switchable model gateway

Verified additions include:

- Vercel project/deployment workflow;
- Node.js 22.x runtime pinning;
- GitHub Secrets -> Vercel server environment synchronization;
- model API styles: `auto`, `responses`, `chat-completions`, `messages`;
- OpenCode Go routing, including Responses-style routing for GPT-5.6 Luna-class configuration;
- model prefix normalization for compatible gateway identifiers;
- bounded retry for retryable 429/common 5xx provider responses;
- authenticated Vercel production acceptance through Deployment Protection;
- generic remote smoke path retained for arbitrary HTTPS deployments.

The one-time bootstrap workflow used to create and validate the initial Vercel project was removed from the release branch. Ongoing deployment uses `.github/workflows/deploy-vercel.yml`.

## Production deployment evidence

Verified Vercel target:

- Team: `ahczdr2026-1757`
- Project: `ziwei-ai-platform`
- Project ID: `prj_fpI3Wzf8pn6mxIEwOosIhLUCdsAw`
- Production alias: `https://ziwei-ai-platform.vercel.app`
- Runtime: Node.js 22.x

Authenticated production bootstrap run `32805475026` completed successfully. The acceptance path verified:

```text
/api/health            PASS
/api/ready             PASS
Classics RAG           PASS
Real AI interpretation PASS
Provider protocol      responses
Report sections        4
Critic                  PASS
Revision required      no
```

Vercel Runtime Logs confirmed the accepted `/api/ziwei-ai/interpret` request returned HTTP 200.

No provider API key, Vercel token or other credential is stored in the repository.

## Merge and main validation evidence

P8, P9 and P10 were merged to `main` in dependency order.

Main commit after P10 merge and before release-only metadata/documentation cleanup:

`b43fa90f5670eaa77c5a1134c4df2cba9c12c463`

Main Release Gate #151 (`32806347433`) passed:

- locked npm install;
- TypeScript strict;
- P1–P10 regression tests;
- Next.js production build;
- production HTTP smoke;
- production Docker image build;
- production Compose validation;
- Vercel configuration validation;
- `npm audit --audit-level=critical`.

## Release branch cleanup

The `release/v0.1.1` branch additionally:

- finalized SemVer metadata at `0.1.1`;
- refreshed README for the v0.1.1 production baseline;
- finalized changelog and release notes;
- updated Vercel/deployment documentation to actual production state;
- removed the one-time project bootstrap workflow;
- removed the one-time version-bump workflow;
- upgraded the formal Vercel deployment workflow to use authenticated acceptance under Deployment Protection.

Pre-audit release-branch head after cleanup:

`5c4bf0b93c5b3d73da256a2d290865a80882dc06`

The commit containing this audit document must pass the full `Ziwei AI Release Gate` before merge. No release file changes should be made after that final successful gate without running the gate again.

## Security and grounding review

- AI credentials remain server-only.
- Health/readiness endpoints do not return API keys, provider URLs or model identifiers.
- Interpretation claims remain tied to Fact IDs and/or citation IDs.
- Critic retains grounding, citation, fatalistic-language and cultural-health checks.
- Health interpretation remains cultural/historical and not medical diagnosis or treatment guidance.
- AI cannot overwrite deterministic chart facts.
- Model failures fail closed at the interpretation boundary.
- Critical-level npm audit is enforced by CI.

## Known limitations

1. Classics electronic transcription provenance is not yet verified paragraph-by-paragraph against named scanned editions.
2. Public/billable model endpoints should retain suitable access control, rate limiting, budget limits and operational monitoring.
3. External provider model names/protocols can change independently; `ZIWEI_AI_API_STYLE` exists for explicit compatibility overrides.
4. Public APIs remain pre-1.0 and may evolve.
5. This audit does not claim exhaustive manual browser/device visual QA.
6. CI enforces critical-level npm audit; this is not a claim that advisories at every severity are zero.

## Release decision

v0.1.1 is eligible for merge and immutable Tag/Release creation only after:

1. this release branch head passes the complete release gate;
2. the release PR merge-context gate passes;
3. merged `main` passes its push gate;
4. `v0.1.1` is created at that exact audited `main` commit and is never moved.
