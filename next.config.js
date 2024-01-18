const { withPlausibleProxy } = require('next-plausible');

/** @type {import('next').NextConfig} */
const nextConfig = withPlausibleProxy()({
	output: 'export',
});

module.exports = nextConfig;
