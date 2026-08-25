import {
  modelRegistryFromEnv,
  UnknownModelProfileError,
} from '@/lib/ziwei-ai/ai-agent/model-registry';
import { interpretWithCritic } from '@/lib/ziwei-ai/critic';
import { parseInterpretApiPayload } from '@/lib/ziwei-ai/platform';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get('content-length') ?? 0);
  if (contentLength > 24_000) return Response.json({ error: 'request-too-large' }, { status: 413 });

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'invalid-json' }, { status: 400 });
  }
  const payload = parseInterpretApiPayload(body);
  if (!payload) return Response.json({ error: 'invalid-chart-input' }, { status: 400 });

  let registry;
  try {
    registry = modelRegistryFromEnv();
  } catch (error) {
    console.error('ziwei-ai provider configuration invalid', error);
    return Response.json({
      error: 'ai-provider-invalid',
      message: '服务端 AI Provider 配置无效，请检查模型注册表、Base URL、模型名与 API 协议设置。',
    }, { status: 503 });
  }

  if (!registry) {
    return Response.json({
      error: 'ai-provider-not-configured',
      message: '服务端尚未配置可用的 AI 模型 Profile。',
    }, { status: 503 });
  }

  let selection;
  try {
    selection = registry.select(payload.modelProfileId);
  } catch (error) {
    if (error instanceof UnknownModelProfileError) {
      return Response.json({
        error: 'unknown-model-profile',
        message: '所选 AI 模型已不可用，请刷新模型列表后重试。',
      }, { status: 400 });
    }
    console.error('ziwei-ai model selection failed', error);
    return Response.json({ error: 'ai-provider-invalid' }, { status: 503 });
  }

  try {
    const result = await interpretWithCritic({ ...payload, retrievalLimit: 8 }, selection.provider, true);
    return Response.json({
      report: result.report,
      critic: result.critic,
      revised: result.revised,
      providerId: result.providerId,
      modelProfile: selection.profile,
      patterns: result.context.patterns,
      retrieval: result.context.retrieval.map((hit) => ({
        citationId: hit.citationId,
        score: hit.score,
        bookTitle: hit.chunk.source.bookTitle,
        chapterTitle: hit.chunk.source.chapterTitle,
        paragraphId: hit.chunk.source.paragraphId,
      })),
    });
  } catch (error) {
    console.error('ziwei-ai interpret failed', error);
    return Response.json({ error: 'interpretation-failed' }, { status: 502 });
  }
}
