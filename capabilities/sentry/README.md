# capa-sentry

API Reference as a generated, proof-carrying Cloudflare JSRPC service binding. **209 operations, 6 namespaces.**

## Deploy

```bash
wrangler secret put SENTRY_API_KEY
wrangler deploy
```

Bind `capa-sentry` from a caller Worker with entrypoint `SentryCapability`. Every call returns `{ result, evidence }`.

| Field | Value |
|---|---|
| Source spec | `https://raw.githubusercontent.com/getsentry/sentry-api-schema/main/openapi-derefed.json` |
| Upstream | `https://sentry.io` |
| Prefix | `/api/0` |
| Auth | `bearer` |
| Request body | `json` |

Generated files under `src/generated/` are codegen output; add API-specific evidence overrides in `src/overrides.ts`.
