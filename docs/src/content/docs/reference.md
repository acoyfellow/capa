---
title: Reference
description: Capabilities, codegen CLI, and the receipt returned with each API result.
---

## Capabilities

| Capability | Operations | Namespaces | Auth | Body | Deploy |
|---|---:|---:|---|---|---|
| **box** | 294 | 56 | Bearer | JSON | [Deploy](https://deploy.workers.cloudflare.com/?url=https://github.com/acoyfellow/capa/tree/main/capabilities/box) |
| **discord** | 233 | 16 | Bearer | JSON | [Deploy](https://deploy.workers.cloudflare.com/?url=https://github.com/acoyfellow/capa/tree/main/capabilities/discord) |
| **github** | 1,183 | 36 | Bearer | JSON | [Deploy](https://deploy.workers.cloudflare.com/?url=https://github.com/acoyfellow/capa/tree/main/capabilities/github) |
| **gitlab** | 1,047 | 51 | Private-Token | JSON | [Deploy](https://deploy.workers.cloudflare.com/?url=https://github.com/acoyfellow/capa/tree/main/capabilities/gitlab) |
| **jira** | 601 | 76 | Basic | JSON | [Deploy](https://deploy.workers.cloudflare.com/?url=https://github.com/acoyfellow/capa/tree/main/capabilities/jira) |
| **kubernetes** | 1,111 | 6 | Bearer | JSON | [Deploy](https://deploy.workers.cloudflare.com/?url=https://github.com/acoyfellow/capa/tree/main/capabilities/kubernetes) |
| **sentry** | 209 | 6 | Bearer | JSON | [Deploy](https://deploy.workers.cloudflare.com/?url=https://github.com/acoyfellow/capa/tree/main/capabilities/sentry) |
| **slack** | 174 | 174 | Bearer | Form | [Deploy](https://deploy.workers.cloudflare.com/?url=https://github.com/acoyfellow/capa/tree/main/capabilities/slack) |
| **stripe** | 534 | 73 | Bearer | Form | [Deploy](https://deploy.workers.cloudflare.com/?url=https://github.com/acoyfellow/capa/tree/main/capabilities/stripe) |
| **twilio-messaging** | 58 | 5 | Basic | Form | [Deploy](https://deploy.workers.cloudflare.com/?url=https://github.com/acoyfellow/capa/tree/main/capabilities/twilio-messaging) |
| **twilio-verify** | 57 | 5 | Basic | Form | [Deploy](https://deploy.workers.cloudflare.com/?url=https://github.com/acoyfellow/capa/tree/main/capabilities/twilio-verify) |
| **twilio** | 197 | 2 | Basic | Form | [Deploy](https://deploy.workers.cloudflare.com/?url=https://github.com/acoyfellow/capa/tree/main/capabilities/twilio) |
| **twitch** | 144 | 30 | Bearer | JSON | [Deploy](https://deploy.workers.cloudflare.com/?url=https://github.com/acoyfellow/capa/tree/main/capabilities/twitch) |
| **zoom** | 155 | 14 | Bearer | JSON | [Deploy](https://deploy.workers.cloudflare.com/?url=https://github.com/acoyfellow/capa/tree/main/capabilities/zoom) |

### Authentication modes

The reference stays short: capa uses Worker secrets by default. The planned multi-tenant runtime-auth contract and provider-header shape live on [Runtime auth](/runtime-auth/).

### Secret names

| Capability | Required | Optional |
|---|---|---|
| box | `BOX_API_KEY` | — |
| discord | `DISCORD_API_KEY` | — |
| github | `GITHUB_API_KEY` | — |
| gitlab | `GITLAB_API_KEY` | `GITLAB_BASE_URL_OVERRIDE`, `CF_ACCESS_CLIENT_ID`, `CF_ACCESS_CLIENT_SECRET` |
| jira | `JIRA_API_KEY` (format: `email:token`) | `JIRA_BASE_URL_OVERRIDE` |
| kubernetes | `KUBERNETES_API_KEY` | — |
| sentry | `SENTRY_API_KEY` | — |
| slack | `SLACK_API_KEY` | — |
| stripe | `STRIPE_API_KEY` | — |
| twilio-messaging | `TWILIO_MESSAGING_API_KEY` | — |
| twilio-verify | `TWILIO_VERIFY_API_KEY` | — |
| twilio | `TWILIO_API_KEY` | — |
| twitch | `TWITCH_API_KEY`, `TWITCH_CLIENT_ID` | — |
| zoom | `ZOOM_API_KEY` | — |

### Entrypoint classes

The entrypoint class is the exported Worker RPC class named in a caller Worker’s `services[].entrypoint`. It tells Wrangler which generated capability surface the binding should expose.

| Capability | Entrypoint class |
|---|---|
| box | `BoxCapability` |
| discord | `DiscordCapability` |
| github | `GithubCapability` |
| gitlab | `GitlabCapability` |
| jira | `JiraCapability` |
| kubernetes | `KubernetesCapability` |
| sentry | `SentryCapability` |
| slack | `SlackCapability` |
| stripe | `StripeCapability` |
| twilio-messaging | `TwilioMessagingCapability` |
| twilio-verify | `TwilioVerifyCapability` |
| twilio | `TwilioCapability` |
| twitch | `TwitchCapability` |
| zoom | `ZoomCapability` |

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
