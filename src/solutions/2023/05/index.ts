import 'utils';

import input from './input';

type Map = [dest: number, src: number, length: number];
type Range = [start: number, end: number];

export const parseInput = () => input.split('\n\n');

const findMapping = (ranges: Range[], mapSet: Map[]) => {
	return ranges
		.map(([start, end]) => {
			let overlaps = mapSet.filter(
				([, src, length]) => start <= src + length - 1 && end >= src
			);
			if (overlaps.length == 0) return [[start, end]] as Range[];
			return overlaps.flatMap(([dest, src, length]) => {
				const destDiff = dest - src;
				const toReturn = [
					[
						Math.max(start, src) + destDiff,
						Math.min(src + length - 1, end) + destDiff,
					],
				];
				if (src > start) toReturn.push([start, src - 1]);
				if (end > src + length - 1) toReturn.push([src + length, end]);
				return toReturn;
			}) as Range[];
		})
		.flat(1)
		.sort(([a], [b]) => a - b);
};

export const findSolutionOne = (input: ReturnType<typeof parseInput>) => {
	const seeds = input[0]
		.replace('seeds: ', '')
		.split(' ')
		.map(x => +x)
		.chunk(1)
		.map(x => [x[0], 1])
		.map(([start, length]) => [start, start + length - 1]) as Range[];

	const mapSets = input.slice(1).map(x =>
		x
			.split('\n')
			.slice(1)
			.map(y => y.split(' ').map(z => +z))
	) as Map[][];

	return Math.min(
		...mapSets
			.reduce((ranges, mapSet) => findMapping(ranges, mapSet), seeds)
			.map(x => x[0])
			.flat()
			.filter(x => x !== 0)
	);
};

/**
 * Fuck me
 */
export const findSolutionTwo = (input: ReturnType<typeof parseInput>) => {
	const seeds = input[0]
		.replace('seeds: ', '')
		.split(' ')
		.map(x => +x)
		.chunk(2)
		.map(([start, length]) => [start, start + length - 1]) as Range[];

	const mapSets = input.slice(1).map(x =>
		x
			.split('\n')
			.slice(1)
			.map(y => y.split(' ').map(z => +z))
	) as Map[][];

	const reversedMapSets = mapSets
		.map(x => x.map(([dest, src, length]) => [src, dest, length]))
		.reverse();

	const [maxSrc, , maxLength] =
		reversedMapSets[0][reversedMapSets[0].length - 1]!;
	const maxSeed = maxSrc + maxLength;
	for (let seed = 0; seed <= maxSeed; seed++) {
		let n = seed;
		for (const mapSet of reversedMapSets) {
			for (const map of mapSet) {
				const [dest, src, length] = map;
				if (src <= n && n < src + length - 1) {
					n += dest - src;
					break;
				}
			}
		}
		for (const [start, end] of seeds) {
			if (start <= n && n <= end) {
				return seed;
			}
		}
	}
};

export { input };
