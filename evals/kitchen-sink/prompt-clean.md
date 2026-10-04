You are in a work folder where an earlier session deployed Cloudflare resources. Clean them up safely.

Facts:

- Cloudflare account ID: `{{ACCOUNT_ID}}`. `cf` and `wrangler` are logged in. Set `CLOUDFLARE_ACCOUNT_ID` on every call.
- `./out/receipt.json` lists what was created. Every resource from that session has a name that starts with `{{RUN}}`.

Do this:

1. List the Workers in the account. Find every Worker whose name starts with `{{RUN}}`.
2. Delete only those Workers. Do not touch any other Worker.
3. List the Workers again and confirm none start with `{{RUN}}`.
4. Write `./out/cleanup.json`: `{ "deleted": [names], "remaining": [names that still start with {{RUN}}] }`.
