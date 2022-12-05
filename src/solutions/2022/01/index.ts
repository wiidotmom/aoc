import input from './input';

import { sum } from 'utils';

export const parseInput = () => input.split('\n\n');

export const findSolutionOne = (
	input: ReturnType<typeof parseInput>
): number => {
	const inventories = input.map(inventory =>
		sum(...inventory.split('\n').map(x => parseInt(x)))
	);
	inventories.sort((a, b) => b - a);
	return inventories[0];
};

export const findSolutionTwo = (
	input: ReturnType<typeof parseInput>
): number => {
	const inventories = input.map(inventory =>
		sum(...inventory.split('\n').map(x => parseInt(x)))
	);
	inventories.sort((a, b) => b - a);
	return sum(inventories[0], inventories[1], inventories[2]);
};

export { default as input } from './input';
