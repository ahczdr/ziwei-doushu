import { randomUUID } from 'node:crypto';
import {
  modelRegistryFromEnv,
  UnknownModelProfileError,
} from '@/lib/ziwei-ai/ai-agent/model-registry';
import { interpretWithCritic } from '@/lib/ziwei-ai/critic';
import { parseInterpretApiPayload } from '@/lib/ziwei-ai/platform';
import {
  BudgetedModelProvider,
  ProviderCallLimitError,
  interpretSafetyFromEnv,
  isInterpretOriginAllowed,
  tryAcquireInterpretSlot,
} from '@/lib/ziwei-ai/platform/security';

export const runtime = 'nodejs';

function jsonResponse(requestId: string, body: unknown, status = 200, headers: Record<string, string> = {}) {
  return Response.json(body, {
    status,
    headers: {
      'cache-control': 'no-store',
      'x-request-id': requestId,
      ...headers,
    },
  });
}

function logInterpret(event: Record<string, unknown>) {
  console.info(JSON.stringify({ event: 'ziwei-ai.interpret', ...event }));
}

export async function POST(request: Request) {
  const requestId = randomUUID();
  const startedAt = Date.now();

  let safety;
  try {
    safety = interpretSafetyFromEnv();
  } catch (error) {
    logInterpret({ requestId, status: 503, outcome: 'security-config-invalid', errorName: error instanceof Error ? error.name : 'unknown' });
    return jsonResponse(requestId, { error: 'security-config-invalid' }, 503, { 'retry-after': '60' });
  }

  if (!safety.enabled) {
    logInterpret({ requestId, status: 503, outcome: 'interpretation-disabled' });
    return jsonResponse(requestId, {
      error: 'interpretation-disabled',
      message: 'AI 解读当前已由服务端暂停。',
    }, 503, { 'retry-after': '60' });
  }

  if (!isInterpretOriginAllowed(request, safety)) {
    logInterpret({ requestId, status: 403, outcome: 'origin-not-allowed' });
    return jsonResponse(requestId, { error: 'origin-not-allowed' }, 403);
  }

  const contentLength = Number(request.headers.get('content-length') ?? 0);
  if (contentLength > 24_000) return jsonResponse(requestId, { error: 'request-too-large' }, 413);

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonResponse(requestId, { error: 'invalid-json' }, 400);
  }
  const payload = parseInterpretApiPayload(body);
  if (!payload) return jsonResponse(requestId, { error: 'invalid-chart-input' }, 400);

  let registry;
  try {
    registry = modelRegistryFromEnv();
  } catch (error) {
    console.error('ziwei-ai provider configuration invalid', error);
    return jsonResponse(requestId, {
      error: 'ai-provider-invalid',
      message: '服务端 AI Provider 配置无效，请检查模型注册表、Base URL、模型名与 API 协议设置。',
    }, 503);
  }

  if (!registry) {
    return jsonResponse(requestId, {
      error: 'ai-provider-not-configured',
      message: '服务端尚未配置可用的 AI 模型 Profile。',
    }, 503);
  }

  let selection;
  try {
    selection = registry.select(payload.modelProfileId);
  } catch (error) {
    if (error instanceof UnknownModelProfileError) {
      return jsonResponse(requestId, {
        error: 'unknown-model-profile',
        message: '所选 AI 模型已不可用，请刷新模型列表后重试。',
      }, 400);
    }
    console.error('ziwei-ai model selection failed', error);
    return jsonResponse(requestId, { error: 'ai-provider-invalid' }, 503);
  }

  const lease = tryAcquireInterpretSlot(safety);
  if (!lease) {
    logInterpret({ requestId, status: 429, outcome: 'local-concurrency-limit', profileId: selection.profile.id });
    return jsonResponse(requestId, {
      error: 'server-busy',
      message: '当前 AI 解读请求较多，请稍后重试。',
    }, 429, { 'retry-after': '15' });
  }

  const provider = new BudgetedModelProvider(selection.provider, safety.maxProviderCalls);
  try {
    const result = await interpretWithCritic(
      { ...payload, retrievalLimit: 8 },
      provider,
      safety.maxProviderCalls > 1,
    );
    logInterpret({
      requestId,
      status: 200,
      outcome: 'success',
      profileId: selection.profile.id,
      providerCalls: provider.callCount,
      revised: result.revised,
      criticPassed: result.critic.passed,
      durationMs: Date.now() - startedAt,
    });
    return jsonResponse(requestId, {
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
    const budgetExceeded = error instanceof ProviderCallLimitError;
    logInterpret({
      requestId,
      status: budgetExceeded ? 503 : 502,
      outcome: budgetExceeded ? 'provider-call-budget-exceeded' : 'interpretation-failed',
      profileId: selection.profile.id,
      providerCalls: provider.callCount,
      durationMs: Date.now() - startedAt,
      errorName: error instanceof Error ? error.name : 'unknown',
    });
    if (budgetExceeded) {
      return jsonResponse(requestId, { error: 'provider-call-budget-exceeded' }, 503, { 'retry-after': '60' });
    }
    console.error('ziwei-ai interpret failed', error);
    return jsonResponse(requestId, { error: 'interpretation-failed' }, 502);
  } finally {
    lease.release();
  }
}
