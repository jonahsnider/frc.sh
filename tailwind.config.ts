import { radixThemePreset } from 'radix-themes-tw';
import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	presets: [radixThemePreset],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				ctre: '#95ca3e',
				rev: '#f05a28',
				doglog: '#591616',
				advantagekit: '#fec20a',
				pathplanner: '#3f55ce',
				choreo: '#803cff',
				wpilib: '#013974',
				limelight: '#65bf0f',
				photonvision: '#016392',

				first: {
					red: '#ED1C24',
					blue: '#0066B3',
					white: '#fff',
					'sky-blue': '#009cd7',
				},

				java: '#b07219',
				cpp: '#f34b7d',
				python: '#3572A5',
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
