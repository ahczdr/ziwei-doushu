import { inspectRuntimeStatus } from '@/lib/ziwei-ai/platform/runtime';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  const status = inspectRuntimeStatus();
  return Response.json({
    ...status,
    timestamp: new Date().toISOString(),
  }, {
    status: status.status === 'degraded' ? 503 : 200,
    headers: {
      'cache-control': 'no-store',
    },
  });
}
