# P1：ChartFacts + iztro Adapter + 固定命盘回归测试

## 目标

建立 Ziwei AI 平台的确定性命盘事实层。所有后续格局识别、古籍 RAG 和 AI 解盘只能消费该层输出，禁止让 LLM 自行推算命盘。

## 工作范围

### 1. 定义统一领域模型

新增以下核心类型：

- `ChartFacts`
- `PalaceFact`
- `StarFact`
- `TransformationFact`
- `FortuneFacts`
- `PatternHit`（先定义接口，P3 再实现规则）

至少覆盖：

- 阳历 / 农历
- 出生日期
- 时辰
- 性别
- 出生地
- 真太阳时
- 农历信息
- 干支
- 生肖
- 五行局
- 命宫 / 身宫
- 十二宫
- 主星 / 辅星 / 杂曜
- 星曜亮度
- 四化
- 大限 / 小限 / 流年基础结构

## 2. 建立 `iztro -> ChartFacts` Adapter

约束：

- `iztro` 是唯一排盘 Source of Truth。
- Adapter 不输出自然语言解读。
- Adapter 不调用 LLM。
- 输出必须可 JSON 序列化。
- 输出必须包含 `schemaVersion`。
- 不允许 UI 层直接依赖 iztro 内部对象结构。

建议路径：

```text
packages/chart-types/
packages/chart-engine/
```

在当前临时仓库开发时，可先放在：

```text
lib/ziwei-ai/chart-types/
lib/ziwei-ai/chart-engine/
```

未来迁移到独立 `ziwei-ai` Monorepo。

## 3. 固定命盘测试集

至少准备 20 组 fixtures，覆盖：

- 男 / 女
- 12 个时辰中的多个代表值
- 子时边界
- 阳历 / 农历
- 闰月场景（若当前排盘入口支持）
- 不同五行局
- 不同四化组合
- 大限切换边界
- 至少 2 个已知公开命盘作为人工核验样本

每组 fixture 仅保存：

- 输入
- 关键确定性事实
- 预期宫位 / 主星 / 四化 / 运限字段

禁止保存模型生成的解读文本作为事实基线。

## 4. 回归测试

至少验证：

- 12 宫完整且唯一
- 命宫 / 身宫存在
- 14 主星分布不存在重复对象异常
- 四化映射正确
- 星曜所在宫位可反查
- 指定年份流年可稳定生成
- JSON Schema 不随内部 iztro 对象变化而意外破坏

## 5. 建议接口

```ts
export interface ChartInput {
  calendarType: 'solar' | 'lunar'
  date: string
  hourIndex: number
  gender: 'male' | 'female'
  birthplace?: string
  longitude?: number
  trueSolarTime?: string
}

export interface ChartFacts {
  schemaVersion: '1.0'
  input: ChartInput
  basics: ChartBasics
  palaces: PalaceFact[]
  transformations: TransformationFact[]
  fortune?: FortuneFacts
}

export function buildChartFacts(input: ChartInput): ChartFacts
```

## 6. 验收标准

- [ ] TypeScript strict 编译通过
- [ ] 至少 20 组 fixtures
- [ ] 所有 fixtures 回归测试通过
- [ ] 不调用任何 LLM
- [ ] 不需要网络访问
- [ ] 不需要 API Key
- [ ] 输出可以 `JSON.stringify()`
- [ ] `pattern-engine` 可直接读取输出
- [ ] `react-iztro` Wrapper 可通过同一输入重建显示盘

## 7. 明确不做

P1 不做：

- AI Prompt
- RAG
- 向量数据库
- 用户登录
- 支付
- 合盘 AI 解读
- UI 美化

## 8. 下一阶段

P1 完成后：

```text
P2 react-iztro Wrapper
  ↓
P3 Pattern Engine
  ↓
P4 Classics RAG
  ↓
P5 AI Agent
  ↓
P6 Critic / Evaluation
```
