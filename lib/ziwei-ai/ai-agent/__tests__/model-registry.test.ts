import assert from 'node:assert/strict';
import test from 'node:test';
import {
  modelRegistryFromEnv,
  UnknownModelProfileError,
} from '../model-registry';

function testEnv(values: Record<string, string>): NodeJS.ProcessEnv {
  return { NODE_ENV: 'test', ...values };
}

test('P11 keeps legacy single-provider environment as the default runtime profile', () => {
  const registry = modelRegistryFromEnv(testEnv({
    ZIWEI_AI_BASE_URL: 'https://opencode.ai/zen/go/v1',
    ZIWEI_AI_API_KEY: 'server-secret',
    ZIWEI_AI_MODEL: 'gpt-5.6-luna',
    ZIWEI_AI_API_STYLE: 'auto',
  }));
  assert.ok(registry);
  assert.equal(registry.defaultProfileId, 'default');
  assert.deepEqual(registry.listPublicProfiles(), [{
    id: 'default',
    label: 'gpt-5.6-luna',
    model: 'gpt-5.6-luna',
    apiStyle: 'responses',
    isDefault: true,
  }]);
  assert.match(registry.select().provider.id, /responses:gpt-5\.6-luna/);
});

test('P11 registers multiple OpenCode Go models with per-model automatic protocol routing', () => {
  const registry = modelRegistryFromEnv(testEnv({
    ZIWEI_AI_BASE_URL: 'https://opencode.ai/zen/go/v1',
    ZIWEI_AI_API_KEY: 'server-secret',
    ZIWEI_AI_MODEL: 'gpt-5.6-luna',
    ZIWEI_AI_API_STYLE: 'auto',
    ZIWEI_AI_DEFAULT_PROFILE: 'qwen',
    ZIWEI_AI_PROFILES_JSON: JSON.stringify([
      { id: 'qwen', label: 'Qwen 3.7 Plus', model: 'qwen3.7-plus' },
      { id: 'kimi', label: 'Kimi K3', model: 'kimi-k3' },
    ]),
  }));
  assert.ok(registry);
  assert.equal(registry.defaultProfileId, 'qwen');

  const profiles = registry.listPublicProfiles();
  assert.equal(profiles.length, 3);
  assert.equal(profiles.find((profile) => profile.id === 'default')?.apiStyle, 'responses');
  assert.equal(profiles.find((profile) => profile.id === 'qwen')?.apiStyle, 'messages');
  assert.equal(profiles.find((profile) => profile.id === 'kimi')?.apiStyle, 'chat-completions');
  assert.equal(profiles.find((profile) => profile.id === 'qwen')?.isDefault, true);

  const publicJson = JSON.stringify(profiles);
  assert.equal(publicJson.includes('server-secret'), false);
  assert.equal(publicJson.includes('opencode.ai'), false);
  assert.match(registry.select('qwen').provider.id, /messages:qwen3\.7-plus/);
});

test('P11 supports a profile-only provider through an environment-variable secret reference', () => {
  const registry = modelRegistryFromEnv(testEnv({
    OPENAI_RUNTIME_KEY: 'another-secret',
    ZIWEI_AI_PROFILES_JSON: JSON.stringify([
      {
        id: 'openai',
        label: 'OpenAI Runtime',
        model: 'gpt-runtime',
        baseUrl: 'https://gateway.example/v1',
        apiKeyEnv: 'OPENAI_RUNTIME_KEY',
        apiStyle: 'responses',
        timeoutMs: 45_000,
      },
    ]),
  }));
  assert.ok(registry);
  assert.equal(registry.defaultProfileId, 'openai');
  assert.equal(registry.defaultTimeoutMs, 45_000);
  assert.match(registry.select().provider.id, /responses:gpt-runtime/);
  const publicJson = JSON.stringify(registry.listPublicProfiles());
  assert.equal(publicJson.includes('another-secret'), false);
  assert.equal(publicJson.includes('gateway.example'), false);
  assert.equal(publicJson.includes('OPENAI_RUNTIME_KEY'), false);
});

test('P11 rejects raw secrets, duplicate IDs, missing referenced secrets and unknown defaults', () => {
  const legacy = {
    ZIWEI_AI_BASE_URL: 'https://gateway.example/v1',
    ZIWEI_AI_API_KEY: 'secret',
    ZIWEI_AI_MODEL: 'base-model',
  };

  assert.throws(() => modelRegistryFromEnv(testEnv({
    ...legacy,
    ZIWEI_AI_PROFILES_JSON: JSON.stringify([{ id: 'unsafe', model: 'x', apiKey: 'raw-secret' }]),
  })), /must not contain raw apiKey/);

  assert.throws(() => modelRegistryFromEnv(testEnv({
    ...legacy,
    ZIWEI_AI_PROFILES_JSON: JSON.stringify([{ id: 'default', model: 'duplicate' }]),
  })), /duplicate model profile id/);

  assert.throws(() => modelRegistryFromEnv(testEnv({
    ZIWEI_AI_PROFILES_JSON: JSON.stringify([{
      id: 'missing-key',
      model: 'x',
      baseUrl: 'https://gateway.example/v1',
      apiKeyEnv: 'MISSING_RUNTIME_KEY',
    }]),
  })), /missing server secret/);

  assert.throws(() => modelRegistryFromEnv(testEnv({
    ...legacy,
    ZIWEI_AI_DEFAULT_PROFILE: 'does-not-exist',
  })), /unknown profile/);
});

test('P11 distinguishes an unknown requested model profile from registry misconfiguration', () => {
  const registry = modelRegistryFromEnv(testEnv({
    ZIWEI_AI_BASE_URL: 'https://gateway.example/v1',
    ZIWEI_AI_API_KEY: 'secret',
    ZIWEI_AI_MODEL: 'base-model',
  }));
  assert.ok(registry);
  assert.throws(() => registry.select('missing'), UnknownModelProfileError);
});
