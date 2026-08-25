import { modelRegistryFromEnv } from '@/lib/ziwei-ai/ai-agent/model-registry';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const headers = { 'cache-control': 'no-store' };

export async function GET() {
  try {
    const registry = modelRegistryFromEnv();
    if (!registry) {
      return Response.json({
        configured: false,
        defaultProfileId: null,
        profiles: [],
      }, { headers });
    }

    return Response.json({
      configured: true,
      defaultProfileId: registry.defaultProfileId,
      profiles: registry.listPublicProfiles(),
    }, { headers });
  } catch (error) {
    console.error('ziwei-ai model registry configuration invalid', error);
    return Response.json({
      configured: false,
      defaultProfileId: null,
      profiles: [],
      error: 'ai-provider-invalid',
    }, { status: 503, headers });
  }
}
