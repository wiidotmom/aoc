import input from './input';

export const parseInput = () => input.split('\n\n');

const findMapping = (mapSet: number[][], num: number[]): number[][] => {
	for (const map of mapSet) {
		const [destStart, srcStart, length] = map;
		const [start, l] = num;

		if (start >= srcStart && start < srcStart + length) {
			let toReturn = [
				[destStart + (start - srcStart), srcStart + length - start],
			];
			if (start + l > srcStart + length) {
				toReturn.push([srcStart + length, start + l - (srcStart + length)]);
			}
			return toReturn;
		} else if (srcStart > start && srcStart < start + l) {
			let toReturn = [[destStart, start + l - srcStart]];
			if (start < srcStart) {
				toReturn.push([start, srcStart - start]);
			}
			if (start + l > srcStart + length) {
				toReturn.push([srcStart + length, start + l - (srcStart + length)]);
			}
			return toReturn;
		}
	}
	return [num];
};

const generateMapping = (line: number[]) => {
	const destStart = line[0];
	const srcStart = line[1];
	const length = line[2];

	let dest: number[] = [];
	let src: number[] = [];

	return [destStart, srcStart, length];
};

export const findSolutionOne = (input: ReturnType<typeof parseInput>) => {
	const seeds = input[0]
		.replace('seeds: ', '')
		.split(' ')
		.map(x => [+x, 1]);

	const mapSets = input
		.slice(1)
		.map(x =>
			x
				.split('\n')
				.slice(1)
				.map(y => y.split(' ').map(z => +z))
		)
		.map(x => x.map(generateMapping));

	const locations = seeds.map(x => {
		let mapping: number[][] = [];
		for (const mapSet of mapSets) {
			mapping = mapping.map(y => findMapping(mapSet, y)).flat();
		}
		return mapping;
	});

	return Math.min(
		...locations
			.flat()
			.map(x => x[0])
			.filter(x => x != 0)
	);
};

export const findSolutionTwo = (input: ReturnType<typeof parseInput>) => {
	let seedsInput = input[0]
		.replace('seeds: ', '')
		.split(' ')
		.map(x => +x);

	const seeds = seedsInput
		.map((seed, i) => {
			if (i % 2 != 0) return -1;
			return [seed, seedsInput[i + 1]];
		})
		.filter(x => x != -1) as number[][];

	const mapSets = input
		.slice(1)
		.map(x =>
			x
				.split('\n')
				.slice(1)
				.map(y => y.split(' ').map(z => +z))
		)
		.map(x => x.map(generateMapping));

	const locations = seeds.map(x => {
		let mapping: number[][] = [x];
		for (const mapSet of mapSets) {
			mapping = mapping.map(y => findMapping(mapSet, y)).flat();
		}
		return mapping;
	});

	return Math.min(
		...locations
			.flat()
			.map(x => x[0])
			.filter(x => x != 0)
	);
};

console.log(findSolutionTwo(parseInput()));
