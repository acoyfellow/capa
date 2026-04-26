---
title: Tutorial
description: Deploy a capability and call it from a caller Worker.
---

This tutorial uses `capa-stripe` as a concrete example. The steps are identical for every capability — swap the name, secret, and binding.

## 1. Deploy capa-stripe

Click the Deploy to Cloudflare button in the [stripe capability README](https://github.com/acoyfellow/capa/tree/main/capabilities/stripe). Cloudflare clones the repo and deploys `capa-stripe` to your account.

## 2. Set the API key

```bash
cd capa/capabilities/stripe
wrangler secret put STRIPE_API_KEY
```

Paste your Stripe test key (`sk_test_...`).

## 3. Declare the binding

In your caller Worker's `wrangler.jsonc`:

```jsonc
{
  "services": [
    { "binding": "STRIPE", "service": "capa-stripe", "entrypoint": "StripeCapability" }
  ]
}
```

## 4. Call the endpoint

```ts
export default {
  async fetch(request, env) {
    const { result, evidence } = await env.STRIPE.charges.create({
      amount: 1000,
      currency: "usd",
      source: "tok_visa",
    });

    if (evidence.verdict === "fail") {
      return Response.json(
        { error: "verification failed", evidence },
        { status: 502 }
      );
    }

    return Response.json({ chargeId: result.id, evidence });
  },
};
```

## 5. Deploy

```bash
wrangler deploy
```

`evidence.verdict` is `"pass"` when every assertion passed.

## What just happened

The `charges.create` call:
1. Made an RPC to `capa-stripe`
2. `capa-stripe` POSTed to Stripe's `/v1/charges`
3. Checked HTTP status + per-method assertions (`id ~ ^ch_`, `status == succeeded`, `paid == true`)
4. Returned `{ result, evidence }`

You got the charge data and a full audit trail in one call.

## Next

- [How It Works](/how-it-works) — understand the loop
- [Reference](/reference) — all capabilities and codegen flags
