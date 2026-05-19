# capa-blooio

[Blooio](https://blooio.com) (send iMessage from anywhere) as a generated, proof-carrying Cloudflare JSRPC service binding. **54 operations, 8 namespaces** covering chats, messages, contacts, groups, FaceTime calls, phone-number lookup, and webhooks.

## Deploy

Generate an API key at [app.blooio.com](https://app.blooio.com), then:

```bash
wrangler secret put BLOOIO_API_KEY
wrangler deploy
```

Bind `capa-blooio` from a caller Worker with entrypoint `BlooioCapability`. Every call returns `{ result, evidence }`.

```ts
const { result, evidence } = await env.BLOOIO.chats.createMessage({
  chatId: "<chat-id>",
  body: { text: "hello from a Cloudflare Worker" },
});

if (evidence.verdict === "fail") {
  return Response.json({ error: "send failed", evidence }, { status: 502 });
}
```

| Field | Value |
|---|---|
| Source spec | `https://backend.blooio.com/v2/api/openapi.json` |
| Upstream | `https://backend.blooio.com/v2/api` |
| Prefix | `/` |
| Auth | `bearer` (API key) |
| Request body | `json` |
| API docs | <https://docs.blooio.com> |
| Dashboard | <https://app.blooio.com> |

Generated files under `src/generated/` are codegen output; add API-specific evidence overrides in `src/overrides.ts`.
