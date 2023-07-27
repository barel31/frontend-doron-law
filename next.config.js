/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
				port: '',
				pathname: '/images/**',
			},
		],
	},
	// experimental: { serverActions: true },
};

module.exports = nextConfig;
