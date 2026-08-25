import assert from 'node:assert/strict';
import test from 'node:test';
import type { ModelRequest } from '../index';
import {
  normalizeModelId,
  providerFromEnv,
  resolveModelApiStyle,
  SwitchableModelProvider,
} from '../runtime-provider';

const request: ModelRequest = {
  messages: [
    { role: 'system', content: 'Return strict JSON.' },
    { role: 'user', content: 'hello' },
  ],
  responseFormat: 'json',
  temperature: 0.2,
};

test('OpenCode Go model IDs infer the documented API family', () => {
  const base = 'https://opencode.ai/zen/go/v1';
  assert.equal(resolveModelApiStyle(base, 'gpt-5.6-luna'), 'responses');
  assert.equal(resolveModelApiStyle(base, 'opencode-go/gpt-5.6-luna'), 'responses');
  assert.equal(resolveModelApiStyle(base, 'kimi-k3'), 'chat-completions');
  assert.equal(resolveModelApiStyle(base, 'qwen3.7-plus'), 'messages');
  assert.equal(normalizeModelId('opencode-go/gpt-5.6-luna'), 'gpt-5.6-luna');
});

test('responses adapter sends GPT 5.6 Luna to /responses and extracts output text', async () => {
  let calledUrl = '';
  let body: Record<string, unknown> = {};
  const fetchImpl = (async (input: string | URL | Request, init?: RequestInit) => {
    calledUrl = String(input);
    body = JSON.parse(String(init?.body)) as Record<string, unknown>;
    return Response.json({
      model: 'gpt-5.6-luna',
      output: [{ content: [{ type: 'output_text', text: '{"ok":true}' }] }],
    });
  }) as typeof fetch;

  const provider = new SwitchableModelProvider({
    baseUrl: 'https://opencode.ai/zen/go/v1',
    apiKey: 'secret',
    model: 'opencode-go/gpt-5.6-luna',
    fetchImpl,
    maxAttempts: 1,
  });
  const result = await provider.generate(request);

  assert.equal(calledUrl, 'https://opencode.ai/zen/go/v1/responses');
  assert.equal(body.model, 'gpt-5.6-luna');
  assert.ok(Array.isArray(body.input));
  assert.equal(result.content, '{"ok":true}');
  assert.match(provider.id, /responses:gpt-5\.6-luna/);
});

test('chat-completions adapter remains available for Kimi, GLM, DeepSeek and local gateways', async () => {
  let calledUrl = '';
  const fetchImpl = (async (input: string | URL | Request) => {
    calledUrl = String(input);
    return Response.json({
      model: 'kimi-k3',
      choices: [{ message: { content: '{"ok":true}' } }],
    });
  }) as typeof fetch;

  const provider = new SwitchableModelProvider({
    baseUrl: 'https://opencode.ai/zen/go/v1',
    apiKey: 'secret',
    model: 'kimi-k3',
    fetchImpl,
    maxAttempts: 1,
  });
  const result = await provider.generate(request);

  assert.equal(calledUrl, 'https://opencode.ai/zen/go/v1/chat/completions');
  assert.equal(result.content, '{"ok":true}');
});

test('messages adapter supports OpenCode Go models routed through Anthropic-style endpoint', async () => {
  let calledUrl = '';
  let headers: HeadersInit | undefined;
  const fetchImpl = (async (input: string | URL | Request, init?: RequestInit) => {
    calledUrl = String(input);
    headers = init?.headers;
    return Response.json({
      model: 'qwen3.7-plus',
      content: [{ type: 'text', text: '{"ok":true}' }],
    });
  }) as typeof fetch;

  const provider = new SwitchableModelProvider({
    baseUrl: 'https://opencode.ai/zen/go/v1',
    apiKey: 'secret',
    model: 'qwen3.7-plus',
    fetchImpl,
    maxAttempts: 1,
  });
  const result = await provider.generate(request);

  assert.equal(calledUrl, 'https://opencode.ai/zen/go/v1/messages');
  assert.equal((headers as Record<string, string>)['anthropic-version'], '2023-06-01');
  assert.equal(result.content, '{"ok":true}');
});

test('explicit API style overrides automatic routing for provider compatibility', () => {
  const provider = providerFromEnv({
    NODE_ENV: 'test',
    ZIWEI_AI_BASE_URL: 'https://gateway.example/v1',
    ZIWEI_AI_API_KEY: 'secret',
    ZIWEI_AI_MODEL: 'custom-model',
    ZIWEI_AI_API_STYLE: 'responses',
  });
  assert.ok(provider);
  assert.match(provider!.id, /responses:custom-model/);
});

test('retryable provider failures are retried with a bounded attempt count', async () => {
  let calls = 0;
  const fetchImpl = (async () => {
    calls += 1;
    if (calls === 1) return new Response('{"error":"temporary"}', { status: 500 });
    return Response.json({ choices: [{ message: { content: '{"ok":true}' } }] });
  }) as typeof fetch;

  const provider = new SwitchableModelProvider({
    baseUrl: 'https://gateway.example/v1',
    apiKey: 'secret',
    model: 'custom-model',
    fetchImpl,
    maxAttempts: 2,
  });
  const result = await provider.generate(request);

  assert.equal(calls, 2);
  assert.equal(result.content, '{"ok":true}');
});
