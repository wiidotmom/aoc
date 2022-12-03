import { sum } from 'utils';

import input from './input';

export const parseInput = () => input.split('\n');

const getPriority = (item: string) =>
	'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(item) + 1;

export const findSolutionOne = (input: ReturnType<typeof parseInput>) => {
	const shared: string[] = [];

	input
		.map(x => [
			x.substring(0, x.length / 2),
			x.substring(x.length / 2, x.length),
		])
		.forEach(rucksack => {
			shared.push([...rucksack[0]].find(x => rucksack[1].includes(x))!);
		});

	return sum(...shared.map(x => getPriority(x)));
};

export const findSolutionTwo = (input: ReturnType<typeof parseInput>) => {
	let shared: string[] = [];

	for (let i = 2; i < input.length; i += 3) {
		let rucksacks = [input[i], input[i - 1], input[i - 2]];

		shared.push(
			rucksacks[0]
				.split('')
				.find(x => rucksacks[1].includes(x) && rucksacks[2].includes(x))!
		);
	}

	return sum(...shared.map(x => getPriority(x)));
};
