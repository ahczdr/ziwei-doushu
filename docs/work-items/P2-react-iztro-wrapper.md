# P2：react-iztro Wrapper + ChartFacts 可视化联动

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

- [ ] 新增 `lib/ziwei-ai/ui-chart/`。
- [ ] 新增 `buildReactIztroViewModel()`。
- [ ] 新增 `ReactIztroBoard` Client Component。
- [ ] 固定安装 `react-iztro 1.5.0`。
- [ ] `/chart` 同时生成旧 `ZiweiChart` 与新 `ChartFacts`。
- [ ] `/chart` 增加增强盘/标准盘切换。
- [ ] P2 测试：阳历、农历、闰月、真太阳时、早/晚子时。
- [ ] 修正出生表单晚子时 `23:00–24:00 -> index 12`。
- [ ] 标准盘显示输入与 ChartFacts 一致性摘要。

## 验收

- `react-iztro` 不直接接收原始用户输入，而接收 ChartFacts 规范化后的公历日期和有效时辰。
- 标准案例 `2000-08-16 寅时 女` 在标准盘和 ChartFacts 中使用同一生日、同一时辰。
- 农历等价案例最终显示盘使用 `2000-8-16` 公历规范化生日。
- 真太阳时案例使用修正后的公历日期与时辰。
- 23 点晚子时保留 index=12，不再压缩成早子时 index=0。
- 现有增强盘功能不删除。
