import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://rlw.pages.dev',
	integrations: [
		starlight({
			title: 'Linux Wiki',
			social: {
				github: 'https://github.com/rimsiw/rims-linux-wiki',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Start Page ', slug: 'guides/start' },
						{ label: 'Distro List', slug: 'guides/distro' },
						{ label: 'Internet Tools', slug: 'guides/internet' },
						{ label: 'Multimedia Tools', slug: 'guides/multimedia' },
						{ label: 'System Tools', slug: 'guides/system' },
						{ label: 'Ricing Tools', slug: 'guides/ricing' },
						{ label: 'Gaming Tools', slug: 'guides/gaming' },
						{ label: 'Development Tools', slug: 'guides/development' },
						{ label: 'Security Tools', slug: 'guides/security' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Beginners Guide',
					autogenerate: { directory: 'beginner_guide' },
				},
			],
		}),
	],
});
