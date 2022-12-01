import input from './input';

import { sum } from 'utils';

export const parseInput = () => input.split('\n\n');

export const findSolutionOne = (
	input: ReturnType<typeof parseInput>
): number => {
	let max = 0;
	input.forEach(inventory => {
		const food = inventory.split('\n');
		const total = sum(...food.map(x => parseInt(x)));
		if (total > max) max = total;
	});
	return max;
};

export const findSolutionTwo = (
	input: ReturnType<typeof parseInput>
): number => {
	let maxOne = 0,
		maxTwo = 0,
		maxThree = 0;
	input.forEach(inventory => {
		const food = inventory.split('\n');
		const total = sum(...food.map(x => parseInt(x)));
		if (total > maxOne) {
			maxThree = maxTwo;
			maxTwo = maxOne;
			maxOne = total;
		} else if (total > maxTwo) {
			maxThree = maxTwo;
			maxTwo = total;
		} else if (total > maxThree) {
			maxThree = total;
		}
	});
	return sum(maxOne, maxTwo, maxThree);
};
