---
title: How It Works
description: The architecture and philosophy of capa.
---

## The loop

```
 caller Worker        JSRPC        capa capability        HTTP        upstream API
┌─────────────┐    ───────▶    ┌────────────────┐    ───────▶    ┌────────────┐
│  env.STRIPE │               │ WorkerEntrypoint │               │  Stripe /  │
│   .charges  │◀──────────────│  fetchProof()    │◀──────────────│  GitLab /  │
│   .create() │   {result,    │  act + assert    │               │  Jira      │
└─────────────┘    evidence}  └────────────────┘               └────────────┘
```

`fetchProof` performs the upstream HTTP call (`act`), then runs generic + per-method assertions (`assert`). The verdict is the AND of every assertion. `result` is returned only when `verdict === "pass"`.

`RuntimeConfig` (base URL override, extra headers, prefix replacement) flows from the hand-written `index.ts` through the generated entrypoint to every method call.

## Why JSRPC, not HTTP

Public Workers with bindings are an incident pattern. Capabilities have no public route by design. Bind them; do not expose them.

Each capability returns 404 on any HTTP request. The only way to reach it is through a declared service binding.

## Why one Worker per capability

Independent versioning, independent secrets, independent blast radius. A single capability per Worker keeps the `WorkerEntrypoint` class binding clean — the binding name maps 1:1 to a capability surface.

## Why no registry

A capability is a Git repo. Forks are install. A central index would add a new control point that adds no value the user couldn't get from a GitHub topic search.

## Evidence bundle

```ts
{
  capability:   "stripe";
  operationId:  "PostCharges";
  namespace:    "charges";
  method:       "create";
  http:         "post";
  path:         "/v1/charges";
  risk:         "high";
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

Every call produces this. Persist it, hash it, ignore it — it exists.

## How capabilities are built

Capabilities are not hand-coded. Each one is generated from the upstream API's OpenAPI spec.

```
spec.openapi.json
       │
       ▼
   capa-codegen ──▶ schema.gen.ts       (types from openapi-typescript)
                ──▶ capability.gen.ts   (RpcTarget classes per namespace)
                ──▶ manifest.gen.ts     (operationId → metadata)
                ──▶ runtime.ts          (evidence-aware fetch)
       │
       ▼
   src/index.ts (~30 LOC, applies per-method overrides)
       │
       ▼
   deployed Worker
```

The hand-written layer is thin. The per-method overrides for richer evidence are the only thing that grows with API surface — and only for the methods you care to assert against.

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
