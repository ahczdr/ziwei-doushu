import assert from 'node:assert/strict';
import test from 'node:test';
import { inspectRuntimeStatus } from '../runtime';

test('runtime status is healthy when AI provider is intentionally absent', () => {
  const status = inspectRuntimeStatus({ NODE_ENV: 'production' });
  assert.equal(status.status, 'ok');
  assert.equal(status.aiProvider.state, 'missing');
  assert.equal(status.aiProvider.timeoutMs, 60_000);
  assert.equal(status.aiProvider.profileCount, 0);
});

test('runtime status reports configured provider without exposing secrets', () => {
  const status = inspectRuntimeStatus({
    NODE_ENV: 'production',
    ZIWEI_AI_BASE_URL: 'https://example.test/v1',
    ZIWEI_AI_API_KEY: 'secret-value',
    ZIWEI_AI_MODEL: 'test-model',
    ZIWEI_AI_TIMEOUT_MS: '45000',
  });
  assert.equal(status.status, 'ok');
  assert.equal(status.aiProvider.state, 'configured');
  assert.equal(status.aiProvider.timeoutMs, 45_000);
  assert.equal(status.aiProvider.profileCount, 1);
  assert.equal(status.aiProvider.defaultProfileId, 'default');
  assert.equal(JSON.stringify(status).includes('secret-value'), false);
  assert.equal(JSON.stringify(status).includes('https://example.test'), false);
});

test('runtime status recognizes a profile-only model registry', () => {
  const status = inspectRuntimeStatus({
    NODE_ENV: 'production',
    ALT_AI_KEY: 'profile-secret',
    ZIWEI_AI_PROFILES_JSON: JSON.stringify([{
      id: 'alternate',
      model: 'runtime-model',
      baseUrl: 'https://gateway.example/v1',
      apiKeyEnv: 'ALT_AI_KEY',
    }]),
  });
  assert.equal(status.status, 'ok');
  assert.equal(status.aiProvider.state, 'configured');
  assert.equal(status.aiProvider.profileCount, 1);
  assert.equal(status.aiProvider.defaultProfileId, 'alternate');
  assert.equal(JSON.stringify(status).includes('profile-secret'), false);
  assert.equal(JSON.stringify(status).includes('gateway.example'), false);
});

test('runtime status is degraded for partially configured provider', () => {
  const status = inspectRuntimeStatus({
    NODE_ENV: 'production',
    ZIWEI_AI_BASE_URL: 'https://example.test/v1',
    ZIWEI_AI_MODEL: 'test-model',
  });
  assert.equal(status.status, 'degraded');
  assert.equal(status.aiProvider.state, 'invalid');
});

test('runtime status is degraded for invalid timeout', () => {
  const status = inspectRuntimeStatus({
    NODE_ENV: 'production',
    ZIWEI_AI_BASE_URL: 'https://example.test/v1',
    ZIWEI_AI_API_KEY: 'secret-value',
    ZIWEI_AI_MODEL: 'test-model',
    ZIWEI_AI_TIMEOUT_MS: '999999',
  });
  assert.equal(status.status, 'degraded');
  assert.equal(status.aiProvider.state, 'invalid');
  assert.equal(status.aiProvider.timeoutMs, 60_000);
});
