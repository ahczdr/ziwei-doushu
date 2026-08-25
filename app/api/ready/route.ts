import { inspectRuntimeStatus } from '@/lib/ziwei-ai/platform/runtime';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  const status = inspectRuntimeStatus();
  const ready = status.aiProvider.state === 'configured'
    && status.interpretSafety.state === 'configured'
    && status.interpretSafety.enabled;
  return Response.json({
    service: status.service,
    ready,
    aiProvider: status.aiProvider,
    interpretSafety: status.interpretSafety,
    timestamp: new Date().toISOString(),
  }, {
    status: ready ? 200 : 503,
    headers: {
      'cache-control': 'no-store',
    },
  });
}
