import { HtmlcsstoimageCapability as GeneratedHtmlcsstoimageCapability } from "./generated/capability.gen.ts";
import { overrides } from "./overrides.ts";

export class HtmlcsstoimageCapability extends GeneratedHtmlcsstoimageCapability {
	constructor(ctx: ExecutionContext, env: Env) {
		super(ctx, env);
		this.overrides = overrides;
	}
}

interface Env {
	HTMLCSSTOIMAGE_USER_ID?: string;
	HTMLCSSTOIMAGE_API_KEY: string;
}

export default {
	fetch(): Response {
		return new Response("capa-htmlcsstoimage is JSRPC-only. Bind via service binding.", {
			status: 404,
			headers: { "content-type": "text/plain" },
		});
	},
} satisfies ExportedHandler<Env>;
