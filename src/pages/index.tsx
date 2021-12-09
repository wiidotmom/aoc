import { useContext } from 'react';

import type { NextPage } from 'next';

import { DayContext } from 'components/Layout';

const Home: NextPage = () => {
	const { year, day } = useContext(DayContext);

	return (
		<>
			{year} {day}
		</>
	);
};

export default Home;
