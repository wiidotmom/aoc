module.exports = {
	experimental: {
		styledComponents: true,
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/solutions/2023/01',
				permanent: false,
			},
		];
	},
};
