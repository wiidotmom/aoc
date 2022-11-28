module.exports = {
	experimental: {
		styledComponents: true,
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/solutions/2022/01',
				permanent: false,
			},
		];
	},
};
