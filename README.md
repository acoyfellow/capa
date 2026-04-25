# capa

Third-party APIs as proof-carrying Cloudflare service bindings.

```ts
const { result, evidence } = await env.STRIPE_PROOF.charge({
  amount: 1000, currency: "usd", source: "tok_visa",
});
```

Each call returns the result and an evidence bundle: `observe + act + assert + verdict`.

---

## Tutorial

A worked example — caller Worker that uses `capa-stripe` end-to-end.

1. Click the Deploy button in [capabilities/stripe/README.md](capabilities/stripe/README.md). Cloudflare clones the repo into your GitHub and deploys `capa-stripe` to your account.

2. Set the upstream key on the deployed Worker:

    ```bash
    cd capa/capabilities/stripe
    wrangler secret put STRIPE_SECRET_KEY
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

4. Call it:

    ```ts
    // your-app/src/index.ts
    export default {
      async fetch(request, env) {
        const { result, evidence } = await env.STRIPE_PROOF.charge({
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

Specific tasks against an installed capability.

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

### Persist an evidence bundle

```ts
const { result, evidence } = await env.STRIPE_PROOF.charge(input);
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

### Available capabilities

| Capability | Methods | Side effects |
|---|---|---|
| [stripe](capabilities/stripe) | `charge`, `refund`, `spec` | money-moves |

### Evidence bundle shape

```ts
{
  capability:  string;
  version:     string;
  method:      string;
  startedAt:   string;        // ISO 8601
  durationMs:  number;
  observe:     Array<{ kind: string; passed: boolean; detail?: unknown }>;
  act:         { request: { method: string; url: string }; status: number };
  assert:      Array<{ kind: string; expected: unknown; actual: unknown; passed: boolean }>;
  verdict:     "pass" | "fail";
}
```

### Method return shape

```ts
{ result: T | null; evidence: Evidence }
```

`result` is `null` when `verdict === "fail"`.

### Capability invariants

| Property | Value |
|---|---|
| Public HTTP route | `fetch()` returns 404 |
| Side effects per method | Exactly one upstream HTTP request |
| Evidence type | Plain JSON, no streams or handles |
| Auth | `wrangler secret put` |
| Billing | Caller-pays (the deploying account is billed) |

### Repo layout

| Path | Purpose |
|---|---|
| `proof-spec.v0.md` | Schema contract |
| `capabilities/<name>/wrangler.jsonc` | Worker config |
| `capabilities/<name>/proof-spec.v0.json` | Capability's contract |
| `capabilities/<name>/src/index.ts` | `WorkerEntrypoint` implementation |

---

## Explanation

### Why this exists

> "The cloudflare 'bindings instead of env vars' thing is so good that I sometimes wonder why they don't have wrappers for popular third party APIs. `env.STRIPE` — that sort of thing." — [@jonas](https://x.com/jonas)

A wrapper Worker that returns `{ result }` is a two-day project. A wrapper that returns `{ result, evidence }` is a different primitive: the call carries its own proof of correctness. Caller decides whether to trust, persist, or audit.

### How the loop works

```
┌──────────────┐         ┌────────────────────┐         ┌────────────┐
│ caller       │  RPC    │ capa-{capability}  │  HTTP   │  upstream  │
│ Worker       ├────────▶│  WorkerEntrypoint  ├────────▶│  third API │
└──────────────┘         │  observe ─ act ─ assert ─┐   └────────────┘
       ▲                 └────────────────────┘   │
       │                                          │
       └────── { result, evidence } ◀─────────────┘
```

`observe` reads the world before the call. `act` performs the single side effect. `assert` checks itemized postconditions on the response. The verdict is the AND of every assertion.

### Why one Worker per capability

Independent versioning, independent secrets, independent blast radius. A single capability per Worker is also what makes `WorkerEntrypoint` named-class binding clean — the binding name maps 1:1 to a capability surface.

### Why no registry

A capability is a Git repo. Forks are install. A central index would add a new control point that adds no value the user couldn't get from a GitHub topic search.

### Why JSRPC, not HTTP

Public Workers with bindings are an incident pattern. Capabilities have no public route by design. Bind them; do not expose them.

### Related

| Project | Relationship |
|---|---|
| [unsurf](https://github.com/acoyfellow/unsurf) | Same loop at the DOM altitude |
| [gateproof](https://github.com/acoyfellow/gateproof) | Same loop at the HTTP altitude |
| Cramer's [vitest-evals RFC #39](https://github.com/getsentry/sentry/discussions) | Externally convergent shape |

---

## Status

`v0`. Liquid. The schema will change when two external adopters have real pain. Until then, ship the thinnest correct thing.
