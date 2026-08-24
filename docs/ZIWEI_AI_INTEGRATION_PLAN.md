# Ziwei AI：紫微斗数排盘 + AI 解盘平台整合方案

> 状态：架构基线 v0.1
> 
> 目标：基于 `iztro`、`react-iztro`、`ziwei-doushu` 与 `ziwei-chart` 的优势，构建一个“确定性排盘 + 规则格局识别 + 古籍 RAG + AI 解读 + 可追溯证据”的紫微斗数 AI 平台。

## 1. 核心原则

1. **命盘事实必须由确定性算法生成，禁止让大模型自行推算宫位、星曜、四化和运限。**
2. **AI 只负责解释，不负责制造事实。**
3. **格局判断优先走规则引擎，再交给 LLM 组织语言。**
4. **古籍引用必须可追溯到具体书目、章节或条目。**
5. **模型 API Key 仅保存在服务端，不放到浏览器。**
6. **GPLv3 代码与拟采用 MIT/闭源商业主项目之间保持许可证边界。**
7. **所有 AI 输出都应保留“命盘事实 → 规则命中 → 知识检索 → 模型回答”的证据链。**

---

## 2. 四个上游项目的定位

### 2.1 `ahczdr/iztro` —— 排盘核心引擎

定位：**唯一主排盘源（Source of Truth）**。

负责：

- 阳历 / 农历出生信息处理
- 十二宫
- 主星、辅星、杂曜
- 四化
- 三方四正
- 大限、小限
- 流年、流月、流日、流时
- 运限宫位与飞化查询
- 多语言基础数据

原则：

- 不重复造一套排盘算法。
- 上游可通过依赖版本升级同步。
- 我们只在适配层统一输出自己的 `ChartFacts` 数据结构。

### 2.2 `ahczdr/react-iztro` —— 命盘显示组件

定位：**十二宫命盘可视化层**。

负责：

- Iztrolabe 总盘
- Palace 宫位显示
- Star 星曜显示
- 中宫信息
- 主题与基础交互

原则：

- 优先复用组件而不是复制源码。
- 增加平台自己的 UI Wrapper，避免业务逻辑直接侵入上游组件。
- 后续增加大限 / 流年切换、格局高亮、AI 证据联动。

### 2.3 `ahczdr/ziwei-doushu` —— 规则与知识主来源

定位：**格局知识库 + 古籍知识库 + 补充领域规则**。

重点复用：

- `lib/ziwei/patterns.ts`：格局判定规则
- `lib/ziwei/sihua.ts`：四化规则
- `lib/ziwei/heming-knowledge.ts`：合盘方法论
- `lib/ziwei/constants.ts`：领域常量
- `lib/classics/`：古籍结构与原文
- `lib/seo/`：结构化星曜 / 宫位知识（后续评估）

原则：

- 逐步把规则抽离成独立 `knowledge-engine` 包。
- 规则输出必须结构化，不直接拼最终自然语言答案。

### 2.4 `ahczdr/ziwei-chart` —— 产品与 AI 交互参考

定位：**产品交互、趋势可视化、多模型接入的参考实现**。

可参考：

- 出生地与真太阳时 UX
- 年度趋势 / 人生 K 线
- 双人合盘交互
- AI 设置与流式输出体验
- 本地知识检索结构

许可证边界：

- `ziwei-chart` 使用 GPLv3。
- 不将 GPLv3 代码直接复制进拟采用 MIT 或闭源商业主项目。
- 可学习交互思路、数据流和功能设计；若直接复用其代码，则对应衍生作品需要遵守 GPLv3。

---

## 3. 目标系统架构

```text
用户出生信息
    │
    ▼
Birth Normalizer
    ├─ 阳历/农历
    ├─ 出生地
    └─ 真太阳时
    │
    ▼
Iztro Adapter
    │
    ▼
ChartFacts（确定性命盘事实）
    │
    ├──────────────┐
    ▼              ▼
Pattern Engine   Fortune Engine
格局规则引擎      大限/流年/流月
    │              │
    └──────┬───────┘
           ▼
Evidence Builder
命盘证据构建
           │
           ├───────────────┐
           ▼               ▼
Classics RAG         Structured Knowledge
古籍检索             星曜/宫位/四化知识
           │               │
           └───────┬───────┘
                   ▼
               AI Agent
                   │
                   ▼
               Critic
          事实一致性/引用检查
                   │
         ┌─────────┴─────────┐
         ▼                   ▼
 AI 解盘报告            AI 对话
         │                   │
         └─────────┬─────────┘
                   ▼
              React Web UI
          react-iztro + 自研界面
```

---

## 4. 推荐主项目结构

未来新建主仓库 `ziwei-ai` 后采用 Monorepo：

