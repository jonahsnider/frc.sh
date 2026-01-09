import serwist from '@serwist/next';
import { withPlausibleProxy } from 'next-plausible';

const withSerwist = serwist({
	swSrc: 'src/sw.ts',
	swDest: 'public/sw.js',
	disable: process.env.NODE_ENV === 'development',
});

/** @type {import('next').NextConfig} */
const nextConfig = withSerwist(
	withPlausibleProxy()({
		redirects: async () => [
			{ permanent: false, source: '/ctr', destination: 'https://docs.ctr-electronics.com/' },
			{ permanent: false, source: '/ctre', destination: 'https://docs.ctr-electronics.com/' },
			{ permanent: false, source: '/phoenix', destination: 'https://api.ctr-electronics.com/phoenix6/release/java/' },
			{ permanent: false, source: '/rev', destination: 'https://docs.revrobotics.com/brushless' },

			{ permanent: false, source: '/pathplanner', destination: 'https://pathplanner.dev/home.html' },
			{ permanent: false, source: '/choreo', destination: 'https://choreo.autos' },

			{ permanent: false, source: '/limelight', destination: 'https://docs.limelightvision.io/' },
			{ permanent: false, source: '/photonvision', destination: 'https://docs.photonvision.org/en/latest/' },

			{ permanent: false, source: '/wpilib', destination: 'https://docs.wpilib.org/en/stable/' },

			{
				permanent: false,
				source: '/advantagekit',
				destination: 'https://docs.advantagekit.org/',
			},
			{ permanent: false, source: '/doglog', destination: 'https://doglog.dev/' },

			{
				permanent: false,
				source: '/manual',
				destination: `https://firstfrc.blob.core.windows.net/frc${new Date().getFullYear()}/Manual/${new Date().getFullYear()}GameManual.pdf`,
			},
		],
	}),
);

export default nextConfig;
