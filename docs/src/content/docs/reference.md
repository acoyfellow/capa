---
title: Reference
description: Capabilities, codegen CLI, and the receipt returned with each API result.
---

## Capabilities

| Capability | Operations | Namespaces | Bundle (gz) | Auth | Body | Deploy |
|---|---|---|---|---|---|---|
| **stripe** | 534 | 73 | 38 KiB | Bearer | Form | [Deploy](https://deploy.workers.cloudflare.com/?url=https://github.com/acoyfellow/capa/tree/main/capabilities/stripe) |
| **gitlab** | 1,047 | 51 | 54 KiB | Private-Token | JSON | [Deploy](https://deploy.workers.cloudflare.com/?url=https://github.com/acoyfellow/capa/tree/main/capabilities/gitlab) |
| **jira** | 601 | 76 | 48 KiB | Basic | JSON | [Deploy](https://deploy.workers.cloudflare.com/?url=https://github.com/acoyfellow/capa/tree/main/capabilities/jira) |

### Secret names

| Capability | Required | Optional |
|---|---|---|
| stripe | `STRIPE_API_KEY` | — |
| gitlab | `GITLAB_API_KEY` | `GITLAB_BASE_URL_OVERRIDE`, `CF_ACCESS_CLIENT_ID`, `CF_ACCESS_CLIENT_SECRET` |
| jira | `JIRA_API_KEY` (format: `email:token`) | `JIRA_BASE_URL_OVERRIDE` |

### Entrypoint classes

| Capability | Entrypoint |
|---|---|
| stripe | `StripeCapability` |
| gitlab | `GitlabCapability` |
| jira | `JiraCapability` |

## Codegen CLI

```bash
cd tools/codegen
bun src/cli.ts \
  --spec <url-or-path-to-openapi-spec> \
  --out ../../capabilities/<name> \
  --name <name> \
  --base-url <upstream-base-url> \
  --prefix <api-prefix> \
  --auth <bearer|private-token|basic> \
  --content-type <form|json>
```

Contribution guidance and the full repo test checklist live in [CONTRIBUTING.md](https://github.com/acoyfellow/capa/blob/main/CONTRIBUTING.md). Generate locally if the wrapper is only for you; open a PR if it belongs in the public catalog.

### Examples

**Stripe**
```bash
bun src/cli.ts \
  --spec https://raw.githubusercontent.com/stripe/openapi/master/openapi/spec3.sdk.json \
  --out ../../capabilities/stripe --name stripe \
  --base-url https://api.stripe.com --prefix /v1 \
  --auth bearer --content-type form
```

**GitLab (Swagger 2.0)**
```bash
bun src/cli.ts \
  --spec https://docs.gitlab.com/api/openapi/openapi_v2.yaml \
  --out ../../capabilities/gitlab --name gitlab \
  --base-url https://gitlab.com --prefix /api/v4 \
  --auth private-token --content-type json
```

**Jira Cloud**
```bash
bun src/cli.ts \
  --spec https://developer.atlassian.com/cloud/jira/platform/swagger-v3.v3.json \
  --out ../../capabilities/jira --name jira \
  --base-url https://your-domain.atlassian.net --prefix /rest/api/3 \
  --auth basic --content-type json
```

## Return receipt shape

```ts
{
  capability:   string;
  operationId:  string;        // e.g. "PostCharges"
  namespace:    string;        // e.g. "charges"
  method:       string;        // e.g. "create"
  http:         string;        // "get" | "post" | "put" | "patch" | "delete"
  path:         string;        // "/v1/charges"
  risk:         "low" | "medium" | "high";
  startedAt:    string;        // ISO 8601
  durationMs:   number;
  act:          { request: { method: string; url: string }; status: number };
  assert:       Array<{ kind: string; expected: unknown; actual: unknown; passed: boolean }>;
  verdict:      "pass" | "fail";
}
```

## Method return shape

```ts
{ result: T | null; evidence: EvidenceBundle }
```

`result` is `null` when `verdict === "fail"`.

## Capability invariants

| Property | Value |
|---|---|
| Public HTTP route | `fetch()` returns 404 |
| Side effects per method | One upstream HTTP request |
| Evidence type | Plain JSON, no streams or handles |
| Auth | `wrangler secret put` |
| Billing | Caller-pays |

## Repo layout

| Path | Purpose |
|---|---|
| `tools/codegen/` | OpenAPI → capability generator |
| `capabilities/<name>/src/generated/` | Generated code (do not edit) |
| `capabilities/<name>/src/index.ts` | Worker entry (~30 LOC) |
| `capabilities/<name>/src/overrides.ts` | Per-method evidence overrides |
| `capabilities/<name>/wrangler.jsonc` | Deployment config |
| `tests/harness/` | Generic smoke-test Worker |
