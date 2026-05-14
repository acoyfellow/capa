# capa-kubernetes

Kubernetes as a generated, proof-carrying Cloudflare JSRPC service binding. **1,111 operations, 6 namespaces.**

## Deploy

```bash
wrangler secret put KUBERNETES_API_KEY
wrangler deploy
```

Bind `capa-kubernetes` from a caller Worker with entrypoint `KubernetesCapability`. Every call returns `{ result, evidence }`.

| Field | Value |
|---|---|
| Source spec | `https://raw.githubusercontent.com/kubernetes/kubernetes/master/api/openapi-spec/swagger.json` |
| Upstream | `https://kubernetes.default.svc` |
| Prefix | `/` |
| Auth | `bearer` |
| Request body | `json` |

Generated files under `src/generated/` are codegen output; add API-specific evidence overrides in `src/overrides.ts`.
