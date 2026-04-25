# capa

> Third-party APIs as proof-carrying Cloudflare service bindings.

```ts
const { result, evidence } = await env.STRIPE_PROOF.charge({
  amount: 1000, currency: "usd", source: "tok_visa",
});
```

Every call returns the result **and** an evidence bundle: `observe + act + assert + verdict`. Persist it, audit it, hash it, ignore it. It exists.

## Why

> "The cloudflare 'bindings instead of env vars' thing is so good that I sometimes wonder why they don't have wrappers for popular third party APIs. `env.STRIPE` — that sort of thing."
> — [@jonas](https://x.com/jonas)

Two answers exist:

1. **The naive answer.** Write a wrapper Worker, bind it. Two-day project.
2. **The interesting answer.** A wrapper that doesn't return `{ result }` but `{ result, evidence }` is a different primitive. The evidence is the contract — the proof that the third-party call landed the way the caller asked.

`capa` is the second answer.

## How it works

```
┌──────────────┐         ┌────────────────────┐         ┌────────────┐
│ caller       │  RPC    │ capa-{capability}  │  HTTP   │  upstream  │
│ Worker       ├────────▶│  WorkerEntrypoint  ├────────▶│  third API │
└──────────────┘         │  observe ─ act ─ assert ─┐   └────────────┘
       ▲                 └────────────────────┘   │
       │                                          │
       └────── { result, evidence } ◀─────────────┘
```

Each capability is its own deployable Worker that:

1. Runs `observe` — fast, idempotent reads of the world before the call.
2. Runs `act` — the single side-effecting upstream call.
3. Runs `assert` — itemized postconditions on the response.
4. Returns `{ result, evidence }` over JSRPC.

The schema lives in `proof-spec.v0.md`.

## Available capabilities

| Capability | Methods | Risk |
|---|---|---|
| [stripe](capabilities/stripe) | `charge`, `refund`, `spec` | high (money moves) |

## Install one

Click the Deploy button in the capability's README. Cloudflare clones the repo into your GitHub, provisions the Worker on your account, runs Workers Builds. Then set the upstream API key:

```bash
wrangler secret put STRIPE_SECRET_KEY
```

Bind from your caller Worker:

```jsonc
{
	"services": [
		{ "binding": "STRIPE_PROOF", "service": "capa-stripe", "entrypoint": "StripeCapability" }
	]
}
```

`env.STRIPE_PROOF.charge(...)` — done.

## What changes in production

| | dev | prod |
|---|---|---|
| Public HTTP route | `fetch()` returns 404 | same — JSRPC-only |
| Auth to upstream | secret in `.dev.vars` | `wrangler secret put` |
| Caller-pays | n/a | the deployed Worker bills the deploying account |
| Audit | `console.log(evidence)` | persist `evidence` to R2 / Artifacts / your sink |

## Properties this needs

- **One side effect per call.** `act` is exactly one upstream HTTP request. No batching, no fan-out. If you need both, ship two methods.
- **Evidence is a value.** The bundle is plain JSON. No file handles, no streams, no hidden state. It can be JSON-stringified into a `git note`, an R2 object, or a response body.
- **Failure returns `result: null`.** A failed `assert` is a real failure. Callers must handle it.
- **JSRPC-only.** Capabilities have no public HTTP surface. They are bound, not browsed.

## Design choices

- **One Worker per capability.** Not one Worker with many capabilities. Independent versioning, independent secrets, independent blast radius.
- **`WorkerEntrypoint` named class.** Deliberately uses [Cloudflare's stable JSRPC pattern](https://developers.cloudflare.com/workers/runtime-apis/bindings/service-bindings/rpc/). No new protocol invented.
- **Spec lives next to code.** `proof-spec.v0.json` and `src/index.ts` ship together. The spec is the JSON projection of the code, and tooling (cloudeval scorers, vitest-evals harnesses) reads the spec, not the code.
- **No registry.** A capability is a Git repo. Forks are install. There is no central index because there does not need to be one.

## Related

- [proof-spec.v0.md](proof-spec.v0.md) — the contract
- [unsurf](https://github.com/acoyfellow/unsurf) — the DOM-altitude version of this loop
- [gateproof](https://github.com/acoyfellow/gateproof) — the HTTP-altitude version of this loop
- Cramer's [vitest-evals RFC #39](https://github.com/vitest-dev/vitest/discussions/) — externally convergent shape

## Status

`v0`. Liquid. The shape will change when two external adopters have real pain. Ship the thinnest correct thing, see what hurts.
