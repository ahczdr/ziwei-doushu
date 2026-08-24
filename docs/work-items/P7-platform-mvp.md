# P7：紫微斗数排盘 + AI 解盘平台 MVP

## 状态

功能实现完成，等待最终 P1-P7 CI 验证。

## 用户链路

```text
出生信息
  -> iztro 2.6.0
  -> ChartFacts
  -> 42 条 Pattern Engine
  -> 三套古籍 Hybrid RAG
  -> 服务端 ModelProvider
  -> AI 结构化解读
  -> Critic 校验/最多一次修订
  -> Web 报告 + 古籍引用 + grounding 指标
```

## Web 能力

- 原增强盘继续保留。
- react-iztro 标准盘。
- 完整格局证据链。
- 综合 / 事业 / 财运 / 感情 / 传统健康象意主题。
- 自由问题输入。
- 古籍引用展示。
- Critic score、grounded ratio、citation precision。
- `/api/ziwei-ai/retrieve` 离线古籍检索 API。
- `/api/ziwei-ai/interpret` 服务端 AI 解读 API。

## 安全与部署边界

- API Key 仅使用非 `NEXT_PUBLIC_` 服务端环境变量。
- 未配置 Provider 时返回 503，不回退到浏览器直连。
- 用户问题限长，HTTP body 设上限。
- 用户文本和古籍文本均作为数据，不允许覆盖系统 Prompt。
- AI 不负责排盘。
- 健康主题仅作传统文化资料说明，不用于医学诊断或治疗。
- 禁止宿命化绝对断言。

## 服务端配置

- `ZIWEI_AI_BASE_URL`
- `ZIWEI_AI_API_KEY`
- `ZIWEI_AI_MODEL`

兼容 OpenAI API 协议，可指向云模型或本地 vLLM/Ollama 兼容端点。

## 后续非阻塞事项

- 浏览器视觉人工复核。
- 古籍转录底本/来源的独立核验。
- 根据生产模型增加真实在线 E2E smoke test。
- 依赖安全审计与 Cloudflare adapter 升级独立处理。
