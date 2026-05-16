// Capability catalog data layer.
//
// Source of truth: each capability ships a `capa.manifest.json` at
// `capabilities/<name>/capa.manifest.json`. We read those at build time
// (Astro/Vite runs Node here, so fs is fine) and merge with a small
// display-only metadata table for things that aren't in the manifest yet
// (bundle size, tagline, status, deploy URL).
//
// To surface a new capability:
//   1. Drop a `capa.manifest.json` into `capabilities/<name>/`.
//   2. (Optional) Add a display entry below for tagline / bundle size /
//      status. Without one, the catalog falls back to sensible defaults.
//
// This keeps the catalog page (and landing page) automatically in sync
// with whatever is in the monorepo.

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
// docs/src/data -> repo root
const REPO_ROOT = join(__dirname, '..', '..', '..');
const CAPS_DIR = join(REPO_ROOT, 'capabilities');

export type CapabilityAuth = 'bearer' | 'private-token' | 'basic' | string;
export type CapabilityContentType = 'form' | 'json' | string;
export type CapabilityStatus = 'stable' | 'beta' | 'planned';

export interface CapabilityManifest {
	name: string;
	entrypoint: string;
	source: {
		spec: string;
		title: string;
		version: string;
	};
	upstream: {
		baseUrl: string;
		prefix: string;
	};
	auth: CapabilityAuth;
	contentType: CapabilityContentType;
	operations: number;
	namespaces: number;
	publicHttpRoute: boolean;
	evidenceContract: string;
}

export interface CapabilityDisplay {
	/** Short, marketing-y tagline shown on the card. */
	tagline?: string;
	/** Gzipped Worker bundle size, e.g. "38 KiB". Hand-measured today. */
	bundleGz?: string;
	/** Maturity hint. Defaults to "stable" for shipped capabilities. */
	status?: CapabilityStatus;
	/** Required secret(s) the operator must set with `wrangler secret put`. */
	requiredSecrets?: string[];
	/** Optional secrets (e.g. CF Access, base URL overrides). */
	optionalSecrets?: string[];
	/** Override the auto-generated Deploy URL. */
	deployUrl?: string;
}

const DISPLAY: Record<string, CapabilityDisplay> = {
	box: {
		tagline: 'Files, folders, collaboration, and metadata from the Box Platform API.',
		requiredSecrets: ['BOX_API_KEY'],
	},
	discord: {
		tagline: 'Applications, guilds, channels, messages, and webhooks from Discord HTTP API v10.',
		requiredSecrets: ['DISCORD_API_KEY'],
	},
	github: {
		tagline: 'Repos, issues, pull requests, Actions, releases, and org workflows.',
		requiredSecrets: ['GITHUB_API_KEY'],
	},
	gitlab: {
		tagline: 'Projects, MRs, pipelines — across the entire GitLab API.',
		bundleGz: '54 KiB',
		status: 'stable',
		requiredSecrets: ['GITLAB_API_KEY'],
		optionalSecrets: ['GITLAB_BASE_URL_OVERRIDE', 'CF_ACCESS_CLIENT_ID', 'CF_ACCESS_CLIENT_SECRET'],
	},
	jira: {
		tagline: 'Issues, boards, sprints — JSRPC over Jira Cloud REST v3.',
		bundleGz: '48 KiB',
		status: 'stable',
		requiredSecrets: ['JIRA_API_KEY'],
		optionalSecrets: ['JIRA_BASE_URL_OVERRIDE'],
	},
	kubernetes: {
		tagline: 'Core Kubernetes resources and cluster APIs exposed through one generated binding.',
		requiredSecrets: ['KUBERNETES_API_KEY'],
	},
	sentry: {
		tagline: 'Organizations, projects, issues, events, releases, and alerts from Sentry.',
		requiredSecrets: ['SENTRY_API_KEY'],
	},
	slack: {
		tagline: 'Channels, chat, users, files, admin endpoints, and Slack Web API workflows.',
		requiredSecrets: ['SLACK_API_KEY'],
	},
	stripe: {
		tagline: 'Charges, customers, and subscriptions without hand-writing a Stripe wrapper.',
		bundleGz: '38 KiB',
		status: 'stable',
		requiredSecrets: ['STRIPE_API_KEY'],
	},
	twitch: {
		tagline: 'Twitch Helix channels, streams, clips, chat, moderation, and creator workflows.',
		requiredSecrets: ['TWITCH_API_KEY', 'TWITCH_CLIENT_ID'],
	},
	twilio: {
		tagline: 'Accounts, phone numbers, calls, messages, recordings, and Twilio REST resources.',
		requiredSecrets: ['TWILIO_API_KEY'],
	},
	'twilio-messaging': {
		tagline: 'Messaging Services, senders, compliance registrations, and delivery controls.',
		requiredSecrets: ['TWILIO_MESSAGING_API_KEY'],
	},
	'twilio-verify': {
		tagline: 'Verification services, factors, templates, rate limits, and fraud-safe flows.',
		requiredSecrets: ['TWILIO_VERIFY_API_KEY'],
	},
	zoom: {
		tagline: 'Meetings, webinars, recordings, users, reports, and Zoom account operations.',
		requiredSecrets: ['ZOOM_API_KEY'],
	},
};

