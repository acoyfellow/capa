export interface CapabilityRegistryEntry {
	name: string;
	spec: string;
	out: string;
	baseUrl: string;
	prefix: string;
	auth: "bearer" | "private-token" | "basic";
	contentType: "form" | "json";
	resourceBackends?: Array<{
		namespace: string;
		className: string;
		importPath: string;
	}>;
}

/**
 * Single source of truth for checked-in capabilities.
 *
 * - check-generated regenerates from it.
 * - spec-watch hashes the same upstream spec URLs weekly.
 * - add-capability can append a row before codegen runs.
 */
export const capabilityRegistry: CapabilityRegistryEntry[] = [
	{
		name: "stripe",
		spec: "https://raw.githubusercontent.com/stripe/openapi/master/openapi/spec3.sdk.json",
		out: "capabilities/stripe",
		baseUrl: "https://api.stripe.com",
		prefix: "/v1",
		auth: "bearer",
		contentType: "form",
		resourceBackends: [{
			namespace: "payment_intents",
			className: "DistilledPaymentIntents",
			importPath: "../distilled-payment-intents.ts",
		}],
	},
	{
		name: "gitlab",
		spec: "https://docs.gitlab.com/api/openapi/openapi_v2.yaml",
		out: "capabilities/gitlab",
		baseUrl: "https://gitlab.com",
		prefix: "/api/v4",
		auth: "private-token",
		contentType: "json",
	},
	{
		name: "jira",
		spec: "https://developer.atlassian.com/cloud/jira/platform/swagger-v3.v3.json",
		out: "capabilities/jira",
		baseUrl: "https://your-domain.atlassian.net",
		prefix: "/rest/api/3",
		auth: "basic",
		contentType: "json",
	},
	{
		name: "github",
		spec: "https://raw.githubusercontent.com/github/rest-api-description/main/descriptions/api.github.com/api.github.com.json",
		out: "capabilities/github",
		baseUrl: "https://api.github.com",
		prefix: "/",
		auth: "bearer",
		contentType: "json",
	},
	{
		name: "discord",
		spec: "https://raw.githubusercontent.com/discord/discord-api-spec/main/specs/openapi.json",
		out: "capabilities/discord",
		baseUrl: "https://discord.com",
		prefix: "/",
		auth: "bearer",
		contentType: "json",
	},
	{
		name: "slack",
		spec: "https://raw.githubusercontent.com/slackapi/slack-api-specs/master/web-api/slack_web_openapi_v2_without_examples.json",
		out: "capabilities/slack",
		baseUrl: "https://slack.com",
		prefix: "/",
		auth: "bearer",
		contentType: "form",
	},
	{
		name: "twilio",
		spec: "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json",
		out: "capabilities/twilio",
		baseUrl: "https://api.twilio.com",
		prefix: "/2010-04-01",
		auth: "basic",
		contentType: "form",
	},
	{
		name: "twilio-messaging",
		spec: "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_messaging_v1.json",
		out: "capabilities/twilio-messaging",
		baseUrl: "https://messaging.twilio.com",
		prefix: "/v1",
		auth: "basic",
		contentType: "form",
	},
	{
		name: "twilio-verify",
		spec: "https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_verify_v2.json",
		out: "capabilities/twilio-verify",
		baseUrl: "https://verify.twilio.com",
		prefix: "/v2",
		auth: "basic",
		contentType: "form",
	},
	{
		name: "box",
		spec: "https://raw.githubusercontent.com/box/box-openapi/main/openapi.json",
		out: "capabilities/box",
		baseUrl: "https://api.box.com",
		prefix: "/",
		auth: "bearer",
		contentType: "json",
	},
	{
		name: "sentry",
		spec: "https://raw.githubusercontent.com/getsentry/sentry-api-schema/main/openapi-derefed.json",
		out: "capabilities/sentry",
		baseUrl: "https://sentry.io",
		prefix: "/api/0",
		auth: "bearer",
		contentType: "json",
	},
	{
		name: "zoom",
		spec: "https://raw.githubusercontent.com/zoom/api/master/openapi.v2.json",
		out: "capabilities/zoom",
		baseUrl: "https://api.zoom.us",
		prefix: "/",
		auth: "bearer",
		contentType: "json",
	},
	{
		name: "kubernetes",
		spec: "https://raw.githubusercontent.com/kubernetes/kubernetes/master/api/openapi-spec/swagger.json",
		out: "capabilities/kubernetes",
		baseUrl: "https://kubernetes.default.svc",
		prefix: "/",
		auth: "bearer",
		contentType: "json",
	},
	{
		name: "twitch",
		spec: "https://raw.githubusercontent.com/DmitryScaletta/twitch-api-swagger/main/openapi.json",
		out: "capabilities/twitch",
		baseUrl: "https://api.twitch.tv/helix",
		prefix: "/",
		auth: "bearer",
		contentType: "json",
	},
];
