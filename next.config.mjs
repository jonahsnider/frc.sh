import serwist from '@serwist/next';

const withSerwist = serwist({
	swSrc: 'src/sw.ts',
	swDest: 'public/sw.js',
	disable: process.env.NODE_ENV === 'development',
	globPublicPatterns: ['**/*:!_redirects'],
});

/** @type {import('next').NextConfig} */
const nextConfig = withSerwist({
	output: 'export',
});

export default nextConfig;
