# Changelog

All notable changes to this fork are documented here. The project follows Semantic Versioning while the public API is still pre-1.0.

## [0.1.0] - 2026-08-24

### Added

- Deterministic `ChartInput → iztro → ChartFacts` adapter.
- `react-iztro 1.5.0` standard chart integration while retaining the existing enhanced chart.
- Structured Pattern Engine with 42 registered deterministic rules and Fact ID evidence chains.
- Three-book classics corpus adapter with stable source/citation metadata.
- Chinese lexical retrieval, deterministic offline embeddings, and Hybrid RAG.
- Server-only OpenAI-compatible AI interpretation Agent.
- Structured interpretation reports with claim-level `factIds` and `citationIds`.
- Deterministic Critic with grounding, citation precision, fatalistic-language and cultural-health boundary checks.
- Server APIs: `/api/ziwei-ai/interpret` and `/api/ziwei-ai/retrieve`.
- User-facing AI interpretation panel with topic modes and citation/critic display.
- P1–P7 regression test layers and release verification script.

### Changed

- Release documentation now describes this fork rather than the upstream production site.
- CI release gate targets Node.js 22 and covers `release/**` branches.
- Package metadata normalized to `ziwei-ai-platform` v0.1.0.

### Security / Grounding

- Model API keys remain server-side and are not exposed through `NEXT_PUBLIC_*` variables.
- The LLM is not permitted to calculate chart facts or invent citations.
- Health-related output is limited to traditional-cultural interpretation and cannot replace medical diagnosis or treatment.

### Known limitations

- No external live-LLM credential is stored in the repository; online provider integration must be configured by the deployer.
- Repository classics transcription provenance is not yet fully verified against a named scanned edition for every paragraph.
- The upstream repository did not include a committed `package-lock.json`; dependency reproducibility is therefore weaker than a fully locked release until a lockfile is added.
