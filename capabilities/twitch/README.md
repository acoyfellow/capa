# capa-twitch

Twitch Helix as a generated Cloudflare JSRPC service binding. **144 operations, 30 namespaces.** The checked-in spec is a community-maintained OpenAPI rendering of Twitch's reference docs because Twitch does not publish an official OpenAPI file.

## Deploy

```bash
wrangler secret put TWITCH_API_KEY     # OAuth app/user token
wrangler secret put TWITCH_CLIENT_ID   # Twitch application client id
wrangler deploy
```

Twitch Helix requires both `Authorization: Bearer ...` and `Client-Id: ...`; this capability adds `Client-Id` from `TWITCH_CLIENT_ID` on every upstream request.

Bind `capa-twitch` from a caller Worker with entrypoint `TwitchCapability`. Every call returns `{ result, evidence }`.

| Field | Value |
|---|---|
| Source spec | `https://raw.githubusercontent.com/DmitryScaletta/twitch-api-swagger/main/openapi.json` |
| Upstream | `https://api.twitch.tv/helix` |
| Prefix | `/` |
| Auth | `bearer` |
| Request body | `json` |

Generated files under `src/generated/` are codegen output; add API-specific evidence overrides in `src/overrides.ts`.
