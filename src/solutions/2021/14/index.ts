import { incrementMap } from 'utils';

import input from './input';

export const parseInput = () => ({
	template: input.split('\n')[0],
	rules: input
		.split('\n\n')[1]
		.split('\n')
		.map(x => ({
			pair: x.split(' -> ')[0],
			insert: x.split(' -> ')[1],
		})),
});

const run = (
	template: string,
	rules: { pair: string; insert: string }[],
	rounds: number
): number => {
	let currentMap = new Map<string, number>();
	for (let i = 0; i < template.length - 1; i++) {
		let elements = template.slice(i, i + 2);
		incrementMap(currentMap, elements);
	}

	for (let i = 0; i < rounds; i++) {
		const newMap = new Map<string, number>();

		[...currentMap.keys()].forEach(key => {
			const pairOne = `${key[0]}${rules.find(x => x.pair === key)!.insert}`,
				pairTwo = `${rules.find(x => x.pair === key)!.insert}${key[1]}`;
			incrementMap(newMap, pairOne, currentMap.get(key));
			incrementMap(newMap, pairTwo, currentMap.get(key));
		});

		currentMap = new Map(newMap);
	}

	const counts = new Map<string, number>();
	[...currentMap.keys()].forEach(key => {
		incrementMap(counts, key[0], currentMap.get(key)! / 2);
		incrementMap(counts, key[1], currentMap.get(key)! / 2);
	});

	return Math.max(...counts.values()) - Math.min(...counts.values()) + 0.5;
};

export const findSolutionOne = (input: ReturnType<typeof parseInput>) => {
	return run(input.template, input.rules, 10);
};

export const findSolutionTwo = (input: ReturnType<typeof parseInput>) => {
	return run(input.template, input.rules, 40);
};

export { default as input } from './input';
