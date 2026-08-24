# P4：古籍 Hybrid RAG

## 状态

实现完成，等待本分支 CI 验证。

## 目标

将现有《骨髓赋》《紫微斗数全集》《紫微斗数全书》静态语料转为可引用、可检索的知识层，为 AI Agent 提供证据，不让模型凭空补写古籍内容。

## 已实现

- 三套现有古籍扁平化为 `ClassicChunk`。
- 段落级稳定 chunk ID 与 citation ID。
- 中文 unigram/bigram + ASCII token 的确定性词法检索。
- 离线 `DeterministicHashEmbeddingProvider`，无需网络/API Key 即可验证向量检索链路。
- OpenAI-compatible embeddings adapter，可接本地 vLLM/兼容服务。
- Hybrid lexical/vector retriever。
- 按书过滤与固定 top-k。
- `ChartFacts + PatternHit` 自动构造知识检索 Query。
- 来源治理字段：古籍原作状态与仓库转录来源分开记录。

## 来源治理

“历史原著年代久远”不等于“当前仓库转录文本来源已独立核验”。因此 P4 明确记录：

- `originalWorkStatus`
- `transcriptionProvenance`
- `provenanceVerified`
- `provenanceNote`

当前仓库转录统一标记 `provenanceVerified=false`，正式大规模再分发前应独立核验底本/转录来源。

## 明确不做

- 不新增来源不明的大段现代版权文本。
- 不要求外部向量数据库才能运行。
- 不在浏览器暴露 embedding API Key。

## 下一阶段

P5：AI Agent 编排层，只消费 `ChartFacts + PatternHit + RetrievalHit`。
