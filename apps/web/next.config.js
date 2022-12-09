/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: '/',
				destination: '/2022',
				permanent: false,
			},
		];
	},
};

module.exports = nextConfig;
