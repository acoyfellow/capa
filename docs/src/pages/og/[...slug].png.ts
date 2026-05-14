import type { GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { renderOgImage } from './_shared';

export const getStaticPaths: GetStaticPaths = async () => {
	const docs = await getCollection('docs');
	return docs.map((doc) => ({
		params: { slug: doc.id || 'index' },
		props: {
			title: doc.data.title,
			description: doc.data.description || 'Proof-carrying Cloudflare service bindings generated from OpenAPI.',
		},
	}));
};

export async function GET({ props }: { props: { title: string; description: string } }) {
	return renderOgImage(props.title, props.description);
}
