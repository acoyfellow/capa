# capa-stripe

`env.STRIPE_PROOF.charge({ amount, currency, source })` — Stripe wrapped as a JSRPC capability with `observe / act / assert` baked in.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/acoyfellow/capa/tree/main/capabilities/stripe)

## What you get

```ts
import { WorkerEntrypoint } from "cloudflare:workers";

export default {
  async fetch(request, env) {
    const { result, evidence } = await env.STRIPE_PROOF.charge({
      amount: 1000,
      currency: "usd",
      source: "tok_visa",
    });

    if (evidence.verdict === "fail") {
      // every assertion is itemised in evidence.assert[]
      return Response.json({ error: "claim verification failed", evidence }, { status: 502 });
    }

    return Response.json({ chargeId: result.id, evidence });
  },
};
```

`evidence` is a `proof-spec.v0` evidence bundle. Persist it to R2 / Artifacts / your audit log of choice.

## After deploy

One secret:

```bash
wrangler secret put STRIPE_SECRET_KEY
```

Then bind from your caller Worker:

```jsonc
{
	"services": [
		{
			"binding": "STRIPE_PROOF",
			"service": "capa-stripe",
			"entrypoint": "StripeCapability"
		}
	]
}
```

## Methods

| Method | Side effects | Asserts |
|---|---|---|
| `charge({amount, currency, source, description?})` | money moves | `status==succeeded`, `paid==true`, `id ~ ^ch_` |
| `refund({chargeId, amount?})` | money moves | `status==succeeded`, `id ~ ^re_`, observe-step verifies the charge was paid first |
| `spec()` | none | returns the `proof-spec.v0.json` for tooling |

## What changes in production

`fetch()` returns 404 by design. The Worker is JSRPC-only — there is no public route. Bind it; do not expose it.

## See also

- `proof-spec.v0.json` — the contract
- `../../README.md` — the `capa` thesis
