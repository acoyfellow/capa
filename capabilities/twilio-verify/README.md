# capa-twilio-verify

Twilio - Verify as a generated, proof-carrying Cloudflare JSRPC service binding. **57 operations, 5 namespaces.**

## Deploy

```bash
wrangler secret put TWILIO_VERIFY_API_KEY
wrangler deploy
```

Bind `capa-twilio-verify` from a caller Worker with entrypoint `TwilioVerifyCapability`. Every call returns `{ result, evidence }`.

| Field | Value |
|---|---|
| Source spec | `https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json` |
| Upstream | `https://verify.twilio.com` |
| Prefix | `/v2` |
| Auth | `basic` |
| Request body | `form` |

Generated files under `src/generated/` are codegen output; add API-specific evidence overrides in `src/overrides.ts`.
