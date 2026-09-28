# capa-htmlcsstoimage

[HTML/CSS to Image](https://htmlcsstoimage.com) as a generated Cloudflare JSRPC service binding. **38 operations, 9 namespaces** covering image rendering, batches, templates, OG configs, proxies, storage destinations, and usage.

## Deploy

The API uses Basic auth with your User ID and API Key from the [dashboard](https://htmlcsstoimage.com/dashboard). Store them joined by a colon:

```bash
echo -n "<user-id>:<api-key>" | wrangler secret put HTMLCSSTOIMAGE_API_KEY
wrangler deploy
```

Bind `capa-htmlcsstoimage` from a caller Worker with entrypoint `HtmlcsstoimageCapability`. Every call returns `{ result, evidence }`.

```ts
const { result, evidence } = await env.HTMLCSSTOIMAGE.image.create({
  html: "<div class='card'>Hello from a Worker</div>",
  css: ".card { padding: 40px; font: 48px sans-serif; }",
});

if (evidence.verdict === "fail") {
  return Response.json({ error: "render failed", evidence }, { status: 502 });
}
```

| Field | Value |
|---|---|
| Source spec | `https://htmlcsstoimage.com/openapi/v1.json` |
| Upstream | `https://hcti.io` |
| Prefix | `/v1` |
| Auth | `basic` (`user-id:api-key`) |
| Request body | `json` |
| API docs | <https://htmlcsstoimage.com/api-docs/> |

Generated files under `src/generated/` are codegen output; add API-specific evidence overrides in `src/overrides.ts`.
