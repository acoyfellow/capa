# capa-slack

Slack Web API as a generated, proof-carrying Cloudflare JSRPC service binding. **174 operations, 174 namespaces.**

## Deploy

```bash
wrangler secret put SLACK_API_KEY
wrangler deploy
```

Bind `capa-slack` from a caller Worker with entrypoint `SlackCapability`. Every call returns `{ result, evidence }`.

| Field | Value |
|---|---|
| Source spec | `https://raw.githubusercontent.com/slackapi/slack-api-specs/master/web-api/slack_web_openapi_v2_without_examples.json` |
| Upstream | `https://slack.com` |
| Prefix | `/` |
| Auth | `bearer` |
| Request body | `form` |

Generated files under `src/generated/` are codegen output; add API-specific evidence overrides in `src/overrides.ts`.
