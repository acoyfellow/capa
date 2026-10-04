You are in an empty work folder. Use **capa** to call the GitHub API from a Cloudflare Worker.

capa source and docs: `./capa` (a copy of https://github.com/acoyfellow/capa). Start with `capa/README.md` and `capa/docs/src/content/docs/tutorial.mdx`.

Facts:

- Cloudflare account ID: `{{ACCOUNT_ID}}`. `cf` and `wrangler` are logged in. Set `CLOUDFLARE_ACCOUNT_ID` on every call.
- Workers.dev subdomain: `{{SUBDOMAIN}}.workers.dev`.
- A GitHub token is in the file `./secrets/github-token`. Never print it, never write it to another file, and never pass it as a command argument. Pipe it on stdin.
- Every resource you create must have a name that starts with `{{RUN}}`.

Do this:

1. Deploy the capa GitHub capability as a Worker named `{{RUN}}-github`, with the token as its API key secret.
2. Deploy a second Worker named `{{RUN}}-caller`, on workers.dev, with a service binding to `{{RUN}}-github`. Its `GET /` calls the GitHub `user` endpoint through the binding and returns JSON `{ "login": <login>, "verdict": <evidence.verdict>, "status": <evidence.act.status> }`.
3. Call `https://{{RUN}}-caller.{{SUBDOMAIN}}.workers.dev/` and check that `verdict` is `"pass"`.
4. Write `./out/redo.sh`. Someone else will run it later from this work folder, as `bash out/redo.sh <prefix>`, with a different prefix. It must deploy both Workers with names that start with that prefix, call the caller, print the JSON, and exit non-zero if `verdict` is not `"pass"`. `bash out/redo.sh <prefix> --cleanup` deletes both Workers. Read the token from `./secrets/github-token`. Do not rely on files you edited under `./capa` with the old names. Test it once with the prefix `{{RUN}}-selftest`, then clean that up. Keep it short and readable.
5. Write `./out/receipt.json`: `{ "callerUrl": ..., "workers": [names you created], "response": <the JSON from step 3> }`.

Leave the Workers running. Do not delete anything. Another check reads them after you finish.
