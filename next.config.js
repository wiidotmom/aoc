module.exports = {
	experimental: {
		styledComponents: true,
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/2021/01',
				permanent: false,
			},
		];
	},
};
