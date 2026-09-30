# capa-htmlcsstoimage

[HTML/CSS to Image](https://htmlcsstoimage.com) as a generated Cloudflare JSRPC service binding. **38 operations, 9 namespaces** covering image rendering, batches, templates, OG configs, proxies, storage destinations, and usage. Requests, query parameters, and responses are typed from the published OpenAPI spec.

## Deploy

Grab your User ID and API Key from the [dashboard](https://htmlcsstoimage.com/dashboard), then:

```bash
wrangler secret put HTMLCSSTOIMAGE_USER_ID
wrangler secret put HTMLCSSTOIMAGE_API_KEY
wrangler deploy
```

Bind `capa-htmlcsstoimage` from a caller Worker with entrypoint `HtmlcsstoimageCapability`. Every call returns `{ result, evidence }`.

## Create an image

```ts
const { result, evidence } = await env.HTMLCSSTOIMAGE.image.create({
  html: "<div class='card'>Hello from a Worker</div>",
  css: ".card { padding: 40px; font: 48px sans-serif; }",
  google_fonts: "Inter",
});

if (evidence.verdict === "fail") {
  return Response.json({ error: "render failed", evidence }, { status: 502 });
}

result?.url; // https://hcti.io/v1/image/<id>
```

## Render the bytes

`image.render` and `image.renderFormat` return the rendered file as a `Uint8Array`. Render options go in `query`:

```ts
const { result } = await env.HTMLCSSTOIMAGE.image.renderFormat(imageId, "png", {
  query: { width: 1200, height: 630 },
});

return new Response(result as Uint8Array, { headers: { "content-type": "image/png" } });
```

## Per-call credentials

Multi-tenant callers can pass credentials per call instead of using the Worker secrets:

```ts
await env.HTMLCSSTOIMAGE.usage.retrieve({
  auth: { username: tenant.hctiUserId, password: tenant.hctiApiKey },
});
```

| Field | Value |
|---|---|
| Source spec | `https://htmlcsstoimage.com/openapi/v1.json` |
| Upstream | `https://hcti.io` |
| Prefix | `/v1` |
| Auth | Basic (`HTMLCSSTOIMAGE_USER_ID` + `HTMLCSSTOIMAGE_API_KEY`) |
| Method names | from the spec's `operationId` |
| API docs | <https://htmlcsstoimage.com/api-docs/> |

Generated files under `src/generated/` are codegen output; add API-specific evidence overrides in `src/overrides.ts`.
