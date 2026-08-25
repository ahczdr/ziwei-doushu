# P12 — 生产安全与费用控制

## 目标

P12 在不改变确定性排盘、Pattern Engine、RAG、AI grounding 与 Critic 语义的前提下，为公开 AI 解读接口增加生产保护。

保护对象仅为计费/高耗时入口：

```text
POST /api/ziwei-ai/interpret
```

非计费能力（排盘、模型列表、古籍检索、health）不因紧急关闭 AI 解读而失效。

## 两层保护

### 1. Vercel Firewall（平台层）

生产环境对以下请求配置边缘限流：

```text
Path:   /api/ziwei-ai/interpret
Method: POST
Key:    IP
Limit:  3 requests / 60 seconds
Action: rate_limit -> HTTP 429
```

Firewall 在函数执行前处理流量，因此它是公开 Vercel 部署的第一道费用保护。应用内存中的并发计数不能替代这一层，因为 Serverless 可以横向扩容到多个实例。

### 2. 应用 Guard（函数层）

环境变量：

```env
ZIWEI_AI_INTERPRET_ENABLED=true
ZIWEI_AI_MAX_INFLIGHT=2
ZIWEI_AI_MAX_PROVIDER_CALLS=2
ZIWEI_AI_ALLOWED_ORIGINS=https://ziwei-ai-platform.vercel.app
```

含义：

- `ZIWEI_AI_INTERPRET_ENABLED=false`：紧急停止真实模型调用，`/interpret` 返回 503；
- `ZIWEI_AI_MAX_INFLIGHT`：每个运行实例允许的同时解读数，默认 2；
- `ZIWEI_AI_MAX_PROVIDER_CALLS`：单个用户请求最多调用上游模型次数，范围 1–2；
- `ZIWEI_AI_ALLOWED_ORIGINS`：可选浏览器 Origin 白名单，逗号分隔；无 `Origin` 的服务器验收请求仍允许通过。

`MAX_PROVIDER_CALLS=2` 对应现有正常链路：首次生成 + Critic 不通过时最多一次修订。设置为 1 时仍运行 Critic，但不会进行第二次模型修订，可作为临时降本模式。

## 返回行为

- 应用紧急关闭：503 `interpretation-disabled`，带 `Retry-After: 60`；
- 单实例并发已满：429 `server-busy`，带 `Retry-After: 15`；
- Origin 不在白名单：403 `origin-not-allowed`；
- Provider 调用预算被突破：503 `provider-call-budget-exceeded`；
- 所有 `/interpret` 响应带 `Cache-Control: no-store` 和 `X-Request-Id`。

## 安全日志

每个真实解读请求输出一条结构化事件：

```text
event=ziwei-ai.interpret
requestId
status
outcome
profileId
providerCalls
durationMs
revised
criticPassed
```

日志明确不记录：

- 出生日期、出生地、性别等命盘输入；
- 用户问题正文；
- API Key / Vercel Token；
- Provider Base URL；
- 客户端 IP。

这样可以使用 Vercel Runtime Logs 统计成功率、耗时、模型调用次数和错误类型，而不把命盘输入写入运维日志。

## Readiness

`GET /api/ready` 除 Provider 状态外，还返回非敏感的 `interpretSafety`：

- `state`
- `enabled`
- `maxInflight`
- `maxProviderCalls`
- `allowedOriginCount`

只有 Provider 已配置、Guard 配置合法且 AI 解读开关开启时，readiness 才返回 200。

`GET /api/health` 在人为关闭 AI 解读时仍保持健康；只有 Guard 配置非法才进入 degraded。

## 边界

P12 第一版不宣称提供跨云实例的数据库级日配额。全局入口频率由 Vercel Firewall 承担；若后续需要“每用户每天 N 次”“全站每天固定预算”等强一致配额，需要引入持久化计数器（例如 Redis/KV/数据库）和用户身份体系。

## 验收标准

1. P1–P12 Release Gate 全绿；
2. Preview `/api/health` 200；
3. Preview `/api/ready` 能看到合法 Guard 状态；
4. 正常真实解盘保持成功并通过 Critic；
5. `MAX_PROVIDER_CALLS=1` 单元测试证明第二次上游调用会被硬阻止；
6. Vercel Firewall 中生产规则已发布，而不是仅保存为 draft；
7. 生产公开域名正常解盘；
8. Runtime Logs 中只出现安全元数据，不出现用户问题/出生信息。

## 2026-08-25 在线验收证据

- PR Release Gate `#187`（run `32837620042`）：P1–P12、TypeScript、Next build、HTTP smoke、Docker、Compose、Vercel config、model profiles、critical audit 全部通过。
- Preview acceptance run `32837901457`：Preview 构建、部署、health、ready、models、RAG、真实 AI 解读与 Critic 全部通过。
- Preview deployment：`ziwei-ai-platform-bvu8900gv-ahczdr2026-1757.vercel.app`。
- Vercel Firewall：`Ziwei AI Interpret Rate Limit` 已发布为 live configuration；条件为 `POST /api/ziwei-ai/interpret`，按 IP `3 requests / 60s`，`fixed_window`，超限 `rate_limit`。
- Firewall live verification run `32838316433`：同一来源前三个无效请求进入应用并返回 400，第 4 个请求在边缘层返回 429；测试请求为空对象，未触发 Provider。
- Production deployment ID：`dpl_6YjtWqt4aSJYcnrXJYDdp49K2wQN`，commit `497d9a669d9d77a8888e50fbb27bcfec4bfe2cdd`，状态 `READY`，公共别名 `ziwei-ai-platform.vercel.app`。
- Production Runtime Logs：恶意浏览器 Origin 请求返回 403；真实 AI 解读返回 200，`providerCalls=1`、`revised=false`、`criticPassed=true`。
- Public-edge header verification run `32843252935`：无模型调用的无效请求返回 400，并实测客户端响应含 `Cache-Control: no-store` 和 `X-Request-Id`。

结论：P12 两层费用保护、生产部署、真实 AI 链路、Critic、Origin 约束、边缘限流、请求追踪与 no-store 均已在线验证。
