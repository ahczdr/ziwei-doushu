# P11 — 运行时多模型注册表

## 目标

P11 将 v0.1.1 的“通过环境变量切换模型”升级为“同一部署内配置多个服务端模型 Profile，前端运行时选择”。切换模型不再要求修改 Secret 后重新部署。

确定性链路不变：

```text
ChartInput -> iztro -> ChartFacts -> Pattern Engine -> RAG -> AI Agent -> Critic
```

模型选择只发生在 AI Agent Provider 层，不影响排盘事实、格局规则或古籍检索。

## 配置方式

原有单模型变量继续兼容，并自动注册为 `default` Profile：

```env
ZIWEI_AI_BASE_URL=https://opencode.ai/zen/go/v1
ZIWEI_AI_API_KEY=server-secret
ZIWEI_AI_MODEL=gpt-5.6-luna
ZIWEI_AI_API_STYLE=auto
ZIWEI_AI_TIMEOUT_MS=60000
```

新增：

```env
ZIWEI_AI_PROFILES_JSON=[{"id":"qwen","label":"Qwen 3.7 Plus","model":"qwen3.7-plus"},{"id":"kimi","label":"Kimi K3","model":"kimi-k3"}]
ZIWEI_AI_DEFAULT_PROFILE=default
```

上述两个 Profile 没有重复写 `baseUrl` 或 Key，因此继承默认 Provider 的 OpenCode Go 地址和服务端 API Key。`apiStyle` 未指定时按每个模型独立自动判断协议。

## 不同 Provider

Profile 可以指定另一个 Base URL，但禁止直接把 Secret 放进 JSON。使用 `apiKeyEnv` 指向一个服务端环境变量：

```env
OPENAI_RUNTIME_KEY=server-only-secret
ZIWEI_AI_PROFILES_JSON=[{"id":"openai","label":"OpenAI Runtime","model":"gpt-runtime","baseUrl":"https://api.openai.com/v1","apiKeyEnv":"OPENAI_RUNTIME_KEY","apiStyle":"responses"}]
```

`apiKeyEnv` 是环境变量名称，不是 Key 值。对应 Secret 需要独立配置在 Vercel、Docker 或服务器环境中。

## 服务端模型列表 API

```text
GET /api/ziwei-ai/models
```

返回示例：

```json
{
  "configured": true,
  "defaultProfileId": "qwen",
  "profiles": [
    {
      "id": "qwen",
      "label": "Qwen 3.7 Plus",
      "model": "qwen3.7-plus",
      "apiStyle": "messages",
      "isDefault": true
    }
  ]
}
```

明确不会返回：

- API Key；
- API Key 环境变量的值；
- Base URL；
- Vercel Token；
- 其它服务端 Secret。

## Interpret API

`POST /api/ziwei-ai/interpret` 新增可选字段：

```json
{
  "modelProfileId": "qwen"
}
```

未指定时使用服务端默认 Profile。Profile ID 仅允许小写字母、数字、`_`、`-`，最长 32 字符；未知 Profile 返回 HTTP 400，不会回退到任意未授权 Provider。

Interpret 响应新增安全元数据：

```json
{
  "modelProfile": {
    "id": "qwen",
    "label": "Qwen 3.7 Plus",
    "model": "qwen3.7-plus",
    "apiStyle": "messages",
    "isDefault": true
  }
}
```

## 前端

`ZiweiAiPanel` 启动后读取 `/api/ziwei-ai/models`：

- 多个 Profile：显示模型下拉框；
- 一个 Profile：显示当前模型；
- 模型列表读取失败：保持 v0.1.1 的默认 Provider 兼容路径；
- 用户提交解盘时只发送 Profile ID，不发送 Provider 地址或 Secret。

## 安全与校验

模型注册表会拒绝：

- JSON 中的 raw `apiKey`；
- 重复 Profile ID；
- 路径式或异常 Profile ID；
- 不存在的 `apiKeyEnv`；
- 非 HTTP(S) Base URL；
- 非法协议类型；
- 超范围 timeout；
- 指向不存在 Profile 的默认 ID。

`/api/health` 和 `/api/ready` 仍然不暴露 Secret；readiness 现在同时支持 legacy 单 Provider 和 profile-only 配置。

## OpenCode Go 示例

当前自动协议映射仍由 `runtime-provider.ts` 负责，例如：

```text
gpt-5.6-luna  -> responses
qwen3.7-plus  -> messages
kimi-k3       -> chat-completions
```

外部服务的模型名称和协议可能变化，因此每个 Profile 仍可显式配置 `apiStyle` 覆盖自动判断。

## 部署

Docker Compose 新增传递：

```text
ZIWEI_AI_API_STYLE
ZIWEI_AI_PROFILES_JSON
ZIWEI_AI_DEFAULT_PROFILE
```

Vercel 正式部署工作流可从 GitHub Secrets 同步：

```text
ZIWEI_AI_PROFILES_JSON
ZIWEI_AI_DEFAULT_PROFILE
```

如果 Profile 使用自定义 `apiKeyEnv`，该对应 Secret 仍需单独存在于 Vercel/服务器环境；工作流不会动态读取或猜测 Secret 名称。

## P11 完成定义

- legacy 单 Provider 完全兼容；
- 多 Profile 注册、默认选择和运行时选择通过测试；
- 页面不接触 API Key/Base URL；
- unknown Profile fail closed；
- readiness 能识别 Profile Registry；
- P1–P11 Release Gate 全绿；
- Preview/Production 验收能检查模型列表和实际返回的 `modelProfile`；
- iztro / ChartFacts / Pattern / RAG / Critic 语义无变化。
