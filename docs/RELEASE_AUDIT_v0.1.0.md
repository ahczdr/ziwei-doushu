# Release Audit — Ziwei AI Platform v0.1.0

Audit date: 2026-08-24

## Decision

**Release candidate accepted for merge to `main`.**

The release branch is `release/v0.1.0`. It was created from the previously green P7 end-to-end implementation and then independently audited, corrected and versioned. The release no longer depends on the intermediate stacked PR chain being merged in sequence.

## Final validated code head

The code + release-engineering head validated by GitHub Actions before this audit-note-only commit is:

`c01322657bd33cc6fa11e843572f7ca0f40076a2`

GitHub Actions:

- Workflow: `Ziwei AI Release Gate`
- Run: `32788094876` / run #86
- Result: **success**
- Node.js: 22
- Dependency install: `npm ci --ignore-scripts`

Gate results:

- ✅ committed npm lockfile accepted by `npm ci`
- ✅ TypeScript strict check
- ✅ P1 deterministic chart / ChartFacts regression tests
- ✅ true-solar-time cross-day and early/late-Zi boundary tests
- ✅ P2 react-iztro ViewModel tests
- ✅ P3/P3.2 complete 42-rule Pattern Engine tests
- ✅ P4 Hybrid RAG tests
- ✅ P5 grounded AI Agent tests
- ✅ P6 Critic / grounding evaluation tests
- ✅ P7 platform input-boundary tests
- ✅ Next.js production build
- ✅ `npm audit --audit-level=critical`

## Source completeness reviewed

Core Ziwei AI modules present:

- `lib/ziwei-ai/chart-engine`
- `lib/ziwei-ai/chart-types`
- `lib/ziwei-ai/ui-chart`
- `lib/ziwei-ai/pattern-engine`
- `lib/ziwei-ai/rag`
- `lib/ziwei-ai/ai-agent`
- `lib/ziwei-ai/critic`
- `lib/ziwei-ai/platform`

Server APIs present:

- `app/api/ziwei-ai/interpret/route.ts`
- `app/api/ziwei-ai/retrieve/route.ts`

User-facing integration present:

- enhanced chart
- `react-iztro` standard chart
- deterministic pattern evidence panel
- grounded AI interpretation panel

## Defects found and corrected during release audit

### 1. True solar time bridge

The legacy birth form previously reduced corrected birth time to a 0–11 branch index and could lose Gregorian date rollover and iztro's late-Zi index `12`. It also labeled a longitude-only correction as true solar time.

Release correction:

- added date-aware apparent solar time calculation;
- added Equation of Time approximation;
- preserves cross-midnight Gregorian date;
- distinguishes early Zi (`0`) from late Zi (`12`);
- routes both enhanced and standard chart paths through the same effective corrected date/time.

### 2. Critic empty-report bypass

The previous Critic treated a report with zero claims as having a perfect grounded-claim ratio. A structurally empty report could therefore bypass the grounding threshold.

Release correction:

- zero-claim reports now produce `empty-evidence-report` error;
- zero-claim grounded ratio is `0`;
- an empty result after the single bounded revision also remains rejected.

### 3. API input validation

The initial platform validator did not fully validate civil dates, true-solar timestamps or longitude ranges.

Release correction:

- validates actual Gregorian solar dates;
- validates lunar numeric bounds;
- validates longitude `[-180, 180]`;
- validates full true-solar datetime syntax and date/time values;
- validates `fortuneDate` before model execution;
- bounds interpret and retrieval request bodies.

### 4. Provider timeout

The OpenAI-compatible model request had no bounded timeout.

Release correction:

- default timeout: 60 seconds;
- configurable through `ZIWEI_AI_TIMEOUT_MS`;
- accepted range: 1–300 seconds.

### 5. Dependency and release hygiene

Initial audit exposed one critical npm advisory through legacy deployment tooling.

Release correction:

- removed unused `vercel` CLI dependency;
- removed deprecated `@cloudflare/next-on-pages` dependency and scripts;
- removed unused Anthropic, Redis and PostgreSQL dependency chains;
- aligned React 19 type packages;
- constrained `tar` to patched `7.5.22`;
- generated and committed `package-lock.json` v3;
- switched CI from `npm install` to `npm ci`;
- critical npm audit now blocks release.

## Version management

Release version: `0.1.0`

Version is recorded in:

- `package.json`
- `package-lock.json`
- `VERSION`
- `CHANGELOG.md`
- `docs/RELEASE_NOTES_v0.1.0.md`

Branch policy:

- `project/ziwei-ai-p*` — development/history branches;
- `release/v0.1.0` — audited release candidate;
- `main` — stable merge target.

## Upstream and licensing review

- base repository: `Renhuai123/ziwei-doushu` — MIT;
- `SylarLong/iztro` — MIT;
- `SylarLong/react-iztro` — MIT;
- `ziweiknows/ziwei-chart` GPLv3 code is treated as architecture/product reference, not the direct source base of this release.

See `docs/UPSTREAM_AND_PROVENANCE.md` for details.

## Known limitations accepted for v0.1.0

1. CI does not use a real billable LLM credential; provider behavior is validated with interfaces/mocks and production code builds successfully.
2. The exact electronic transcription provenance of every classics paragraph is not yet verified against a named scanned edition.
3. Public deployment with a billable AI endpoint should add infrastructure-level authentication/rate limiting.
4. `v0.1.0` is an MVP/pre-1.0 release; API/data contracts may still change in later `0.x` versions.

These are documented release limitations, not hidden blockers to the current code build.
