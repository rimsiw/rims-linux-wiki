import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Linux Tools Wiki',
			social: {
				github: 'https://github.com/withastro/starlight',
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
						{ label: 'Security Tools', slug: 'guides/secuirty' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
