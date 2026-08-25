# P10 — Vercel 生产部署与可切换模型网关

## 目标

P10 将 P8/P9 的通用部署能力接入 Vercel，并完成真实生产验收；同时把 AI Provider 从单一 `/chat/completions` 假设升级为可切换的多协议网关。

确定性排盘架构保持不变：

```text
iztro -> ChartFacts -> Pattern Engine -> RAG -> AI -> Critic
```

AI 不参与命盘事实计算。

## 已验证的 Vercel 目标

- Team: `ahczdr2026-1757`
- Team ID: `team_qPw2lbnCHwH2czTLcopawsqH`
- Project: `ziwei-ai-platform`
- Project ID: `prj_fpI3Wzf8pn6mxIEwOosIhLUCdsAw`
- Production alias: `https://ziwei-ai-platform.vercel.app`
- Framework: Next.js
- Node.js: 22.x
- Vercel CLI: `59.5.0`

## GitHub Actions Secrets

正式部署工作流只读取 Secret，不把值提交到源码或普通日志。

必需：

- `VERCEL_TOKEN`
- `ZIWEI_AI_BASE_URL`
- `ZIWEI_AI_API_KEY`
- `ZIWEI_AI_MODEL`

可选：

- `ZIWEI_AI_API_STYLE`
- `ZIWEI_AI_TIMEOUT_MS`

`ZIWEI_AI_API_STYLE` 支持：

```text
auto
responses
chat-completions
messages
```

推荐默认使用 `auto`。同一网关切换模型通常只需要更新 `ZIWEI_AI_MODEL`。

禁止把真实 Token/API Key 提交到 `.env.example`、workflow YAML、Issue、PR 评论或普通日志。

## 多模型路由

服务端 `SwitchableModelProvider` 支持三种常见协议：

- OpenAI Responses：`/responses`
- OpenAI Chat Completions：`/chat/completions`
- Anthropic-style Messages：`/messages`

对已知 OpenCode Go 模型，`auto` 可以根据模型选择对应协议；也可以显式指定 API Style。模型 Provider 对 429 和常见 5xx 做有界重试，避免一次瞬时上游错误立即终止整次解盘。

示例：

```env
ZIWEI_AI_BASE_URL=https://opencode.ai/zen/go/v1
ZIWEI_AI_MODEL=gpt-5.6-luna
ZIWEI_AI_API_STYLE=auto
```

该配置在生产验收中实际走 `responses` 协议。

## 正式部署

工作流：`.github/workflows/deploy-vercel.yml`

手动触发 `Deploy to Vercel`：

1. 选择 `preview` 或 `production`。
2. 默认 Project 为 `ziwei-ai-platform`。
3. `sync_ai_env=true` 时，从 GitHub Secrets 同步服务端 Provider 配置。
4. 检查/创建并链接 Vercel Project。
5. 执行 `vercel pull`、`vercel build`、`vercel deploy --prebuilt`。
6. 部署完成后通过 Vercel CLI 的认证 `vercel curl` 执行验收，因此即使 Deployment Protection 开启也无需暴露测试 URL。

一次性 Bootstrap workflow 已在完成首轮生产部署后从 v0.1.1 发布分支移除；后续统一使用正式 `Deploy to Vercel` 工作流。

## Production 验收门禁

Production 部署必须通过：

- `/api/health`：`status=ok`
- `/api/ready`：`ready=true` 且 `aiProvider.state=configured`
- `/api/ziwei-ai/retrieve`：返回古籍 hits 数组
- `/api/ziwei-ai/interpret`：真实完成固定测试命盘的 AI 解读
- `report.sections` 非空
- Critic 对象存在

Production smoke 会产生真实模型调用，应计入模型费用和审计日志。

## 已完成的真实生产验收

Authenticated Production Bootstrap run：`32805475026`。

验收结果：

```text
Secrets sync        PASS
Node 22.x            PASS
Vercel build         PASS
Production deploy    PASS
/api/health          PASS
/api/ready           PASS
Classics RAG         PASS
AI interpretation    PASS
Provider protocol    responses
Report sections      4
Critic               PASS
Revision required    no
```

Vercel Runtime Logs 同时确认 `/api/ziwei-ai/interpret` 返回 HTTP 200。

随后 P8、P9、P10 按 stacked 顺序合并，最终 `main` Release Gate #151（`32806347433`）全部通过。

## 独立远程验收

工作流：`.github/workflows/remote-acceptance.yml`。

该工作流用于 Vercel 以外或需要直接使用 HTTPS URL 的场景。若目标开启 Vercel Deployment Protection，可配置：

- `VERCEL_AUTOMATION_BYPASS_SECRET`

`scripts/remote-smoke.mjs` 会发送 `x-vercel-protection-bypass` Header。

## 回滚

- 不移动已发布 Tag。
- v0.1.1 使用新的 `v0.1.1` Tag。
- Vercel 部署异常时优先回滚到上一成功 Deployment。
- 源码通过 Git revert 或新 patch 版本修复，不改写已发布版本历史。

## P10 完成状态

P10 已满足完成定义：Vercel Project、Production 部署、Provider 配置、真实 AI interpretation、Critic、运行日志以及合并后 main Release Gate 均已完成验证。
