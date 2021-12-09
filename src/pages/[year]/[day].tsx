import type { NextPage } from 'next';

import { useRouter } from 'next/router';

const Day: NextPage = () => {
	const router = useRouter();

	const { year, day } = router.query;

	return (
		<h1>
			{year}/{day}
		</h1>
	);
};

export default Day;
