import { sum } from 'utils';
import input from './input';

export const parseInput = () => input.split('\n');

const getRecursiveFuel = (mass: number) => {
	let total = 0;

	while (mass > 0) {
		mass = Math.floor(mass / 3) - 2;
		if (mass > 0) total += mass;
	}

	return total;
};

export const findSolutionOne = (input: ReturnType<typeof parseInput>): number =>
	sum(...input.map(x => Math.floor(+x / 3) - 2));

export const findSolutionTwo = (input: ReturnType<typeof parseInput>): number =>
	sum(...input.map(x => getRecursiveFuel(+x)));

export { default as input } from './input';
