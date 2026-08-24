# P2：react-iztro Wrapper + ChartFacts 可视化联动

## 状态

**代码与自动门禁完成。**

GitHub Actions `Ziwei AI P1-P2` 已通过：

- dependency install ✅
- TypeScript strict ✅
- P1 + P2 deterministic tests ✅
- Next.js production build ✅

仍保留一个明确的表单边界待后续迁移：旧 `BirthForm` 的经度修正只输出传统 12 地支索引，会把 23:00–24:00 晚子时折叠到子支；P1/P2 标准接口本身已经完整支持 iztro `12=晚子时`。后续应让表单直接输出完整 `ChartInput + trueSolarTime`，而不是继续在旧 `BirthInfo` 上补规则。

## 目标

在 P1 `ChartFacts` 确定性事实层之上接入 `react-iztro 1.5.0`，建立标准上游命盘显示盘，同时保留现有增强版 `ChartBoard`。

P2 的核心不是复制 `react-iztro` 源码，而是建立稳定的 UI Adapter：

```text
ChartInput
  ↓
buildChartFacts()
  ↓
ChartFacts（唯一事实）
  ↓
buildReactIztroViewModel()
  ↓
react-iztro Iztrolabe
```

## 原则

1. `react-iztro` 不成为第二套事实源。
2. Wrapper 始终从 `ChartFacts.basics.solarDate + effectiveBirthTime.hourIndex` 重建显示盘。
3. 无论原始输入是阳历、农历、闰月或真太阳时，UI 均消费同一份规范化结果。
4. `iztro` 版本固定为 `2.6.0`，`react-iztro` 固定为 `1.5.0`。
5. UI 使用与 P1 相同的 iztro 配置：`yearDivide=normal`、`horoscopeDivide=normal`、`ageDivide=normal`、`dayDivide=forward`、`algorithm=default`。
6. 保留当前 `ChartBoard`，提供“增强盘 / 标准盘”切换。
7. P2 不实现 AI、RAG、格局规则迁移。

## 工作项

- [x] 新增 `lib/ziwei-ai/ui-chart/`。
- [x] 新增 `buildReactIztroViewModel()`。
- [x] 新增 `ReactIztroBoard` Client Component。
- [x] 固定安装 `react-iztro 1.5.0`。
- [x] `/chart` 同时生成旧 `ZiweiChart` 与新 `ChartFacts`。
- [x] `/chart` 增加增强盘/标准盘切换。
- [x] P2 测试：阳历、农历、闰月、真太阳时、晚子时；早子时边界由 P1 回归集持续覆盖。
- [ ] 将旧 `BirthForm` 迁移为直接输出完整 `ChartInput + trueSolarTime`，彻底保留 23:00–24:00 晚子时 `index=12` 与跨日信息。
- [x] 标准盘显示输入与 ChartFacts 一致性摘要。
- [x] P1 Adapter 每次排盘前恢复 deterministic iztro config，隔离 react-iztro 全局配置副作用。
- [x] Next.js production build 通过。

## 验收

- [x] `react-iztro` 不直接接收原始用户输入，而接收 ChartFacts 规范化后的公历日期和有效时辰。
- [x] 标准案例 `2000-08-16 寅时 女` 在标准盘和 ChartFacts 中使用同一生日、同一时辰。
- [x] 农历等价案例最终显示盘使用 `2000-8-16` 公历规范化生日。
- [x] 闰月案例先进入 ChartFacts，再以规范化公历日期交给显示盘。
- [x] 真太阳时案例使用修正后的公历日期与时辰。
- [x] P1/P2 API 与 ViewModel 可保留 23 点晚子时 `index=12`。
- [x] 现有增强盘功能不删除。
- [x] TypeScript strict、回归测试、production build 均通过。
- [ ] 浏览器视觉人工复核（标准盘尺寸、移动端横向滚动、主题观感）。

## 下一阶段

P3 进入 **Pattern Engine**：把 `lib/ziwei/patterns.ts` 的现有格局判定迁移为只消费 `ChartFacts` 的结构化规则输出 `PatternHit[]`，并建立“规则命中 → 宫位/星曜证据 → 规则来源”的可追溯链。
