import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { AstroPWAIntegration } from '@vite-pwa/astro';
import { defineConfig } from 'astro/config';

export default defineConfig({
	integrations: [
		react(),
		AstroPWAIntegration({
			buildSW: {
				globIgnores: ['_redirects'],
				globPatterns: ['**/*'],
				injectionPoint: 'self.__SW_MANIFEST',
				swSrc: 'src/sw.ts',
			},
			manifest: false,
			pwaAssets: {
				config: 'pwa-assets.config.ts',
			},
			registerType: 'autoUpdate',
			strategies: 'buildSW',
		}),
	],
	output: 'static',
	site: 'https://frc.sh',
	vite: {
		plugins: [tailwindcss()],
	},
});
