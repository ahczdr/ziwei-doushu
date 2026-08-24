# Ziwei AI Platform v0.1.0

Release date: 2026-08-24

## Release scope

v0.1.0 is the first consolidated MVP release of this fork. It promotes the previously stacked P1–P7 work into an independent release branch so that release history is no longer coupled to the intermediate development PR chain.

## Functional baseline

- Deterministic Zi Wei chart calculation through `iztro 2.6.0`.
- Standard chart rendering through `react-iztro 1.5.0` plus the original enhanced chart.
- Unified `ChartFacts` fact model.
- 42 deterministic pattern rules with evidence IDs and source metadata.
- Classics retrieval over the three repository texts using lexical + vector Hybrid RAG.
- Server-only OpenAI-compatible model abstraction.
- Grounded AI interpretation with explicit Fact IDs and citation IDs.
- Critic validation and one bounded revision pass.
- End-to-end `/chart` user flow and two Ziwei AI server APIs.

## Release architecture guarantee

The LLM is not the chart engine. The release path is:

`ChartInput → iztro → ChartFacts → Pattern Engine → RAG → AI Agent → Critic`.

Chart facts and pattern matches are deterministic program output. The language model receives them as evidence and is instructed not to recalculate them.

## Validation

The release branch must pass the GitHub Actions **Ziwei AI Release Gate** on Node.js 22:

1. install dependencies;
2. TypeScript strict check;
3. P1–P7 regression tests;
4. Next.js production build;
5. critical-level dependency audit.

The exact run and commit are recorded in `RELEASE_AUDIT_v0.1.0.md` after the gate completes.

## Deployment configuration

Copy `.env.example` to `.env.local` and provide server-side model settings:

```env
ZIWEI_AI_BASE_URL=https://api.deepseek.com/v1
ZIWEI_AI_API_KEY=your-server-side-api-key
ZIWEI_AI_MODEL=deepseek-chat
```

The model provider can also be a compatible Qwen, Kimi, OpenAI, vLLM or Ollama endpoint.

## Compatibility

- Node.js: 22+
- Next.js: 15.5.x
- React: 19.2.x
- iztro: 2.6.0
- react-iztro: 1.5.0

## Known pre-1.0 limitations

- No real provider credential is committed or used by CI; provider behavior is validated with the provider contract and mock-based tests.
- Text provenance needs edition-level verification before describing the repository electronic classics corpus as fully source-verified.
- A dependency lockfile is not yet committed because the upstream branch did not contain one; this is tracked as a release engineering limitation.
