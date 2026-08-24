# P5：AI 解盘 Agent

## 状态

实现完成，等待本分支 CI 验证。

## 数据边界

Agent 不排盘。输入链固定为：

`ChartInput -> ChartFacts -> PatternHit -> Hybrid RAG -> ModelProvider`

## 已实现

- OpenAI-compatible 服务端模型 Provider，可接 OpenAI、DeepSeek、Qwen、Kimi 或本地兼容端点。
- 环境变量工厂，缺少配置时 fail closed。
- `buildAgentContext()` 确定性编排。
- 命盘事实、格局证据和古籍 citation 注入 Prompt。
- JSON 结构化报告与 claim 级 `factIds/citationIds`。
- Prompt 注入边界：用户问题和检索文本均作为数据，不能覆盖系统约束。
- 禁止让模型重算星曜/宫位/四化。
- 禁止宿命化绝对断言。
- 健康主题仅允许传统文化/历史象意，不作医学诊断或治疗建议。
- 测试全部使用 Mock Provider，不依赖外网或 API Key。

## 下一阶段

P6：Critic / Evaluation，验证每条 AI claim 的事实引用和古籍引用。
