# capa-stripe

The full Stripe API as a JSRPC capability. **534 operations, 73 namespaces**, generated from Stripe's official OpenAPI spec.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/acoyfellow/capa/tree/main/capabilities/stripe)

---

## How-to

### Install

Click the Deploy button above.

### Set the API key

```bash
wrangler secret put STRIPE_API_KEY
```

### Bind from a caller Worker

```jsonc
{
  "services": [
    { "binding": "STRIPE", "service": "capa-stripe", "entrypoint": "StripeCapability" }
  ]
}
```

### Call any Stripe endpoint

```ts
const { result, evidence } = await env.STRIPE.charges.create({
  amount: 1000,
  currency: "usd",
  source: "tok_visa",
});

const { result: customer } = await env.STRIPE.customers.create({
  email: "user@example.com",
});

const { result: refund } = await env.STRIPE.refunds.create({
  charge: "ch_...",
  amount: 500,
});
```

### Add a custom evidence override

Edit `src/overrides.ts`:

```ts
export const overrides = {
  paymentIntents: {
    create: {
      asserts: [
        matches("id", /^pi_/),
        equals("status", "succeeded"),
      ],
    },
  },
};
```

### Regenerate from the latest Stripe spec

```bash
cd ../../tools/codegen
bun src/cli.ts \
  --spec https://raw.githubusercontent.com/stripe/openapi/master/openapi/spec3.sdk.json \
  --out  ../../capabilities/stripe \
  --name stripe
```

---

## Reference

### Coverage

| | Count |
|---|---|
| Operations | 534 |
| Namespaces | 73 |
| Worker bundle (uncompressed) | 313 KiB |
| Worker bundle (gzipped) | 36 KiB |
| Source spec version | `2026-04-22.dahlia` |

### Evidence overrides applied

These methods get richer assertions than the generic HTTP-status check:

| Method | Assertions |
|---|---|
| `charges.create` | `id ~ ^ch_`, `status == succeeded`, `paid == true` |
| `refunds.create` | `id ~ ^re_`, `status == succeeded` |
| `paymentIntents.create` | `id ~ ^pi_` |
| `paymentIntents.confirm` | `id ~ ^pi_`, `status == succeeded` |

Every other operation gets a generic `httpStatus 2xx` assertion.

### Required secrets

| Secret | Source |
|---|---|
| `STRIPE_API_KEY` | Stripe dashboard → Developers → API keys |

### Public HTTP route

`fetch()` returns 404. The Worker is JSRPC-only.

### Generated files (do not edit)

| File | Purpose |
|---|---|
| `src/generated/schema.gen.ts` | `openapi-typescript` output, full type tree |
| `src/generated/capability.gen.ts` | `RpcTarget` classes + `WorkerEntrypoint` |
| `src/generated/manifest.gen.ts` | `operationId` → metadata map |
| `src/generated/runtime.ts` | Evidence-aware fetch helper |

### Editable files

| File | Purpose |
|---|---|
| `src/index.ts` | Worker entry, applies overrides |
| `src/overrides.ts` | Per-method evidence overrides |
| `wrangler.jsonc` | Deployment config |