```text
ziwei-ai/
├── apps/
│   ├── web/                    # Next.js Web
│   └── api/                    # 服务端 API（可先和 Next.js 合并）
│
├── packages/
│   ├── chart-engine/           # iztro 适配层
│   ├── chart-types/            # 统一领域类型
│   ├── pattern-engine/         # 格局规则
│   ├── knowledge-engine/       # 星曜/宫位/四化结构化知识
│   ├── classics-rag/           # 古籍切分、索引、检索
│   ├── ai-agent/               # 模型编排
│   ├── critic/                 # 事实一致性和引用检查
│   └── ui-chart/               # react-iztro Wrapper
│
├── data/
│   ├── classics/
│   ├── knowledge/
│   └── evaluation/
│
├── docs/
│   ├── architecture.md
│   ├── api.md
│   ├── knowledge-schema.md
│   └── evaluation.md
│
└── tests/
    ├── chart-fixtures/
    ├── patterns/
    ├── rag/
    └── ai-evals/
```

---

## 5. 第一核心数据模型：`ChartFacts`

AI 不直接消费 iztro 的任意对象，而是先统一成稳定 JSON。

建议：

```ts
interface ChartFacts {
  version: string
  input: {
    calendarType: 'solar' | 'lunar'
    date: string
    hourIndex: number
    gender: 'male' | 'female'
    birthplace?: string
    longitude?: number
    trueSolarTime?: string
  }
  basics: {
    lunarDate: string
    chineseDate: string
    zodiac: string
    fiveElementsClass: string
    bodyPalace: string
    soulPalace: string
  }
  palaces: PalaceFact[]
  transformations: TransformationFact[]
  patterns: PatternHit[]
  fortune?: FortuneFacts
}
```

`PatternHit` 必须包含：

```ts
interface PatternHit {
  id: string
  name: string
  level: 'primary' | 'secondary' | 'warning'
  matchedFacts: string[]
  ruleSource: string
  confidence: 1
}
```

这里规则命中属于确定性结果，`confidence` 固定为 1；不要把规则结果包装成模型概率。

---

## 6. 格局知识库改造

第一阶段直接使用 `ziwei-doushu/lib/ziwei/patterns.ts`。

第二阶段重构为：

```text
patterns/
├── primary/
├── wealth/
├── career/
├── relationship/
├── health/
├── transformations/
└── combinations/
```

每条规则统一为：

```ts
interface PatternRule {
  id: string
  name: string
  category: string
  description: string
  match(chart: ChartFacts): PatternEvidence | null
  references?: KnowledgeReference[]
}
```

收益：

- 可以单测每条格局
- 可以显示“为什么命中”
- 可以把规则和 AI 提示词完全解耦
- 后续可增加不同流派规则集

---

## 7. 古籍 RAG 设计

初始数据：

- 《骨髓赋》
- 《紫微斗数全集》
- 《紫微斗数全书》

处理流程：

```text
原文
 → 书目/章节结构化
 → 按语义条目切分
 → 标记星曜、宫位、四化、格局实体
 → 建全文索引
 → 建向量索引
 → Hybrid Retrieval
 → Rerank
 → 返回可引用 EvidenceChunk
```

推荐检索对象：

```ts
interface EvidenceChunk {
  id: string
  book: string
  chapter?: string
  title?: string
  text: string
  entities: string[]
  keywords: string[]
  sourcePath: string
}
```

检索采用：

1. 结构化实体过滤
2. BM25 / 全文检索
3. 向量相似度
4. 重排序

不要一开始就只做向量检索，否则星曜、宫位、格局等精确术语容易召回漂移。

---

## 8. AI Agent 处理链

### 8.1 输入

- `ChartFacts`
- `PatternHit[]`
- 当前运限事实
- 用户问题
- RAG 返回证据

### 8.2 Agent 规则

系统提示词必须明确：

- 不重新计算命盘
- 不新增未提供的星曜 / 宫位 / 四化
- 不把古籍原文当成现代确定性事实
- 观点必须区分：命盘事实 / 规则解释 / 古籍观点 / AI 归纳
- 医疗、投资、法律等问题不得输出确定性专业结论

### 8.3 输出结构

```ts
interface InterpretationResult {
  summary: string
  sections: InterpretationSection[]
  citedEvidence: EvidenceCitation[]
  factIds: string[]
  patternIds: string[]
  warnings: string[]
}
```

---

## 9. Critic / 事实校验层

AI 回答完成后执行：

1. 检查回答出现的宫位是否存在于 `ChartFacts`
2. 检查提到的主星是否真实落在对应宫位
3. 检查四化是否一致
4. 检查格局名称是否来自 `PatternHit`
5. 检查古籍引用是否真实存在
6. 识别“必然、一定、注定”等过度确定表达

若发现事实错误，自动要求模型基于证据重写。

---

## 10. 模型接入方式

不要沿用纯浏览器 API Key 方案。

