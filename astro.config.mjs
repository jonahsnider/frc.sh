import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import AstroPWA from '@vite-pwa/astro';
import { defineConfig } from 'astro/config';

export default defineConfig({
	integrations: [
		react(),
		AstroPWA({
			filename: 'sw.ts',
			injectManifest: {
				globIgnores: ['_redirects'],
				globPatterns: ['**/*'],
				injectionPoint: 'self.__SW_MANIFEST',
			},
			manifest: false,
			pwaAssets: {
				config: true,
			},
			registerType: 'autoUpdate',
			srcDir: 'src',
			strategies: 'injectManifest',
		}),
	],
	output: 'static',
	site: 'https://frc.sh',
	vite: {
		plugins: [tailwindcss()],
	},
});
