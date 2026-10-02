---
title: How it works
description: How capa generates Worker bindings from OpenAPI specs, calls the upstream API, and returns an evidence record.
---

## The call path

```text
Your Worker ──service binding──▶ capa capability ──HTTPS──▶ Provider API
            ◀──{ result, evidence }──            ◀──response──
```

1. Your Worker calls a typed method, for example `env.STRIPE.paymentIntents.create(body)`.
2. The capability Worker adds the API key and sends one HTTP request to the provider.
3. It checks the response and builds the evidence record.
4. It returns `{ result, evidence }`. `result` is `null` when a check fails.

## Why a service binding

A capability returns 404 to direct HTTP requests. Only Workers with a declared service binding can call it. The provider key stays in the capability Worker, and your Worker never handles it.

## One Worker per API

Each API gets its own Worker, secret, and binding. You deploy and update each one on its own.

## The evidence record

```ts
{
  capability: "stripe",
  operationId: "PostPaymentIntents",
  namespace: "paymentIntents",
  method: "create",
  http: "post",
  path: "/v1/payment_intents",
  risk: "high",
  startedAt: "2026-09-30T12:00:00.000Z",
  durationMs: 234,
  act: {
    request: { method: "POST", url: "https://api.stripe.com/v1/payment_intents" },
    status: 200,
  },
  assert: [
    { kind: "httpStatus", expected: "2xx", actual: 200, passed: true },
  ],
  verdict: "pass",
}
```

- `act` records the real request URL and the real response status.
- `assert` lists each check and its result.
- `verdict` is `"pass"` only when every check passed.
- Credentials never appear in the record.

## Responses

- JSON responses are parsed.
- Text responses are returned as a string.
- Binary responses, such as images and PDFs, are returned as a `Uint8Array`.

## How a capability is generated

```text
OpenAPI spec
  └─▶ capa codegen
        ├─ schema.gen.ts       types from the spec
        ├─ capability.gen.ts   one typed method per operation
        ├─ manifest.gen.ts     operation metadata
        └─ runtime.ts          request, checks, and evidence
  └─▶ src/index.ts             about 30 lines you own
  └─▶ deployed Worker
```

Method arguments and return types come from the spec. Operations with query parameters accept a typed `options.query`.

## Keeping bindings current

A GitHub Actions job runs every Monday. It fetches each provider's spec and compares it to the last known version. When a spec changes, the job regenerates the bindings, runs typecheck and bundle checks, and opens a pull request with a report of added, removed, and changed operations.

## Add your own checks

The default check is the HTTP status. Add checks for a method in `src/overrides.ts`. The key is the namespace as it appears in the API path, for example `payment_intents`:

```ts
export const overrides = {
  payment_intents: {
    create: {
      asserts: [
        (body) => ({
          kind: "id:prefix",
          expected: "pi_",
          actual: body.id,
          passed: body.id?.startsWith("pi_"),
        }),
      ],
    },
  },
};
```

## Self-managed instances

Some capabilities can point at a self-managed server. Set `runtimeConfig` in `src/index.ts`.

GitLab behind Cloudflare Access:

```ts
this.runtimeConfig = {
  baseUrl: env.GITLAB_BASE_URL_OVERRIDE,
  extraHeaders: {
    "CF-Access-Client-Id": env.CF_ACCESS_CLIENT_ID,
    "CF-Access-Client-Secret": env.CF_ACCESS_CLIENT_SECRET,
  },
};
```

Jira Server or Data Center:

```ts
this.runtimeConfig = {
  baseUrl: env.JIRA_BASE_URL_OVERRIDE,
  prefixOverride: "/rest/api/2",
};
```
