---
title: How It Works
description: The architecture and philosophy of capa.
---

## The loop

<div class="capa-flow" aria-label="capa call flow">
  <div class="flow-node">
    <strong>Caller Worker</strong>
    <code>env.&lt;NAME&gt;</code>
    <code>.ns.method()</code>
  </div>
  <div class="flow-edge">
    <span>JSRPC</span>
    <b>→</b>
    <small>result + receipt</small>
  </div>
  <div class="flow-node flow-node-wide">
    <strong>capa capability</strong>
    <code>WorkerEntrypoint</code>
    <code>fetchProof()</code>
    <code>act + assert</code>
  </div>
  <div class="flow-edge">
    <span>HTTP</span>
    <b>→</b>
    <small>upstream response</small>
  </div>
  <div class="flow-node">
    <strong>Upstream API</strong>
    <code>Stripe</code>
    <code>GitLab</code>
    <code>Jira</code>
  </div>
</div>

`fetchProof` makes the upstream HTTP call, runs the built-in checks plus any method-specific checks, and returns the API result when those checks pass. The JSON receipt keeps the detail if you want to log or inspect it.

`RuntimeConfig` (base URL override, extra headers, prefix replacement) flows from the hand-written `index.ts` through the generated entrypoint to every method call.

## Why JSRPC, not HTTP

A capa capability is meant to sit behind your Worker, not act as another public proxy. That keeps credentials and API calls on the service-binding path.

Each capability returns 404 on direct HTTP requests. Reach it through a declared service binding instead.

## Why one Worker per capability

One Worker per API keeps setup understandable: one upstream service, one secret set, one service binding. It also lets you deploy and update capabilities independently.

## Why no registry

For now, the repo is the catalog. The site reads the manifests already checked in here, and you can fork or deploy the capabilities you actually want.

## Returned receipt

```ts
{
  capability:   "stripe";      // or "gitlab", "jira", ...
  operationId:  "PostCharges"; // upstream operation identifier
  namespace:    "charges";     // RPC namespace
  method:       "create";      // RPC method name
  http:         "post";        // underlying HTTP verb
  path:         "/v1/charges"; // upstream path
  risk:         "high";        // low | medium | high
  startedAt:    "2026-04-25T12:00:00Z";
  durationMs:   234;
  act: {
    request: { method: "POST"; url: "https://api.stripe.com/v1/charges" };
    status: 200;
  };
  assert: [
    { kind: "httpStatus", expected: "2xx", actual: 200, passed: true },
    { kind: "field:id:matches", expected: "^ch_", actual: "ch_123", passed: true },
    { kind: "field:status:==", expected: "succeeded", actual: "succeeded", passed: true },
    { kind: "field:paid:==", expected: true, actual: true, passed: true },
  ];
  verdict: "pass";
}
```

Every call produces this record. Save it for debugging or reporting when it helps; otherwise treat it as useful extra context.

## How capabilities are built

Capabilities are generated from upstream OpenAPI specs rather than written endpoint by endpoint.

```text
 spec.openapi.json
        │
        ▼
    capa-codegen ──▶ schema.gen.ts       (types from openapi-typescript)
                 ──▶ capability.gen.ts   (RpcTarget classes per namespace)
                 ──▶ manifest.gen.ts     (operationId → metadata)
                 ──▶ runtime.ts          (HTTP call + checks)
        │
        ▼
    src/index.ts (~30 LOC, applies per-method overrides)
        │
        ▼
    deployed Worker
```

The hand-written layer stays thin. Add per-method overrides only where you want stronger checks than “the upstream accepted the call.”

## Override examples

### Stripe

```ts
charges: {
  create: {
    asserts: [
      (body) => ({ kind: "id~^ch_", expected: "^ch_", actual: body.id, passed: /^ch_/.test(body.id) }),
      (body) => ({ kind: "status==succeeded", expected: "succeeded", actual: body.status, passed: body.status === "succeeded" }),
    ],
  },
}
```

### GitLab

```ts
mergeRequests: {
  createNote: {
    asserts: [
      (body) => ({ kind: "id:exists", expected: "non-null", actual: body.id, passed: body.id != null }),
      (body) => ({ kind: "id:number", expected: "number", actual: typeof body.id, passed: typeof body.id === "number" }),
    ],
  },
}
```

### Jira

```ts
issues: {
  createIssue: {
    asserts: [
      (body) => ({ kind: "id:exists", expected: "non-null", actual: body.id, passed: body.id != null }),
      (body) => ({ kind: "key:exists", expected: "non-null", actual: body.key, passed: body.key != null }),
    ],
  },
}
```

## Self-managed routing

### GitLab behind Cloudflare Access

```ts
// src/index.ts
this.runtimeConfig = {
  baseUrl: env.GITLAB_BASE_URL_OVERRIDE,
  extraHeaders: {
    "CF-Access-Client-Id": env.CF_ACCESS_CLIENT_ID,
    "CF-Access-Client-Secret": env.CF_ACCESS_CLIENT_SECRET,
  },
};
```

### Jira Server / Data Center

```ts
// src/index.ts
this.runtimeConfig = {
  baseUrl: env.JIRA_BASE_URL_OVERRIDE,
  prefixOverride: "/rest/api/2", // replaces /rest/api/3
};
```
