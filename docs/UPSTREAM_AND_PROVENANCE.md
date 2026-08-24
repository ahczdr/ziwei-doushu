# Upstream, Licenses and Provenance

## Code upstreams

This fork combines and references several upstream projects. Their ownership and licenses remain unchanged.

| Component | Upstream | Role in this fork | License treatment |
| --- | --- | --- | --- |
| Base application / legacy Zi Wei logic | `Renhuai123/ziwei-doushu` | Original repository base, legacy UI and knowledge code | MIT license retained |
| Deterministic chart engine | `SylarLong/iztro` | P1 chart calculation engine | MIT dependency, pinned at 2.6.0 |
| Standard chart UI | `SylarLong/react-iztro` | P2 twelve-palace standard chart rendering | MIT dependency, pinned at 1.5.0 |
| Product/UI architecture reference | `ziweiknows/ziwei-chart` | Design reference only | GPLv3 source is not used as the direct code base of this release |

The repository root `LICENSE` remains authoritative for code inherited under the upstream MIT license. Third-party package licenses remain governed by their own distributions.

## Classics data

The repository currently contains electronic text labeled as:

- 《骨髓赋》
- 《紫微斗数全集》
- 《紫微斗数全书》

P4 deliberately distinguishes:

1. **Original-work status** — historical texts may be old enough for the original work to be public domain in many jurisdictions.
2. **Transcription provenance** — the exact modern electronic transcription, punctuation, corrections, notes, compilation and edition used in this repository still require source-level verification.

Therefore the RAG layer records source metadata but does not claim that every repository paragraph has been verified against a named scanned edition. Before commercial redistribution of the text corpus, perform an edition-by-edition provenance review and retain source records.

## AI-generated interpretation

AI output is generated from deterministic chart facts, structured pattern hits and retrieved source chunks. It must not be treated as part of the historical texts themselves. Generated interpretation should always remain distinguishable from quoted/retrieved source evidence.

## Attribution

When redistributing this fork, retain:

- the root MIT `LICENSE`;
- upstream project attribution in this document;
- third-party dependency license notices as required by those packages;
- provenance metadata for any redistributed classics corpus.
