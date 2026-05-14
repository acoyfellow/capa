# capa

Generated Cloudflare service bindings for third-party APIs.

Every method returns the upstream result plus a JSON evidence bundle:

```ts
const { result, evidence } = await env.STRIPE.charges.create({
	amount: 1000,
	currency: "usd",
	source: "tok_visa",
});

if (evidence.verdict === "fail") {
	return Response.json({ error: "verification failed", evidence }, { status: 502 });
}

return Response.json({ chargeId: result.id, evidence });
```

Bindings are generated from OpenAPI specs. The hand-written layer is `src/index.ts` plus optional evidence overrides in `src/overrides.ts`.

## Repo

| Path | Purpose |
|---|---|
| `SPEC.md` | Method, evidence, and capability contract |
| `tools/codegen/` | OpenAPI -> capability generator |
| `capabilities/<name>/capa.manifest.json` | Generated capability metadata |
| `capabilities/<name>/src/generated/` | Generated binding code |
| `capabilities/<name>/src/index.ts` | Worker entrypoint |
| `capabilities/<name>/src/overrides.ts` | Per-method evidence overrides |
| `tests/harness/` | Real capability smoke-test Worker |
| `docs/` | Expanded docs site |

## Generated bindings

| Capability | Operations | Namespaces | Auth | Body |
|---|---:|---:|---|---|
| [box](capabilities/box) | 294 | 56 | bearer | json |
| [discord](capabilities/discord) | 233 | 16 | bearer | json |
| [github](capabilities/github) | 1,182 | 36 | bearer | json |
| [gitlab](capabilities/gitlab) | 1,047 | 51 | private-token | json |
| [jira](capabilities/jira) | 601 | 76 | basic | json |
| [kubernetes](capabilities/kubernetes) | 1,111 | 6 | bearer | json |
| [sentry](capabilities/sentry) | 209 | 6 | bearer | json |
| [slack](capabilities/slack) | 174 | 174 | bearer | form |
| [stripe](capabilities/stripe) | 534 | 73 | bearer | form |
| [twilio-messaging](capabilities/twilio-messaging) | 58 | 5 | basic | form |
| [twilio-verify](capabilities/twilio-verify) | 57 | 5 | basic | form |
| [twilio](capabilities/twilio) | 197 | 2 | basic | form |
| [zoom](capabilities/zoom) | 155 | 14 | bearer | json |

## Validate

```bash
bun install
bun run check
```

`bun run check` verifies generated files, typechecks every capability, and runs `wrangler deploy --dry-run` for each Worker.

## Use a binding

Deploy a capability, set its upstream secret, then bind it from another Worker.

```bash
cd capabilities/stripe
wrangler secret put STRIPE_API_KEY
wrangler deploy
```

```jsonc
{
	"services": [
		{ "binding": "STRIPE", "service": "capa-stripe", "entrypoint": "StripeCapability" }
	]
}
```

```ts
const { result, evidence } = await env.STRIPE.charges.create({
	amount: 1000,
	currency: "usd",
	source: "tok_visa",
});
```

## Generate a binding

```bash
cd tools/codegen
bun src/cli.ts \
	--spec <url-or-path-to-openapi-spec> \
	--out ../../capabilities/<name> \
	--name <name> \
	--base-url <upstream-base-url> \
	--prefix <api-prefix> \
	--auth <bearer|private-token|basic> \
	--content-type <form|json>
```

## Evidence

```ts
{
	capability: string;
	operationId: string;
	namespace: string;
	method: string;
	http: string;
	path: string;
	risk: "low" | "medium" | "high";
	startedAt: string;
	durationMs: number;
	act: { request: { method: string; url: string }; status: number };
	assert: Array<{ kind: string; expected: unknown; actual: unknown; passed: boolean }>;
	verdict: "pass" | "fail";
}
```

`result` is returned only when every assertion passes. Otherwise `result` is `null` and `evidence.verdict` is `"fail"`.

## Contract

| Property | Value |
|---|---|
| Public HTTP route | `fetch()` returns 404 |
| Call path | Cloudflare service binding / JSRPC |
| Side effects per method | One upstream HTTP request |
| Evidence type | Plain JSON |
| Auth | Worker secret |
| Manifest | `capa.manifest.json` records source spec, entrypoint, auth, body type, and counts |
| Generated files | Do not edit |
| Editable files | `src/index.ts`, `src/overrides.ts`, `wrangler.jsonc` |

## Non-goals

| Non-goal | Note |
|---|---|
| Public HTTP proxy | Bind capabilities instead. Do not expose them. |
| Tamper-proof receipts | Evidence is plain JSON in v0. Persist, hash, or sign it elsewhere if needed. |
| Business-policy engine | Callers decide how to handle `risk`, assertions, and failed verdicts. |
| Hand-written SDK surface | API coverage comes from OpenAPI generation. |

## Docs

| Page | Purpose |
|---|---|
| [Spec](SPEC.md) | Evidence and capability contract |
| [Tutorial](docs/src/content/docs/tutorial.md) | Deploy and call a capability |
| [How it works](docs/src/content/docs/how-it-works.md) | Codegen, JSRPC, evidence loop |
| [Reference](docs/src/content/docs/reference.md) | Capability and evidence details |
| [Codegen](tools/codegen/README.md) | Generator flags and output |

