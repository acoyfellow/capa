# capa-twilio

Twilio - Api as a generated, proof-carrying Cloudflare JSRPC service binding. **197 operations, 2 namespaces.**

## Deploy

```bash
wrangler secret put TWILIO_API_KEY
wrangler deploy
```

Bind `capa-twilio` from a caller Worker with entrypoint `TwilioCapability`. Every call returns `{ result, evidence }`.

| Field | Value |
|---|---|
| Source spec | `https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json` |
| Upstream | `https://api.twilio.com` |
| Prefix | `/2010-04-01` |
| Auth | `basic` |
| Request body | `form` |

Generated files under `src/generated/` are codegen output; add API-specific evidence overrides in `src/overrides.ts`.
