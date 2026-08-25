# P10 — Vercel 部署与生产验收

## 目标

P10 将 P8/P9 的通用部署能力接到 Vercel：首次运行可创建项目、同步服务端 AI Provider 配置、构建并部署，并对生产 URL 执行远程验收。

确定性排盘架构不变：`iztro -> ChartFacts -> Pattern Engine -> RAG -> AI -> Critic`。

## 当前 Vercel 目标

- Team: `ahczdr2026-1757`
- Team ID: `team_qPw2lbnCHwH2czTLcopawsqH`
- 默认 Project 名：`ziwei-ai-platform`
- Framework: Next.js
- Node.js: 22
- Vercel CLI: pinned to `59.5.0` in deployment workflow

## GitHub Actions Secrets

部署工作流只读取 Secret，不把值写入源码或日志。

必需：

- `VERCEL_TOKEN`

若 `sync_ai_env=true`，还需要：

- `ZIWEI_AI_BASE_URL`
- `ZIWEI_AI_API_KEY`
- `ZIWEI_AI_MODEL`

可选：

- `ZIWEI_AI_TIMEOUT_MS`
- `VERCEL_AUTOMATION_BYPASS_SECRET`（仅受 Deployment Protection 保护的远程验收需要）

禁止把上述真实值提交到 `.env.example`、workflow YAML、Issue、PR 评论或普通日志。

## 首次部署

工作流：`.github/workflows/deploy-vercel.yml`

手动触发 `Deploy to Vercel`：

1. `target=preview` 先做预览部署。
2. 保持 `project_name=ziwei-ai-platform`。
3. `sync_ai_env=true` 时，工作流从 GitHub Secrets 同步服务端 Provider 配置。
4. 工作流检查项目；不存在时执行 `vercel project add` 创建。
5. 执行 `vercel link`、`vercel pull`、`vercel build` 和 `vercel deploy --prebuilt`。
6. 返回 Deployment URL 后执行 `scripts/remote-smoke.mjs`。

## 生产部署门禁

`target=production` 时，部署后的远程 smoke 必须满足：

- `/api/health` HTTP 200，`status=ok`。
- `/api/ready` HTTP 200；AI Provider 必须 Ready。
- `/api/ziwei-ai/retrieve` 可检索古籍并返回 hits 数组。
- `/api/ziwei-ai/interpret` 实际完成一条固定测试命盘的 AI 解读。
- 解读响应存在非空 `report.sections`。
- 解读响应存在 Critic 结果。

生产 smoke 会产生一次真实模型调用，应计入模型费用和审计日志。

## 独立远程验收

工作流：`.github/workflows/remote-acceptance.yml`

可对任意 HTTPS 部署地址执行：

- 基础 smoke：`require_ready=false`、`check_interpret=false`。
- 生产 smoke：`require_ready=true`、`check_interpret=true`。

若 Preview/Production 开启 Vercel Deployment Protection，可在 GitHub Secrets 中配置 `VERCEL_AUTOMATION_BYPASS_SECRET`；脚本会通过 `x-vercel-protection-bypass` Header 使用该 Secret。

## 回滚

- 不移动现有 `v0.1.0` Tag。
- 新发布使用新的 SemVer Tag，例如 `v0.1.1`。
- 若 Vercel 新部署异常，优先在 Vercel 回滚到上一成功 Deployment；代码侧通过 Git revert/新 patch 修复，不改写已发布 Tag。

## 完成定义

P10 只有在以下全部满足后才能视为真正上线完成：

- Vercel Project 已存在。
- Preview 部署成功。
- Production 部署成功。
- 服务端 AI Provider 配置完成。
- Production `/api/ready` 为 200。
- Production live interpretation smoke 通过。
- 线上运行日志无持续 5xx。
- P8/P9/P10 合并后 main Release Gate 仍为全绿。
