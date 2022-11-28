module.exports = {
	experimental: {
		styledComponents: true,
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/solutions/2021/01',
				permanent: false,
			},
		];
	},
};
