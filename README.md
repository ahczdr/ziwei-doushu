# Ziwei AI Platform

> 当前发布基线：**v0.1.0** · 分支 `release/v0.1.0`

这是基于 `Renhuai123/ziwei-doushu`、`SylarLong/iztro` 与 `SylarLong/react-iztro` 构建的紫微斗数排盘 + 格局证据 + 古籍检索 + AI 解盘平台。

本 fork 的核心原则是：**排盘事实由确定性代码生成，AI 只解释事实，不负责计算星曜、宫位、四化或格局。**

## v0.1.0 已完成能力

- `iztro 2.6.0` 确定性排盘 Adapter
- `react-iztro 1.5.0` 标准十二宫显示盘
- 保留原有增强盘与交互能力
- `ChartFacts` 统一事实模型
- **42 条**结构化 Pattern Engine 规则
- 格局星曜 / 宫位 / 四化 Fact ID 证据链
- 三套现有古籍的全文检索与 Hybrid RAG
- 稳定的古籍 citation ID 与来源信息
- OpenAI-compatible 服务端模型 Provider
- AI 解盘 Agent：综合、事业、财运、感情、传统健康象意
- Critic：事实 ID、引用 ID、grounding、绝对化措辞和健康边界检查
- `/api/ziwei-ai/interpret`
- `/api/ziwei-ai/retrieve`
- P1–P7 自动回归测试 + TypeScript strict + Next.js production build

## 架构

```text
出生信息
  ↓
ChartInput
  ↓
iztro
  ↓
ChartFacts
  ├─→ react-iztro 标准盘
  ├─→ 原增强盘
  └─→ Pattern Engine
          ↓
      PatternHit[]
          ↓
     Classics Hybrid RAG
          ↓
        AI Agent
          ↓
         Critic
          ↓
AI 解盘报告 + Fact IDs + 古籍 Citations
```

AI 不允许重新排盘，也不允许伪造古籍来源。

## 目录

```text
app/
  api/ziwei-ai/
    interpret/
    retrieve/
  chart/
components/
lib/
  classics/
  ziwei/
  ziwei-ai/
    chart-engine/
    chart-types/
    ui-chart/
    pattern-engine/
    rag/
    ai-agent/
    critic/
    platform/
docs/
```

## 快速开始

要求：**Node.js 22+**。

```bash
git clone https://github.com/ahczdr/ziwei-doushu.git
cd ziwei-doushu
git checkout release/v0.1.0
npm install
cp .env.example .env.local
npm run dev
```

发布前完整校验：

```bash
npm run verify:release
```

## AI Provider 配置

AI API Key 只允许配置在服务端环境变量中，不使用 `NEXT_PUBLIC_` 暴露。

```env
ZIWEI_AI_BASE_URL=https://api.deepseek.com/v1
ZIWEI_AI_API_KEY=your-server-side-api-key
ZIWEI_AI_MODEL=deepseek-chat
```

也可以配置 Qwen、Kimi、OpenAI 或本地 vLLM / Ollama 的 OpenAI-compatible endpoint。

未配置 Provider 时，AI 解盘 API 会 fail closed；排盘、格局和古籍检索仍可独立工作。

## 测试分层

```text
P1  ChartFacts / iztro Adapter
P2  react-iztro ViewModel
P3  Pattern Engine / 42-rule registry
P4  Classics Hybrid RAG
P5  Grounded AI Agent
P6  Critic / evaluation
P7  Platform input + API boundary
```

执行全部测试：

```bash
npm test
```

## 古籍与引用

仓库当前包含：

- 《骨髓赋》
- 《紫微斗数全集》
- 《紫微斗数全书》

RAG 层区分两件事：

1. 古代原著本身的年代 / 公版状态；
2. 仓库内具体电子转录文本的来源与版本 provenance。

在没有完成具体底本校验前，不把“古籍年代久远”等同于“当前转录文本来源已经完全核验”。详见 `docs/UPSTREAM_AND_PROVENANCE.md`。

## 使用边界

本项目用于传统文化学习、资料检索和软件工程研究。

涉及“健康”的 AI 输出只允许解释传统文化中的象意，不提供医学诊断、治疗、用药或替代专业医疗建议。Critic 会对这类越界输出进行检测。

格局和 AI 解盘也不应被表述为现实事件的确定预测。

## 版本管理

项目采用 SemVer：

- `0.1.x`：MVP 修复与兼容性调整
- `0.x.0`：新增可见功能或数据契约
- `1.0.0`：接口稳定、部署与数据 provenance 达到正式生产要求

当前版本号同时记录在：

- `package.json`
- `VERSION`
- `CHANGELOG.md`
- `docs/RELEASE_NOTES_v0.1.0.md`

开发阶段分支 `project/ziwei-ai-p*` 保留为历史过程；正式可发布基线统一从 `release/*` 管理。

## 上游与许可

本仓库 fork 自：

- `Renhuai123/ziwei-doushu` — MIT
- 排盘引擎：`SylarLong/iztro` — MIT
- 标准盘组件：`SylarLong/react-iztro` — MIT

原项目作者、许可证与第三方项目归属不因本 fork 改变。请保留仓库中的 `LICENSE`，并查看 `docs/UPSTREAM_AND_PROVENANCE.md`。

`ziweiknows/ziwei-chart` 曾作为产品/UI 架构参考，其 GPLv3 源码不作为本 release 的直接代码基础。

## 当前发布状态

`release/v0.1.0` 从已经通过完整 P1–P7 GitHub Actions 的 P7 commit 建立，并额外执行发布分支门禁。

详细审计记录见 `docs/RELEASE_AUDIT_v0.1.0.md`。
