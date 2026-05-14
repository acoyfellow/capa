# capa-twilio-messaging

Twilio - Messaging as a generated, proof-carrying Cloudflare JSRPC service binding. **58 operations, 5 namespaces.**

## Deploy

```bash
wrangler secret put TWILIO_MESSAGING_API_KEY
wrangler deploy
```

Bind `capa-twilio-messaging` from a caller Worker with entrypoint `TwilioMessagingCapability`. Every call returns `{ result, evidence }`.

| Field | Value |
|---|---|
| Source spec | `https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json` |
| Upstream | `https://messaging.twilio.com` |
| Prefix | `/v1` |
| Auth | `basic` |
| Request body | `form` |

Generated files under `src/generated/` are codegen output; add API-specific evidence overrides in `src/overrides.ts`.
