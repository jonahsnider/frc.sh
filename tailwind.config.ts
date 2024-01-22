import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				ctre: '#95ca3e',
				rev: '#f05a28',
				advantagekit: '#fec20a',
				pathplanner: '#3f55ce',
				wpilib: '#013974',
				limelight: '#65bf0f',
				photonvision: '#016392',

				first: {
					red: '#ED1C24',
					blue: '#0066B3',
					white: '#fff',
					'sky-blue': '#009cd7',
				},
			},
			fontFamily: {
				mono: ['var(--font-fira-mono)'],
			},
		},
	},
	plugins: [],
};

// biome-ignore lint/style/noDefaultExport: This must be a default export
export default config;
