import assert from 'node:assert/strict';
import test from 'node:test';
import type { ModelProvider } from '../../ai-agent';
import {
  BudgetedModelProvider,
  ProviderCallLimitError,
  interpretSafetyFromEnv,
  isInterpretOriginAllowed,
  tryAcquireInterpretSlot,
} from '../security';

test('interpret safety defaults are bounded and enabled', () => {
  const config = interpretSafetyFromEnv({});
  assert.equal(config.enabled, true);
  assert.equal(config.maxInflight, 2);
  assert.equal(config.maxProviderCalls, 2);
  assert.deepEqual(config.allowedOrigins, []);
});

test('interpret safety parses explicit production controls', () => {
  const config = interpretSafetyFromEnv({
    ZIWEI_AI_INTERPRET_ENABLED: 'false',
    ZIWEI_AI_MAX_INFLIGHT: '4',
    ZIWEI_AI_MAX_PROVIDER_CALLS: '1',
    ZIWEI_AI_ALLOWED_ORIGINS: 'https://example.com,https://www.example.com/',
  });
  assert.equal(config.enabled, false);
  assert.equal(config.maxInflight, 4);
  assert.equal(config.maxProviderCalls, 1);
  assert.deepEqual(config.allowedOrigins, ['https://example.com', 'https://www.example.com']);
});

test('interpret safety rejects invalid bounds and origins', () => {
  assert.throws(() => interpretSafetyFromEnv({ ZIWEI_AI_MAX_INFLIGHT: '0' }), RangeError);
  assert.throws(() => interpretSafetyFromEnv({ ZIWEI_AI_MAX_PROVIDER_CALLS: '3' }), RangeError);
  assert.throws(() => interpretSafetyFromEnv({ ZIWEI_AI_ALLOWED_ORIGINS: 'https://example.com/path' }), RangeError);
});

test('origin allowlist permits server calls without Origin and exact browser origins', () => {
  const config = interpretSafetyFromEnv({ ZIWEI_AI_ALLOWED_ORIGINS: 'https://example.com' });
  assert.equal(isInterpretOriginAllowed(new Request('https://service.test/api'), config), true);
  assert.equal(isInterpretOriginAllowed(new Request('https://service.test/api', { headers: { origin: 'https://example.com' } }), config), true);
  assert.equal(isInterpretOriginAllowed(new Request('https://service.test/api', { headers: { origin: 'https://evil.example' } }), config), false);
});

test('inflight slot guard releases capacity exactly once', () => {
  const config = interpretSafetyFromEnv({ ZIWEI_AI_MAX_INFLIGHT: '1' });
  const first = tryAcquireInterpretSlot(config);
  assert.ok(first);
  assert.equal(tryAcquireInterpretSlot(config), null);
  first.release();
  first.release();
  const second = tryAcquireInterpretSlot(config);
  assert.ok(second);
  second.release();
});

test('budgeted provider hard-stops calls beyond the configured request budget', async () => {
  let delegateCalls = 0;
  const delegate: ModelProvider = {
    id: 'fake-provider',
    async generate() {
      delegateCalls += 1;
      return { content: '{}', provider: 'fake-provider' };
    },
  };
  const provider = new BudgetedModelProvider(delegate, 1);
  await provider.generate({ messages: [], responseFormat: 'json', temperature: 0 });
  assert.equal(provider.callCount, 1);
  assert.equal(delegateCalls, 1);
  await assert.rejects(
    () => provider.generate({ messages: [], responseFormat: 'json', temperature: 0 }),
    ProviderCallLimitError,
  );
  assert.equal(delegateCalls, 1);
});
