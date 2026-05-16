import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
	output: 'static',
	site: 'https://capa.coey.dev',
	integrations: [
		starlight({
			title: 'capa',
			description: 'OpenAPI specs into deployable Cloudflare Worker service bindings',
			components: {
				Head: './src/components/Head.astro',
				Hero: './src/components/Hero.astro',
			},
			social: [
				{ icon: 'open-book', label: 'Catalog', href: '/catalog/' },
				{ icon: 'document', label: 'Tutorial', href: '/tutorial/' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/acoyfellow/capa' },
			],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{ label: 'Home', slug: '' },
				{ label: 'Catalog', slug: 'catalog' },
				{ label: 'Tutorial', slug: 'tutorial' },
				{ label: 'How It Works', slug: 'how-it-works' },
				{ label: 'Reference', slug: 'reference' },
			],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
