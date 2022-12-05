import { sum } from 'utils';

import input from './input';

export const parseInput = () => input.split('\n');

const getPriority = (item: string) =>
	'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(item) + 1;

export const findSolutionOne = (input: ReturnType<typeof parseInput>) =>
	sum(
		...input
			.map(x => [
				x.substring(0, x.length / 2),
				x.substring(x.length / 2, x.length),
			])
			.map(rucksack => [...rucksack[0]].find(x => rucksack[1].includes(x))!)
			.map(x => getPriority(x))
	);

export const findSolutionTwo = (input: ReturnType<typeof parseInput>) =>
	sum(
		...input
			.map((x, i) =>
				(i + 1) % 3 === 0
					? x
							.split('')
							.find(y => input[i - 1].includes(y) && input[i - 2].includes(y))!
					: undefined
			)
			.filter(x => x !== undefined)
			.map(x => getPriority(x!))
	);

export { default as input } from './input';
