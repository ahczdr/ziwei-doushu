# Ziwei AI Platform

> 当前发布基线：**v0.1.1** · Node.js 22 · Vercel / Docker 可部署

这是基于 `Renhuai123/ziwei-doushu`、`SylarLong/iztro` 与 `SylarLong/react-iztro` 构建的紫微斗数排盘 + 格局证据 + 古籍检索 + AI 解盘平台。

核心原则：**排盘事实由确定性代码生成，AI 只解释事实，不负责计算星曜、宫位、四化或格局。**

## v0.1.1 能力

- `iztro 2.6.0` 作为确定性排盘事实唯一 Source of Truth
- `react-iztro 1.5.0` 标准十二宫显示盘，并保留原增强盘
- `ChartFacts` 统一事实模型
- 真太阳时：日期感知、Equation of Time、跨日、早/晚子时区分
- **42 条**结构化 Pattern Engine 规则与 Fact ID 证据链
- 三套古籍语料、稳定 citation ID 与 Hybrid RAG
- AI 解盘 Agent：综合、事业、财运、感情、传统健康象意
- Critic：事实 ID、引用 ID、grounding、绝对化措辞和健康边界检查
- 多模型网关：`responses` / `chat-completions` / `messages`
- `ZIWEI_AI_API_STYLE=auto` 自动选择协议
- 支持 OpenCode Go、OpenAI-compatible 网关、本地 vLLM / Ollama 等服务
- 429 / 5xx Provider 有界重试
- `/api/health`、`/api/ready`
- `/api/ziwei-ai/interpret`、`/api/ziwei-ai/retrieve`
- Production HTTP smoke、Docker image、Docker Compose、Vercel 部署门禁
- Vercel Deployment Protection 下的认证生产验收
- P1–P10 自动回归测试、TypeScript strict、Next.js production build、critical audit

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

## 快速开始

要求：**Node.js 22.x**。

```bash
git clone https://github.com/ahczdr/ziwei-doushu.git
cd ziwei-doushu
git checkout v0.1.1
npm ci
cp .env.example .env.local
npm run dev
```

发布前完整校验：

```bash
npm run verify:release
```

## AI Provider 配置

所有 Provider 凭证仅允许放在服务端环境变量中，不要使用 `NEXT_PUBLIC_` 前缀。

### OpenCode Go 示例

```env
ZIWEI_AI_BASE_URL=https://opencode.ai/zen/go/v1
ZIWEI_AI_API_KEY=your-server-side-api-key
ZIWEI_AI_MODEL=gpt-5.6-luna
ZIWEI_AI_API_STYLE=auto
ZIWEI_AI_TIMEOUT_MS=60000
```

`auto` 会根据已知网关/模型选择协议。也可以显式配置：

```text
responses
chat-completions
messages
```

切换同一网关内的模型通常只需要修改 `ZIWEI_AI_MODEL`。切换供应商时修改 `ZIWEI_AI_BASE_URL`、`ZIWEI_AI_API_KEY` 和模型名即可。

### 本地 OpenAI-compatible 示例

```env
ZIWEI_AI_BASE_URL=http://127.0.0.1:8000/v1
ZIWEI_AI_API_KEY=local-only
ZIWEI_AI_MODEL=Qwen3.6-35B-A3B
ZIWEI_AI_API_STYLE=chat-completions
```

未配置 Provider 时，AI 解盘 API fail closed；确定性排盘、格局检测和古籍检索仍可独立工作。

## 部署

### Vercel

正式工作流：`.github/workflows/deploy-vercel.yml`。

需要 GitHub Repository Secrets：

```text
VERCEL_TOKEN
ZIWEI_AI_BASE_URL
ZIWEI_AI_API_KEY
ZIWEI_AI_MODEL
```

可选：

```text
ZIWEI_AI_API_STYLE
ZIWEI_AI_TIMEOUT_MS
```

工作流可创建/连接 Vercel Project、同步服务端环境变量、构建并部署。Production 部署完成后使用 Vercel 认证请求验证：

```text
/api/health
/api/ready
/api/ziwei-ai/retrieve
/api/ziwei-ai/interpret
Critic
```

当前已验证的生产项目为 `ziwei-ai-platform`，生产别名为 `https://ziwei-ai-platform.vercel.app`。

### Docker

```bash
docker build -t ziwei-ai-platform:0.1.1 .
docker compose -f docker-compose.production.yml up -d
```

容器使用非 root 用户，并通过 `/api/health` 提供 HEALTHCHECK。

详细步骤见：

- `docs/DEPLOYMENT_AND_ACCEPTANCE_v0.1.1.md`
- `docs/P10_VERCEL_DEPLOYMENT.md`

## 测试分层

```text
P1   ChartFacts / iztro Adapter
P2   react-iztro ViewModel
P3   Pattern Engine / 42-rule registry
P4   Classics Hybrid RAG
P5   Grounded AI Agent
P6   Critic / evaluation
P7   Platform input + API boundary
P8   Runtime health/readiness + deployment smoke
P9   GHCR / Compose / remote acceptance
P10  Vercel production + switchable model gateway
```

执行全部测试：

```bash
npm test
```

Release Gate 额外执行 production build、HTTP smoke、Docker build、Compose 校验、Vercel config 校验与 critical npm audit。

## 古籍与引用

仓库当前包含：

- 《骨髓赋》
- 《紫微斗数全集》
- 《紫微斗数全书》

RAG 层区分古籍原著的历史/公版状态与仓库内电子转录文本的具体 provenance。在完成具体底本校验前，不把“古籍年代久远”等同于“当前电子转录来源已完全核验”。详见 `docs/UPSTREAM_AND_PROVENANCE.md`。

## 使用边界

本项目用于传统文化学习、资料检索和软件工程研究。

涉及健康的 AI 输出只允许解释传统文化中的象意，不提供医学诊断、治疗、用药或替代专业医疗建议。Critic 会检测越界输出。格局和 AI 解盘也不应被表述为现实事件的确定预测。

## 版本管理

项目采用 SemVer，公共接口仍处于 pre-1.0：

- `0.1.x`：MVP 修复、部署与兼容性增强
- `0.x.0`：较大的可见功能或数据契约变化
- `1.0.0`：接口、部署与数据 provenance 达到稳定发布要求

当前版本记录在：

- `package.json`
- `package-lock.json`
- `VERSION`
- `CHANGELOG.md`
- `docs/RELEASE_NOTES_v0.1.1.md`

开发分支 `project/ziwei-ai-p*` 保留为历史过程；正式发布基线统一从 `release/*` 管理，已发布 Tag 不移动。

## 上游与许可

本仓库 fork 自：

- `Renhuai123/ziwei-doushu` — MIT
- 排盘引擎：`SylarLong/iztro` — MIT
- 标准盘组件：`SylarLong/react-iztro` — MIT

原项目作者、许可证与第三方项目归属不因本 fork 改变。请保留仓库中的 `LICENSE`，并查看 `docs/UPSTREAM_AND_PROVENANCE.md`。

`ziweiknows/ziwei-chart` 曾作为产品/UI 架构参考，其 GPLv3 源码不作为本 release 的直接代码基础。
