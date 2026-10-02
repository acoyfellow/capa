import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
	output: 'static',
	site: 'https://capa.coey.dev',
	integrations: [
		starlight({
			title: 'capa',
			logo: { src: './src/assets/capa.svg', alt: 'capa', replacesTitle: true },
			description: 'OpenAPI specs into deployable Cloudflare Worker service bindings',
			components: {
				Head: './src/components/Head.astro',
				Hero: './src/components/Hero.astro',
			},
			social: [
				{ icon: 'document', label: 'Tutorial', href: '/tutorial/' },
				{ icon: 'open-book', label: 'Catalog', href: '/catalog/' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/acoyfellow/capa' },
			],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{ label: 'Home', slug: '' },
				{ label: 'Tutorial', slug: 'tutorial' },
				{ label: 'Use from an agent', slug: 'agents' },
				{ label: 'Demo script', slug: 'demo' },
				{ label: 'Catalog', slug: 'catalog' },
				{ label: 'How it works', slug: 'how-it-works' },
				{ label: 'Runtime auth', slug: 'runtime-auth' },
				{ label: 'Reference', slug: 'reference' },
			],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
