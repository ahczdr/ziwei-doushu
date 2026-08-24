# P3：Pattern Engine + 格局证据链

## 目标

把旧 `lib/ziwei/patterns.ts` 中依赖 `ZiweiChart` 的格局识别逐步迁移为只消费 `ChartFacts` 的确定性规则引擎，为后续古籍 RAG、AI 解盘与 Critic 提供结构化 `PatternHit[]`。

## 架构

```text
ChartInput
  ↓
iztro
  ↓
ChartFacts
  ↓
Pattern Engine
  ↓
PatternHit[]
  ├─ ruleId
  ├─ category / level
  ├─ starNames / palaceNames
  ├─ matchedFacts
  ├─ evidence[]
  ├─ bonus / breaking
  ├─ source
  └─ confidence = 1
```

## P3 第一批迁移规则

共 20 条：

### 正格 / 主格
- 君臣庆会
- 紫府同宫
- 府相朝垣
- 杀破狼格
- 机月同梁

### 中格
- 廉相格
- 武曲七杀
- 天同天梁

### 助力
- 辅弼夹命
- 昌曲夹命
- 魁钺夹命
- 辅弼同会
- 昌曲同会
- 魁钺同会

### 四化
- 化禄入命
- 化权入官
- 化科入命身

### 警示
- 化忌入命迁
- 火铃夹命
- 空劫夹命

## 核心原则

1. Pattern Engine 不重新排盘，只读取 `ChartFacts`。
2. 四化直接读取 `StarFact.transformation`，不自行按天干重算。
3. 三方四正通过命宫地支 +0/+4/+8/+6 的宫位事实计算。
4. 夹宫通过命宫地支前后相邻宫计算。
5. 每条证据都返回 `factIds`，必须能回查到星曜 ID 或宫位 ID。
6. `confidence` 固定为 1，表示规则是否命中，不表示现实预测概率。
7. 旧 `patterns.ts` 暂时保留，作为迁移对照；未迁移规则继续列入后续批次。
8. 不把旧规则中的长篇自然语言预测当作事实，只保留规则条件和来源。

## 测试

- [x] 规则 ID 唯一性
- [x] 合成事实精确触发君臣庆会
- [x] 杀破狼三方四正正反例
- [x] 机月同梁四星齐会
- [x] 夹命边界
- [x] 四化直接读取 ChartFacts
- [x] `attachPatternHits()` 不修改原始 ChartFacts
- [x] 真实 iztro 命盘集成测试
- [x] 每个 `matchedFacts` 可反查
- [ ] CI TypeScript strict
- [ ] CI P1-P3 tests
- [ ] CI Next.js production build

## 页面集成

标准盘模式增加 `PatternEvidencePanel`：

- 显示命中数量
- 显示规则 ID / 分类 / 等级
- 展开查看证据文本
- 显示星曜/宫位事实 ID
- 显示古籍来源字段
- 明确说明这是传统规则程序匹配，不是现实事件确定预测

## 后续迁移批次

旧 `patterns.ts` 仍有约 20 条规则尚未进入新引擎，例如：

- 阳梁昌禄
- 火贪 / 铃贪
- 武贪
- 日月同宫
- 日月夹命
- 巨日同宫
- 石中隐玉
- 明珠出海
- 紫微入命细分
- 双禄朝垣
- 三奇嘉会
- 羊陀夹忌
- 铃昌陀武
- 马头带箭
- 禄存守身
- 天马入命
- 化禄入财
- 科权双会
- 机月同梁三星会

这些规则将在 P3.2 按同一 `PatternRule` 接口继续迁移，不需要改变 API。
