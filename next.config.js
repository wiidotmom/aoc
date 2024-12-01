module.exports = {
	experimental: {
		styledComponents: true,
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/solutions/2024/01',
				permanent: false,
			},
		];
	},
};
