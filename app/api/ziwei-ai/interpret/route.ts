import type { ChartInput } from '@/lib/ziwei-ai/chart-types';
import { providerFromEnv, type InterpretationTopic } from '@/lib/ziwei-ai/ai-agent';
import { interpretWithCritic } from '@/lib/ziwei-ai/critic';

export const runtime = 'nodejs';

const TOPICS = new Set<InterpretationTopic>(['overview', 'career', 'wealth', 'relationship', 'health-cultural', 'custom']);

function validInput(value: unknown): value is ChartInput {
  if (!value || typeof value !== 'object') return false;
  const input = value as Record<string, unknown>;
  return (input.calendarType === 'solar' || input.calendarType === 'lunar')
    && typeof input.date === 'string'
    && Number.isInteger(input.hourIndex)
    && Number(input.hourIndex) >= 0
    && Number(input.hourIndex) <= 12
    && (input.gender === 'male' || input.gender === 'female');
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get('content-length') ?? 0);
  if (contentLength > 24_000) {
    return Response.json({ error: 'request-too-large' }, { status: 413 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'invalid-json' }, { status: 400 });
  }
  if (!body || typeof body !== 'object') return Response.json({ error: 'invalid-request' }, { status: 400 });
  const payload = body as Record<string, unknown>;
  if (!validInput(payload.input)) return Response.json({ error: 'invalid-chart-input' }, { status: 400 });

  const question = typeof payload.question === 'string' ? payload.question.trim().slice(0, 1000) : undefined;
  const topic = typeof payload.topic === 'string' && TOPICS.has(payload.topic as InterpretationTopic)
    ? payload.topic as InterpretationTopic
    : 'overview';
  const fortuneDate = typeof payload.fortuneDate === 'string' ? payload.fortuneDate.slice(0, 32) : undefined;

  const provider = providerFromEnv();
  if (!provider) {
    return Response.json({
      error: 'ai-provider-not-configured',
      message: '服务端尚未配置 ZIWEI_AI_BASE_URL / ZIWEI_AI_API_KEY / ZIWEI_AI_MODEL。',
    }, { status: 503 });
  }

  try {
    const result = await interpretWithCritic({
      input: payload.input,
      topic,
      ...(question ? { question } : {}),
      ...(fortuneDate ? { fortuneDate } : {}),
      retrievalLimit: 8,
    }, provider, true);
    return Response.json({
      report: result.report,
      critic: result.critic,
      revised: result.revised,
      providerId: result.providerId,
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
