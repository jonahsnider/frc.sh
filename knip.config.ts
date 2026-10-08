import type { KnipConfig } from 'knip';

const config: KnipConfig = {
	entry: [
		// Built separately by the Astro PWA integration.
		'src/sw.ts',
	],
	project: ['src/**/*.{astro,ts,tsx,css}', 'scripts/**/*.mts', '*.{ts,mjs}'],
};

export default config;
