import { sum } from 'utils';

import input from './input';

export const parseInput = () => input.split('\n');

export const findSolutionOne = (input: string[]): number => {
	const nums = input.map(x => parseInt(x.replace('+', '')));

	return sum(...nums);
};
