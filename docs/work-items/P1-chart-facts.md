# P1：ChartFacts + iztro Adapter + 固定命盘回归测试

## 当前状态

> 状态：**代码实现完成，自动执行验证待 GitHub Actions 启用/回传**  
> 分支：`project/ziwei-ai-integration`  
> PR：`#1 P1: deterministic ChartFacts adapter and regression suite`  
> 排盘基线：**iztro 2.6.0（精确锁定版本）**

已完成：

- `ChartFacts` / `PalaceFact` / `StarFact` / `TransformationFact` / `FortuneFacts` / `PatternHit` 类型。
- `iztro -> ChartFacts` 唯一 Adapter。
- 真太阳时作为实际排盘时间生效，而不是仅保存为展示字段。
- 十二宫、主星/辅星/杂曜、亮度、四化、大限、小限、固定日期运限快照结构化输出。
- 20 组固定输入 fixtures，包括阳历、农历、闰月、男女、早/晚子时和 2 组公开人物人工复核样本。
- iztro 上游标准案例硬断言与运限硬断言。
- GitHub Actions 工作流：安装依赖 → TypeScript typecheck → P1 回归测试。
- 自审修正：数值农历字段直接读取 `astrolabe.rawDates.lunarDate`，不再使用第二套历法库计算，确保 iztro 是唯一排盘事实源。
- 兼容性核对：iztro 2.5.8 已存在 `bySolar`、`byLunar`、`horoscope`、`rawDates`、0～12 时辰索引、Palace/Star 所需字段；当前工程最终固定到 2.6.0，避免 `^2.5.8` 在无 lockfile 情况下发生隐式版本漂移。

待验证：

- GitHub Actions 尚未返回 workflow run / status，因此目前**不能声明 typecheck 和 20 组自动测试已经通过**。
- 2 组公开人物 fixture 仍只作为人工排盘/UI 复核样本，不作为命理结论或人物经历的事实证据。

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

当前临时仓库实现路径：

```text
lib/ziwei-ai/chart-types/
lib/ziwei-ai/chart-engine/
```

未来迁移到独立 `ziwei-ai` Monorepo：

```text
packages/chart-types/
packages/chart-engine/
```

## 3. 固定命盘测试集

已建立 20 组 fixtures，覆盖：

- 男 / 女
- 12 个时辰中的多个代表值
- 早子时 / 晚子时边界
- 阳历 / 农历
- 闰月场景
- 多个出生年份与四化组合
- 固定日期运限快照
- 2 个公开人物输入作为人工核验样本

每组 fixture 仅保存输入、结构不变量和必要的确定性事实；不保存模型生成的解读文本作为事实基线。

其中硬基线包括：

1. `2000-8-16`、寅时、女：命宫午、身宫戌、木三局等 iztro 上游标准断言。
2. 固定运限日期 `2023-8-19 3:12`：大限、流年、虚岁等上游标准断言。
3. `1991-3-7`、午时、女 + `2025-3-26`：第二组固定运限断言。

## 4. 回归测试

自动测试已编写，验证：

- 12 宫完整且索引 / 宫名 / 地支唯一
- 命宫 / 身宫各存在一个
- 14 主星完整
- 星曜对象 ID 在单张 `ChartFacts` 内唯一
- 本命四化为禄 / 权 / 科 / 忌，并能反查宫位内星曜
- 大限 / 小限结构与十二宫对应
- 指定日期的运限快照可稳定生成
- 未指定日期时不读取系统“今天”生成快照
- `JSON.stringify()` / parse 往返可用
- 顶层 Schema 字段固定
- 上游标准案例关键字段精确匹配

## 5. 当前接口

```ts
export interface ChartInput {
  calendarType: 'solar' | 'lunar'
  date: string
  hourIndex: number // 0=早子时，12=晚子时
  gender: 'male' | 'female'
  isLeapMonth?: boolean
  fixLeap?: boolean
  birthplace?: string
  longitude?: number
  trueSolarTime?: string
}

export interface ChartFacts {
  schemaVersion: '1.0'
  engine: {
    name: 'iztro'
    language: 'zh-CN'
  }
  input: ChartInput
  effectiveBirthTime: EffectiveBirthTime
  basics: ChartBasics
  palaces: PalaceFact[]
  transformations: TransformationFact[]
  fortune: FortuneFacts
  patterns: PatternHit[]
}

export function buildChartFacts(
  input: ChartInput,
  options?: { fortuneDate?: string }
): ChartFacts
```

## 6. 验收状态

- [ ] TypeScript strict 编译通过 —— **待 CI 实际执行确认**
- [x] 至少 20 组 fixtures
- [ ] 所有 fixtures 回归测试通过 —— **测试代码已完成，待 CI 实际执行确认**
- [x] 不调用任何 LLM
- [x] Adapter 不需要网络访问
- [x] 不需要 API Key
- [x] 输出设计为可 `JSON.stringify()`，并已有往返测试
- [x] `pattern-engine` 可直接消费 `ChartFacts` / `PatternHit` 数据结构
- [ ] `react-iztro` Wrapper 可通过同一输入重建显示盘 —— **P2 实施**
- [ ] 2 组公开人物命盘完成人工 UI 复核 —— **P2 实施**

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

P1 自动门禁确认后进入：

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

P2 的核心要求是：**显示盘和 `ChartFacts` 使用同一份 `ChartInput`，UI 不重新定义任何命盘业务事实。**
