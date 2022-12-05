import { createIntegerGridFromString, Grid } from 'utils';

import input from './input';

const getAdjacentPoints = (array: number[][], [x, y]: number[]) => {
	return [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
	]
		.map(([addX, addY]) => [x + addX, y + addY])
		.filter(
			([x, y]) => x >= 0 && y >= 0 && y < array.length && x < array[0].length
		);
};

const getLowPoints = (array: number[][]) => {
	let lowPoints: number[][] = [];

	for (let y = 0; y < array.length; y++) {
		for (let x = 0; x < array[0].length; x++) {
			if (
				getAdjacentPoints(array, [x, y]).every(
					([ax, ay]) => array[ay][ax] > array[y][x]
				)
			)
				lowPoints.push([x, y]);
		}
	}

	return lowPoints;
};

const getBasin = (array: number[][], originalPoint: number[]) => {
	/**
	 * Sets can only contain unique values \
	 * Storing in strings as arrays would be considered unique \
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
	 */
	const basin = new Set<string>();

	const getWalls = (pair: number[]) => {
		basin.add(`${pair[0]},${pair[1]}`);
		getAdjacentPoints(array, pair)
			.filter(
				([x, y]) => array[y][x] < 9 && array[y][x] > array[pair[1]][pair[0]]
			)
			.forEach(getWalls);
	};
	getWalls(originalPoint);

	return basin;
};

export const parseInput = () => input;

export const findSolutionOne = (
	input: ReturnType<typeof parseInput>
): number => {
	const grid = createIntegerGridFromString(input);

	return [...getLowPoints(grid.toArray())]
		.map(([x, y]) => grid.get(x, y) + 1)
		.reduce((a, b) => a + b);
};

export const findSolutionTwo = (
	input: ReturnType<typeof parseInput>
): number => {
	const grid = createIntegerGridFromString(input);
	const array = grid.toArray();

	const lowPoints = [...getLowPoints(array)];

	const basins = lowPoints.map(pair => getBasin(array, pair));

	return basins
		.map(basin => basin.size)
		.sort((a, b) => a - b)
		.slice(-3)
		.reduce((a, b) => a * b);
};

export { default as input } from './input';
