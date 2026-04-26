# capa

Third-party APIs as Cloudflare service bindings that return their own receipts.

Every binding works the same way: call a method, get `{ result, evidence }`.

```ts
const { result, evidence } = await env.STRIPE.charges.create({
  amount: 1000, currency: "usd", source: "tok_visa",
});

const { result, evidence } = await env.GITLAB.projects.list();

const { result, evidence } = await env.JIRA.issues.createIssue({
  project: "PROJ", summary: "Bug", issuetype: { name: "Bug" },
});
```

Each call returns the result and an evidence bundle. Capabilities are generated from OpenAPI specs — not hand-written wrappers.

---

## Tutorial

Build a caller Worker that uses any `capa-*` capability.

1. **Deploy a capability.** Pick one from the [capabilities directory](capabilities/). Click its Deploy button; Cloudflare clones the repo and deploys the Worker.

2. **Set the upstream key.**

   ```bash
   cd capa/capabilities/<name>
   wrangler secret put <SECRET_NAME>
   ```

   The required secret name is in the capability's README.

3. **Declare the binding** in your caller Worker's `wrangler.jsonc`:

   ```jsonc
   {
     "services": [
       { "binding": "STRIPE", "service": "capa-stripe", "entrypoint": "StripeCapability" }
     ]
   }
   ```

4. **Call any endpoint:**

   ```ts
   export default {
     async fetch(request, env) {
       const { result, evidence } = await env.STRIPE.charges.create({
         amount: 1000, currency: "usd", source: "tok_visa",
       });

       if (evidence.verdict === "fail") {
         return Response.json({ error: "verification failed", evidence }, { status: 502 });
       }

       return Response.json({ chargeId: result.id, evidence });
     },
   };
   ```

5. **Deploy your caller.** `evidence.verdict` is `"pass"` when every assertion passed.

---

## How-to

### Install a capability

Click the Deploy to Cloudflare button in the capability's `README.md`. Cloudflare clones the repo, provisions the Worker, runs Workers Builds.

### Set the upstream API key

```bash
cd capabilities/<capability>
wrangler secret put <SECRET_NAME>
```

The required secret name is documented in each capability's README.

### Bind a capability into a caller Worker

```jsonc
{
  "services": [
    {
      "binding": "<BINDING_NAME>",
      "service": "<capa-capability>",
      "entrypoint": "<EntrypointClassName>"
    }
  ]
}
```

### Generate a new capability from an OpenAPI spec

```bash
cd tools/codegen
bun src/cli.ts \
  --spec <url-or-path-to-openapi-spec> \
  --out  ../../capabilities/<name> \
  --name <name> \
  --base-url <upstream-base-url> \
  --prefix <api-prefix> \
  --auth <bearer|private-token|basic> \
  --content-type <form|json>
```

### Persist an evidence bundle

```ts
const { result, evidence } = await env.STRIPE.charges.create(input);
await env.AUDIT_BUCKET.put(`${evidence.startedAt}.json`, JSON.stringify(evidence));
```

### Handle a failed verdict

```ts
if (evidence.verdict === "fail") {
  const failed = evidence.assert.filter(a => !a.passed);
  // failed[] contains { kind, expected, actual, passed: false }
}
```

---

## Reference

### Repo layout

| Path | Purpose |
|---|---|
| `tools/codegen/` | OpenAPI → capability generator |
| `capabilities/<name>/src/generated/` | Generated code (do not edit) |
| `capabilities/<name>/src/index.ts` | Worker entry |
| `capabilities/<name>/src/overrides.ts` | Per-method evidence overrides |
| `capabilities/<name>/wrangler.jsonc` | Deployment config |

### Available capabilities

| Capability | Operations | Namespaces | Bundle (gz) | Auth | Content-Type |
|---|---|---|---|---|---|
| [stripe](capabilities/stripe) | 534 | 73 | 38 KiB | Bearer | Form |
| [gitlab](capabilities/gitlab) | 1,050 | 51 | 54 KiB | Private-Token | JSON |
| [jira](capabilities/jira) | 603 | 76 | 48 KiB | Basic | JSON |

### Evidence bundle shape

```ts
{
  capability:   string;
  operationId:  string;        // e.g. "PostCharges"
  namespace:    string;        // e.g. "charges"
  method:       string;        // e.g. "create"
  http:         string;        // "get" | "post" | "put" | "patch" | "delete"
  path:         string;        // "/v1/charges"
  risk:         "low" | "medium" | "high";
  startedAt:    string;        // ISO 8601
  durationMs:   number;
  act:          { request: { method: string; url: string }; status: number };
  assert:       Array<{ kind: string; expected: unknown; actual: unknown; passed: boolean }>;
  verdict:      "pass" | "fail";
}
```

### Method return shape

```ts
{ result: T | null; evidence: EvidenceBundle }
```

`result` is `null` when `verdict === "fail"`.

### Capability invariants

| Property | Value |
|---|---|
| Public HTTP route | `fetch()` returns 404 |
| Side effects per method | One upstream HTTP request |
| Evidence type | Plain JSON, no streams or handles |
| Auth | `wrangler secret put` |
| Billing | Caller-pays |

---

## Explanation

### Why this exists

A wrapper Worker that returns `{ result }` is a two-day project. A wrapper that returns `{ result, evidence }` is a different shape — the call carries its own record of what was checked and what happened. Caller decides whether to trust, persist, or audit.

### How capabilities are built

Capabilities are not hand-coded. Each one is generated from the upstream API's OpenAPI spec.

```
 spec.openapi.json
        │
        ▼
    capa-codegen ──▶ src/generated/schema.gen.ts        (types from openapi-typescript)
                 ──▶ src/generated/capability.gen.ts    (RpcTarget classes per namespace)
                 ──▶ src/generated/manifest.gen.ts      (operationId → metadata)
                 ──▶ src/generated/runtime.ts           (evidence-aware fetch)
        │
        ▼
    src/index.ts (hand-written: ~30 LOC, applies per-method overrides)
        │
        ▼
    deployed Worker
```

The hand-written layer is thin. The per-method overrides for richer evidence are the only thing that grows with API surface — and only for the methods you care to assert against.

### How the loop works

```
  caller Worker        JSRPC         capa capability         HTTP        upstream API
 ┌─────────────┐    ───────▶     ┌─────────────────┐    ───────▶    ┌────────────┐
 │  env.<NAME> │                │ WorkerEntrypoint  │               │  any OpenAPI │
 │ .ns.method()│◀───────────────│   fetchProof()    │◀──────────────│   service    │
 │             │   {result,      │   act + assert    │              │              │
 └─────────────┘    evidence}    └─────────────────┘              └────────────┘
```

`fetchProof` performs the upstream HTTP call (`act`), then runs generic + per-method assertions (`assert`). The verdict is the AND of every assertion. `result` is returned only when `verdict === "pass"`.

`RuntimeConfig` (base URL override, extra headers, prefix replacement) flows from the hand-written `index.ts` through the generated entrypoint to every method call.

### Why one Worker per capability

Independent versioning, independent secrets, independent blast radius. A single capability per Worker keeps the `WorkerEntrypoint` class binding clean — the binding name maps 1:1 to a capability surface.

### Why no registry

A capability is a Git repo. Forks are install. A central index would add a new control point that adds no value the user couldn't get from a GitHub topic search.

### Why JSRPC, not HTTP

Public Workers with bindings are an incident pattern. Capabilities have no public route by design. Bind them; do not expose them.

---

## Status

`v0`. Liquid. Ship the thinnest correct thing.
