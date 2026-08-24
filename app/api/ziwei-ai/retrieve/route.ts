import { retrieveClassics } from '@/lib/ziwei-ai/rag';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'invalid-json' }, { status: 400 });
  }
  if (!body || typeof body !== 'object') return Response.json({ error: 'invalid-request' }, { status: 400 });
  const payload = body as Record<string, unknown>;
  const query = typeof payload.query === 'string' ? payload.query.trim().slice(0, 500) : '';
  if (!query) return Response.json({ error: 'query-required' }, { status: 400 });
  const limit = Math.min(20, Math.max(1, Number.isInteger(payload.limit) ? Number(payload.limit) : 8));
  const bookSlugs = Array.isArray(payload.bookSlugs)
    ? payload.bookSlugs.filter((item): item is string => typeof item === 'string').slice(0, 10)
    : undefined;
  const hits = await retrieveClassics({ query: undefined as never, text: query, limit, ...(bookSlugs?.length ? { bookSlugs } : {}) });
  return Response.json({
    hits: hits.map((hit) => ({
      citationId: hit.citationId,
      score: hit.score,
      text: hit.chunk.text,
      source: hit.chunk.source,
    })),
  });
}
