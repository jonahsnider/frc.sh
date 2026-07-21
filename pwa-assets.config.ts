import { defineConfig } from '@vite-pwa/assets-generator/config';

export default defineConfig({
	preset: {
		transparent: {
			sizes: [64, 192, 512],
			padding: 0,
		},
		maskable: {
			sizes: [512],
			padding: 0.1,
			resizeOptions: {
				background: '#121212',
			},
		},
		apple: {
			sizes: [],
		},
	},
	images: ['public/logo.svg'],
});
