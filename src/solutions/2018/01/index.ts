import { incrementMap, sum } from 'utils';

import input from './input';

export const parseInput = () => input.split('\n');

export const findSolutionOne = (
	input: ReturnType<typeof parseInput>
): number => {
	const nums = input.map(x => parseInt(x.replace('+', '')));

	return sum(...nums);
};

export const findSolutionTwo = (
	input: ReturnType<typeof parseInput>
): number => {
	const nums = input.map(x => parseInt(x.replace('+', '')));

	const frequencies = new Map<number, number>();

	let currentFreq = 0;
	while (frequencies.get(currentFreq) != 2) {
		nums.forEach(num => {
			if (frequencies.get(currentFreq) == 2) return;
			currentFreq += num;
			incrementMap(frequencies, currentFreq);
		});
	}
	return currentFreq;
};
