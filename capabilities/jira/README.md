# capa-jira

The full Jira Cloud REST API as a JSRPC capability. **603 operations, 76 namespaces**, generated from Atlassian's official OpenAPI 3.0 spec.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/acoyfellow/capa/tree/main/capabilities/jira)

---

## How-to

### Install

Click the Deploy button above.

### Set the API key

Jira Cloud uses Basic auth (`email:api_token`). The runtime base64-encodes the secret for you.

```bash
wrangler secret put JIRA_API_KEY
# value: your_email@example.com:your_api_token
```

### Bind from a caller Worker

```jsonc
{
  "services": [
    { "binding": "JIRA_PROOF", "service": "capa-jira", "entrypoint": "JiraCapability" }
  ]
}
```

### Call any Jira endpoint

```ts
const { result, evidence } = await env.JIRA_PROOF.issues.createIssue({
  fields: {
    project: { key: "DEVTOOLS" },
    summary: "Add capa-jira",
    issuetype: { name: "Task" },
  },
});

const { result: comment } = await env.JIRA_PROOF.issueComments.addComment({
  issueIdOrKey: "DEVTOOLS-123",
  body: {
    type: "doc",
    version: 1,
    content: [{ type: "paragraph", content: [{ type: "text", text: "LGTM" }] }],
  },
});

const { result: transition } = await env.JIRA_PROOF.issueTransitions.doTransition({
  issueIdOrKey: "DEVTOOLS-123",
  transition: { id: "31" },
});
```

### Connect to Jira Server / Data Center (e.g. internal cfdata)

```bash
wrangler secret put JIRA_BASE_URL_OVERRIDE   # e.g. https://jira.cfdata.org
```

The runtime will use `/rest/api/2` automatically when the base URL is overridden (Jira Server) vs `/rest/api/3` (Jira Cloud). The generated types target Cloud, but the REST shapes are backward-compatible for the endpoints used.

### Add a custom evidence override

Edit `src/overrides.ts`:

```ts
export const overrides = {
  issues: {
    createIssue: {
      asserts: [
        equals("fields.status.name", "To Do"),
      ],
    },
  },
};
```

### Regenerate from the latest Jira spec

```bash
cd ../../tools/codegen
bun src/cli.ts \
  --spec https://developer.atlassian.com/cloud/jira/platform/swagger-v3.v3.json \
  --out  ../../capabilities/jira \
  --name jira \
  --base-url https://your-domain.atlassian.net \
  --prefix /rest/api/3 \
  --auth basic \
  --content-type json
```

---

## Reference

### Coverage

| | Count |
|---|---|
| Operations | 603 |
| Namespaces | 76 |
| Worker bundle (uncompressed) | 401 KiB |
| Worker bundle (gzipped) | 46 KiB |
| Source spec version | Jira Cloud platform REST API v1001.0.0-SNAPSHOT |

### Evidence overrides applied

These methods get richer assertions than the generic HTTP-status check:

| Method | Assertions |
|---|---|
| `issues.createIssue` | `id` exists, `key` exists, `id` is string |
| `issues.editIssue` | `id` exists, `key` exists |
| `issueComments.addComment` | `id` exists, `body` exists |
| `issueTransitions.doTransition` | `id` exists, `transitions` exists |

Every other operation gets a generic `httpStatus 2xx` assertion.

### Required secrets

| Secret | Source |
|---|---|
| `JIRA_API_KEY` | `email:api_token` — Jira → Account Settings → Security → API tokens |

### Optional secrets (Jira Server / cfdata)

| Secret | When needed |
|---|---|
| `JIRA_BASE_URL_OVERRIDE` | Self-managed Jira (e.g. `https://jira.cfdata.org`) |

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
