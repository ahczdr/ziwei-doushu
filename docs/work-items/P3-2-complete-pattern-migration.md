# P3.2：完整格局规则迁移

## 状态

已完成。

## 完成内容

- P3 首批 20 条规则保留。
- P3.2 新增 22 条规则。
- 完整注册表共 42 条确定性规则，ruleId 唯一。
- 已覆盖旧 `lib/ziwei/patterns.ts` 的主要正格、中格、助力、四化与警示规则。
- UI 已切换到完整规则注册表。
- 所有规则只读取 `ChartFacts`，不重新排盘、不调用 LLM。
- 警示类古籍组合只输出传统规则事实，不生成现实事件必然预测。

## 验收

- [x] TypeScript strict
- [x] P1-P3.2 全部回归测试
- [x] 真实 iztro 命盘证据 ID 可反查
- [x] Next.js production build
- [x] GitHub Actions green

## 下一阶段

P4：古籍语料结构化、全文检索、向量检索、Hybrid RAG、出处引用与来源治理。
