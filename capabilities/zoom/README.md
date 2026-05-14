# capa-zoom

Zoom API as a generated, proof-carrying Cloudflare JSRPC service binding. **155 operations, 14 namespaces.**

## Deploy

```bash
wrangler secret put ZOOM_API_KEY
wrangler deploy
```

Bind `capa-zoom` from a caller Worker with entrypoint `ZoomCapability`. Every call returns `{ result, evidence }`.

| Field | Value |
|---|---|
| Source spec | `https://raw.githubusercontent.com/zoom/api/master/openapi.v2.json` |
| Upstream | `https://api.zoom.us` |
| Prefix | `/` |
| Auth | `bearer` |
| Request body | `json` |

Generated files under `src/generated/` are codegen output; add API-specific evidence overrides in `src/overrides.ts`.
