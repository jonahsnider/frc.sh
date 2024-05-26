const { withPlausibleProxy } = require('next-plausible');
const serwist = require('@serwist/next');
const withSerwist = serwist.default({
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
			{ permanent: false, source: '/choreo', destination: 'https://sleipnirgroup.github.io/Choreo/' },
			{ permanent: false, source: '/limelight', destination: 'https://docs.limelightvision.io/' },
			{ permanent: false, source: '/photonvision', destination: 'https://docs.photonvision.org/en/latest/' },
			{ permanent: false, source: '/wpilib', destination: 'https://docs.wpilib.org/en/stable/' },
		],
	}),
);

module.exports = nextConfig;
