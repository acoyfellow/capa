# capa-gitlab

The full GitLab REST API as a JSRPC capability. **1,050 operations, 51 namespaces**, generated from GitLab's official OpenAPI v2 spec.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/acoyfellow/capa/tree/main/capabilities/gitlab)

---

## How-to

### Install

Click the Deploy button above.

### Set the API key

```bash
wrangler secret put GITLAB_API_KEY
```

### Bind from a caller Worker

```jsonc
{
  "services": [
    { "binding": "GITLAB", "service": "capa-gitlab", "entrypoint": "GitlabCapability" }
  ]
}
```

### Call any GitLab endpoint

```ts
const { result, evidence } = await env.GITLAB.mergeRequests.createNote({
  id: "cloudflare/ai-agents/lee",
  mergeRequestIid: 4172,
  body: "LGTM",
});

const { result: issue } = await env.GITLAB.issues.create({
  id: "cloudflare/ai-agents/lee",
  title: "Add capa-jira",
  description: "See parent epic.",
});

const { result: pipeline } = await env.GITLAB.pipelines.retry({
  id: "cloudflare/ai-agents/lee",
  pipeline_id: 12345,
});
```

### Connect to a self-managed instance (e.g. `gitlab.cfdata.org`)

```bash
wrangler secret put GITLAB_BASE_URL_OVERRIDE   # https://gitlab.cfdata.org
wrangler secret put CF_ACCESS_CLIENT_ID        # Cloudflare Access service token
wrangler secret put CF_ACCESS_CLIENT_SECRET    # Cloudflare Access service token secret
```

The runtime will send `CF-Access-Client-Id` and `CF-Access-Client-Secret` headers on every request when both secrets are present.

### Add a custom evidence override

Edit `src/overrides.ts`:

```ts
export const overrides = {
  mergeRequests: {
    merge: {
      asserts: [
        equals("state", "merged"),
      ],
    },
  },
};
```

### Regenerate from the latest GitLab spec

```bash
cd ../../tools/codegen
bun src/cli.ts \
  --spec https://docs.gitlab.com/api/openapi/openapi_v2.yaml \
  --out  ../../capabilities/gitlab \
  --name gitlab \
  --base-url https://gitlab.com \
  --prefix /api/v4 \
  --auth private-token \
  --content-type json
```

---

## Reference

### Coverage

| | Count |
|---|---|
| Operations | 1,050 |
| Namespaces | 51 |
| Worker bundle (uncompressed) | 581 KiB |
| Worker bundle (gzipped) | 51 KiB |
| Source spec version | GitLab API vv4 (Swagger 2.0) |

### Evidence overrides applied

These methods get richer assertions than the generic HTTP-status check:

| Method | Assertions |
|---|---|
| `mergeRequests.createNote` | `id` exists, `id` is number, `body` exists |
| `mergeRequests.update` | `id` exists, `iid` exists |
| `mergeRequests.approve` | `state == approved` |
| `issues.create` | `id` exists, `iid` exists, `state == opened` |
| `issues.update` | `id` exists, `iid` exists |
| `pipelines.retry` | `id` exists, `status` exists |

Every other operation gets a generic `httpStatus 2xx` assertion.

### Required secrets

| Secret | Source |
|---|---|
| `GITLAB_API_KEY` | GitLab → User Settings → Access Tokens |

### Optional secrets (self-managed / cfdata)

| Secret | When needed |
|---|---|
| `GITLAB_BASE_URL_OVERRIDE` | Self-managed GitLab (e.g. `https://gitlab.cfdata.org`) |
| `CF_ACCESS_CLIENT_ID` | Cloudflare Access in front of GitLab |
| `CF_ACCESS_CLIENT_SECRET` | Cloudflare Access in front of GitLab |

### Public HTTP route

`fetch()` returns 404. The Worker is JSRPC-only.

### Generated files (do not edit)

| File | Purpose |
|---|---|
| `src/generated/schema.gen.ts` | `openapi-typescript` output, full type tree |
| `src/generated/capability.gen.ts` | `RpcTarget` classes + `WorkerEntrypoint` |
| `src/generated/manifest.gen.ts` | `operationId` → metadata map |
| `src/generated/runtime.ts` | Evidence-aware fetch helper |

### Editable files

| File | Purpose |
|---|---|
| `src/index.ts` | Worker entry, applies overrides |
| `src/overrides.ts` | Per-method evidence overrides |
| `wrangler.jsonc` | Deployment config |
