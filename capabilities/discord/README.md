# capa-discord

Discord HTTP API (Preview) as a generated, proof-carrying Cloudflare JSRPC service binding. **233 operations, 16 namespaces.**

## Deploy

```bash
wrangler secret put DISCORD_API_KEY
wrangler deploy
```

Bind `capa-discord` from a caller Worker with entrypoint `DiscordCapability`. Every call returns `{ result, evidence }`.

| Field | Value |
|---|---|
| Source spec | `https://raw.githubusercontent.com/discord/discord-api-spec/main/specs/openapi.json` |
| Upstream | `https://discord.com` |
| Prefix | `/` |
| Auth | `bearer` |
| Request body | `json` |

Generated files under `src/generated/` are codegen output; add API-specific evidence overrides in `src/overrides.ts`.
