import { NextApiRequest, NextApiResponse } from 'next';

function map(x: any) {
	return [x[0] != null, x[1] != null, x[2], x[3]];
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const years = (await import('solutions')).default;

	Object.keys(years).forEach((year: string) => {
		years[+year] = years[+year].map(map);
	});

	return res.json(years);
}
