# capa-github

GitHub v3 REST API as a generated, proof-carrying Cloudflare JSRPC service binding. **1,182 operations, 36 namespaces.**

## Deploy

```bash
wrangler secret put GITHUB_API_KEY
wrangler deploy
```

Bind `capa-github` from a caller Worker with entrypoint `GithubCapability`. Every call returns `{ result, evidence }`.

| Field | Value |
|---|---|
| Source spec | `https://raw.githubusercontent.com/github/rest-api-description/main/descriptions/api.github.com/api.github.com.json` |
| Upstream | `https://api.github.com` |
| Prefix | `/` |
| Auth | `bearer` |
| Request body | `json` |

Generated files under `src/generated/` are codegen output; add API-specific evidence overrides in `src/overrides.ts`.
