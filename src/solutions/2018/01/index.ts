import { sum } from 'utils';

import input from './input';

export const parseInput = () => input.split('\n');

export const findSolutionOne = (input: string[]): number => {
	const nums = input.map(x => parseInt(x.replace('+', '')));

	return sum(...nums);
};

export const findSolutionTwo = (input: string[]): number => {
	const nums = input.map(x => parseInt(x.replace('+', '')));

	const frequencies = new Map<number, number>();

	let currentFreq = 0;
	while (frequencies.get(currentFreq) != 2) {
		nums.forEach(num => {
			if (frequencies.get(currentFreq) == 2) return;
			currentFreq += num;
			if (!frequencies.has(currentFreq)) frequencies.set(currentFreq, 0);
			frequencies.set(currentFreq, frequencies.get(currentFreq)! + 1);
		});
	}
	return currentFreq;
};