/** Capabilities that are planned but not yet shipped. Surfaces the roadmap on the catalog. */
const PLANNED: Array<{ name: string; tagline: string; auth?: CapabilityAuth }> = [
	// Drop entries here as they get scoped. Empty by default — the catalog
	// gracefully handles the no-roadmap case.
];

export interface CapabilityEntry extends CapabilityManifest, CapabilityDisplay {
	/** github.com URL to the capability directory. */
	repoUrl: string;
	/** "Deploy to Cloudflare Workers" one-click URL. */
	deployUrl: string;
	/** Human-readable auth label, e.g. "Bearer". */
	authLabel: string;
	/** Human-readable body label, e.g. "Form" or "JSON". */
	contentTypeLabel: string;
}

export interface PlannedEntry {
	name: string;
	tagline: string;
	auth?: CapabilityAuth;
	status: 'planned';
}

const REPO = 'acoyfellow/capa';

function authLabel(auth: CapabilityAuth): string {
	switch (auth) {
		case 'bearer': return 'Bearer';
		case 'private-token': return 'Private-Token';
		case 'basic': return 'Basic';
		default: return String(auth);
	}
}

function ctLabel(ct: CapabilityContentType): string {
	switch (ct) {
		case 'form': return 'Form';
		case 'json': return 'JSON';
		default: return String(ct);
	}
}

function readManifest(name: string): CapabilityManifest | null {
	const file = join(CAPS_DIR, name, 'capa.manifest.json');
	if (!existsSync(file)) return null;
	try {
		const raw = readFileSync(file, 'utf8');
		const parsed = JSON.parse(raw) as CapabilityManifest;
		return parsed;
	} catch {
		return null;
	}
}

function listCapabilityDirs(): string[] {
	if (!existsSync(CAPS_DIR)) return [];
	return readdirSync(CAPS_DIR)
		.filter((name) => {
			const full = join(CAPS_DIR, name);
			try {
				return statSync(full).isDirectory();
			} catch {
				return false;
			}
		})
		.sort();
}

export function getCapabilities(): CapabilityEntry[] {
	const entries: CapabilityEntry[] = [];
	for (const dir of listCapabilityDirs()) {
		const manifest = readManifest(dir);
		if (!manifest) continue;
		const display = DISPLAY[manifest.name] ?? {};
		const repoUrl = `https://github.com/${REPO}/tree/main/capabilities/${manifest.name}`;
		const deployUrl = display.deployUrl ?? `https://deploy.workers.cloudflare.com/?url=${repoUrl}`;
		entries.push({
			...manifest,
			...display,
			repoUrl,
			deployUrl,
			authLabel: authLabel(manifest.auth),
			contentTypeLabel: ctLabel(manifest.contentType),
			status: display.status ?? 'stable',
		});
	}
	// Sort by operation count desc so the most surface-area capability leads.
	return entries.sort((a, b) => b.operations - a.operations);
}

export function getPlanned(): PlannedEntry[] {
	return PLANNED.map((p) => ({ ...p, status: 'planned' as const }));
}

export interface CatalogStats {
	capabilityCount: number;
	totalOperations: number;
	totalNamespaces: number;
}

export function getCatalogStats(): CatalogStats {
	const caps = getCapabilities();
	return {
		capabilityCount: caps.length,
		totalOperations: caps.reduce((acc, c) => acc + c.operations, 0),
		totalNamespaces: caps.reduce((acc, c) => acc + c.namespaces, 0),
	};
}

export function formatNumber(n: number): string {
	return n.toLocaleString('en-US');
}