统一服务端接口：

```text
POST /api/ai/interpret
POST /api/ai/chat
POST /api/chart
POST /api/fortune
POST /api/knowledge/search
```

服务端支持 OpenAI-compatible Provider：

- OpenAI
- DeepSeek
- Qwen
- Kimi
- Gemini（适配器）
- Claude（适配器）
- 本地 vLLM / Ollama / LM Studio

Provider 层统一接口：

```ts
interface LLMProvider {
  stream(messages: AgentMessage[], options: ModelOptions): AsyncIterable<string>
}
```

---

## 11. 前端页面规划

### MVP

1. 首页
2. 出生信息录入
3. 紫微命盘
4. 格局分析
5. AI 综合解盘
6. 大限 / 流年
7. 古籍证据
8. AI 对话
9. 设置

### 第二阶段

- 双人合盘
- 人生趋势 K 线
- 命盘保存
- 分享卡片
- 多模型选择
- 个人知识库
- 多流派切换

---

## 12. 第一阶段开发任务

### P0：工程基线

- [ ] 创建独立 `ziwei-ai` 主仓库
- [ ] 初始化 pnpm workspace / Turborepo
- [ ] 建立 TypeScript strict 模式
- [ ] 建立 lint / test / build CI
- [ ] 建立许可证与上游 Attribution 文档

### P1：排盘统一层

- [ ] 接入 `iztro 2.6.x`
- [ ] 定义 `ChartFacts`
- [ ] 写 `iztro -> ChartFacts` adapter
- [ ] 准备 20 组固定命盘测试样本
- [ ] 校验大限、流年、四化

### P2：显示层

- [ ] 接入 `react-iztro`
- [ ] 建立 UI Wrapper
- [ ] 命盘与 `ChartFacts` 联动
- [ ] 格局命中宫位高亮

### P3：格局引擎

- [ ] 导入 `patterns.ts`
- [ ] 转为结构化 `PatternHit`
- [ ] 为核心格局建立单元测试
- [ ] 建立规则来源字段

### P4：古籍知识库

- [ ] 导入三套古籍
- [ ] 结构化章节
- [ ] 实体标注
- [ ] 全文检索
- [ ] 向量检索
- [ ] Hybrid Retrieval

### P5：AI 解盘

- [ ] 服务端 Provider Adapter
- [ ] Interpretation Prompt v1
- [ ] 引用格式
- [ ] 流式输出
- [ ] Critic 校验

### P6：评测

- [ ] 排盘事实零幻觉测试
- [ ] 格局命中回归测试
- [ ] 古籍引用准确率
- [ ] AI 事实一致性评测
- [ ] 多模型结果对比

---

## 13. 许可证策略

### 可直接进入主项目

- `iztro`：MIT
- `react-iztro`：MIT
- `ziwei-doushu`：MIT（数据集另按其 attribution 要求）
- 古籍公版原文：按来源标注管理

### 仅作为参考，除非主项目接受 GPLv3

- `ziwei-chart`：GPLv3

因此默认策略：

> **主项目不复制 `ziwei-chart` 的实现代码，只参考其产品交互和系统设计。**

---

## 14. 推荐技术栈

```text
Frontend:   Next.js 15 + React 19 + TypeScript
UI:         Tailwind CSS
Chart:      react-iztro
Core:       iztro
Backend:    Next.js Route Handler（MVP）
DB:         PostgreSQL
Vector:     pgvector
Cache:      Redis（第二阶段）
LLM:        OpenAI-compatible Provider Adapter
RAG:        PostgreSQL FTS + pgvector Hybrid
Tests:      Vitest + Playwright
CI:         GitHub Actions
```

MVP 优先保持单体结构，确认业务闭环后再拆服务。

---

## 15. MVP 完成标准

用户输入出生信息后：

1. 系统生成可验证的紫微命盘；
2. 十二宫通过 `react-iztro` 可视化；
3. 系统确定性识别主要格局；
4. 用户可查看“格局为何命中”；
5. AI 根据命盘事实生成综合解读；
6. AI 解读可引用古籍条目；
7. 用户可以围绕命盘连续追问；
8. Critic 能阻止明显的宫位、星曜、四化幻觉；
9. API Key 不暴露到浏览器；
10. 可以切换至少两种 OpenAI-compatible 模型。

---

## 16. 下一步

当前分支只作为整合设计临时基线。正式开发前应建立独立主仓库 `ziwei-ai`，随后按以下顺序实施：

```text
ChartFacts
  → iztro Adapter
  → react-iztro Wrapper
  → Pattern Engine
  → Classics RAG
  → AI Agent
  → Critic
  → Web 产品化
```

第一段代码工作应从 **`ChartFacts + iztro Adapter + 固定命盘测试集`** 开始，而不是先写 AI Prompt。