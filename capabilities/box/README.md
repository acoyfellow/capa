# capa-box

Box Platform API as a generated, proof-carrying Cloudflare JSRPC service binding. **294 operations, 56 namespaces.**

## Deploy

```bash
wrangler secret put BOX_API_KEY
wrangler deploy
```

Bind `capa-box` from a caller Worker with entrypoint `BoxCapability`. Every call returns `{ result, evidence }`.

| Field | Value |
|---|---|
| Source spec | `https://raw.githubusercontent.com/box/box-openapi/main/openapi.json` |
| Upstream | `https://api.box.com` |
| Prefix | `/` |
| Auth | `bearer` |
| Request body | `json` |

Generated files under `src/generated/` are codegen output; add API-specific evidence overrides in `src/overrides.ts`.
