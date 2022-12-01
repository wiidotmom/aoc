import input from './input';

import { lcm } from 'utils';

export const parseInput = () => input.split('\n');

export const findSolutionOne = (
	input: ReturnType<typeof parseInput>
): number => {
	const minimum = parseInt(input[0]);
	const busIds = input[1]
		.split(',')
		.filter(x => x !== 'x')
		.map(x => parseInt(x));

	let bus: number, minutes: number;
	busIds.forEach(id => {
		const waitTime = (Math.floor(minimum / id) + 1) * id - minimum;
		if (waitTime < minutes || !minutes) {
			minutes = waitTime;
			bus = id;
		}
	});
	return bus! * minutes!;
};

export const findSolutionTwo = (
	input: ReturnType<typeof parseInput>
): number => {
	const busIds = input[1].split(',').map(x => (x === 'x' ? 1 : parseInt(x)));

	let step = busIds[0],
		t = 0;
	busIds.forEach((id, i) => {
		if (id === step) return;

		while ((t + i) % id !== 0) {
			t += step;
		}

		step = lcm(step, id);
	});

	return t;
};
