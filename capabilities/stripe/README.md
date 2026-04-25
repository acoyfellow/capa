# capa-stripe

Stripe wrapped as a JSRPC capability with `observe / act / assert` baked in.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/acoyfellow/capa/tree/main/capabilities/stripe)

---

## How-to

### Install

Click the Deploy button above.

### Set the API key

```bash
wrangler secret put STRIPE_SECRET_KEY
```

### Bind from a caller Worker

```jsonc
{
  "services": [
    { "binding": "STRIPE_PROOF", "service": "capa-stripe", "entrypoint": "StripeCapability" }
  ]
}
```

### Charge a card

```ts
const { result, evidence } = await env.STRIPE_PROOF.charge({
  amount: 1000,
  currency: "usd",
  source: "tok_visa",
});
```

### Refund a charge

```ts
const { result, evidence } = await env.STRIPE_PROOF.refund({
  chargeId: "ch_...",
  amount: 500, // optional partial refund
});
```

---

## Reference

### Methods

| Method | Input | Asserts |
|---|---|---|
| `charge` | `{ amount, currency, source, description? }` | `httpStatus==200`, `id ~ ^ch_`, `status==succeeded`, `paid==true` |
| `refund` | `{ chargeId, amount? }` | `httpStatus==200`, `id ~ ^re_`, `status==succeeded` |

### Side effects

| Method | Side effect |
|---|---|
| `charge` | money-moves |
| `refund` | money-moves |

### Required secrets

| Secret | Source |
|---|---|
| `STRIPE_SECRET_KEY` | Stripe dashboard → Developers → API keys |

### Risk

`high` — every method moves money.

### Public HTTP route

`fetch()` returns 404. The Worker is JSRPC-only.
