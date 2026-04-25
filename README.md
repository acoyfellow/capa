# capa

Third-party APIs as Cloudflare service bindings that return their own receipts.

```ts
const { result, evidence } = await env.STRIPE_PROOF.charges.create({
  amount: 1000, currency: "usd", source: "tok_visa",
});
```

Each call returns the result and an evidence bundle. Capabilities are generated from OpenAPI specs — not hand-written wrappers.

---

## Tutorial

A worked example — caller Worker that uses `capa-stripe` end-to-end.

1. Click the Deploy button in [capabilities/stripe/README.md](capabilities/stripe/README.md). Cloudflare clones the repo into your GitHub and deploys `capa-stripe` to your account. The deployed Worker exposes the entire Stripe API (534 operations) as a JSRPC binding.

2. Set the upstream key on the deployed Worker:

    ```bash
    cd capa/capabilities/stripe
    wrangler secret put STRIPE_API_KEY
    ```

3. In a separate caller Worker, declare the binding:

    ```jsonc
    // your-app/wrangler.jsonc
    {
      "services": [
        { "binding": "STRIPE_PROOF", "service": "capa-stripe", "entrypoint": "StripeCapability" }
      ]
    }
    ```

4. Call any Stripe endpoint:

    ```ts
    // your-app/src/index.ts
    export default {
      async fetch(request, env) {
        const { result, evidence } = await env.STRIPE_PROOF.charges.create({
          amount: 1000, currency: "usd", source: "tok_visa",
        });

        if (evidence.verdict === "fail") {
          return Response.json({ error: "verification failed", evidence }, { status: 502 });
        }

        return Response.json({ chargeId: result.id, evidence });
      },
    };
    ```

5. Deploy your caller. `evidence.verdict` is `"pass"` when every assertion passed.

---

## How-to

### Install a capability

Click the Deploy to Cloudflare button in the capability's `README.md`. Cloudflare clones the repo, provisions the Worker, runs Workers Builds.

### Set the upstream API key

```bash
cd capabilities/<capability>
wrangler secret put <SECRET_NAME>
```

The required secret name is documented in each capability's `README.md`.

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
  --name <name>
```

### Persist an evidence bundle

```ts
const { result, evidence } = await env.STRIPE_PROOF.charges.create(input);
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
| [stripe](capabilities/stripe) | 534 | 73 | 36 KiB | Bearer | Form |
| [gitlab](capabilities/gitlab) | 1,050 | 51 | 51 KiB | Private-Token | JSON |
| [jira](capabilities/jira) | 603 | 76 | 46 KiB | Basic | JSON |

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
┌──────────────┐         ┌────────────────────┐         ┌────────────┐
│ caller       │  RPC    │ capa-{capability}  │  HTTP   │  upstream  │
│ Worker       ├────────▶│  WorkerEntrypoint  ├────────▶│  third API │
└──────────────┘         │     act ─ assert ─┐│         └────────────┘
       ▲                 └────────────────────┘
       │                                          │
       └────── { result, evidence } ◀─────────────┘
```

`act` performs the upstream call. `assert` checks itemized postconditions on the response — generic HTTP-status by default, richer per-method overrides where defined. The verdict is the AND of every assertion.

### Why one Worker per capability

Independent versioning, independent secrets, independent blast radius. A single capability per Worker keeps the `WorkerEntrypoint` class binding clean — the binding name maps 1:1 to a capability surface.

### Why no registry

A capability is a Git repo. Forks are install. A central index would add a new control point that adds no value the user couldn't get from a GitHub topic search.

### Why JSRPC, not HTTP

Public Workers with bindings are an incident pattern. Capabilities have no public route by design. Bind them; do not expose them.

---

## Status

`v0`. Liquid. Ship the thinnest correct thing.
