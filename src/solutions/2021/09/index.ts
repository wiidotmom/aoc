import { createIntegerGridFromString, Grid } from 'utils';

import input from './input';

const getBasin = (grid: Grid<number>, pair: number[]) => {
	const array = grid.toArray();
	const [x, y] = pair;

	let basin: number[][] = [];

	const getWalls = (pair: number[]) => {
		let walls: number[][] = [];
		[
			[x - 1, y],
			[x + 1, y],
			[x, y - 1],
			[x, y + 1],
		].forEach(pair => {
			if (
				pair[0] >= 0 &&
				pair[0] < array[0].length &&
				pair[1] >= 0 &&
				pair[1] < array.length
			)
				walls.push(pair);
		});
		walls = walls.filter(
			([wx, wy]) => grid.get(wx, wy) < 9 && grid.get(wx, wy) > grid.get(x, y)
		);
		basin.push(...walls);
		console.log(walls);
		walls.forEach(wall => getWalls(wall));
	};

	getWalls(pair);

	return basin;
};

export const parseInput = () => input;

export const findSolutionOne = (input: string): number => {
	const grid = createIntegerGridFromString(input);

	const array = grid.toArray();

	let total: number = 0;

	for (let y = 0; y < array.length; y++) {
		for (let x = 0; x < array[0].length; x++) {
			const center = grid.get(x, y);

			let toCheck: number[] = [];

			[
				[x - 1, y],
				[x + 1, y],
				[x, y - 1],
				[x, y + 1],
			].forEach(pair => {
				if (
					pair[0] >= 0 &&
					pair[0] < array[0].length &&
					pair[1] >= 0 &&
					pair[1] < array.length
				)
					toCheck.push(grid.get(pair[0], pair[1]));
			});

			if (toCheck.every(x => x > center)) total += center + 1;
		}
	}

	return total;
};

export const findSolutionTwo = (input: string): number => {
	const grid = createIntegerGridFromString(input);

	const array = grid.toArray();

	let lowPoints: number[][] = [];

	for (let y = 0; y < array.length; y++) {
		for (let x = 0; x < array[0].length; x++) {
			const center = grid.get(x, y);

			let toCheck: number[][] = [];

			[
				[x - 1, y],
				[x + 1, y],
				[x, y - 1],
				[x, y + 1],
			].forEach(pair => {
				if (
					pair[0] >= 0 &&
					pair[0] < array[0].length &&
					pair[1] >= 0 &&
					pair[1] < array.length
				)
					toCheck.push([pair[0], pair[1]]);
			});

			if (toCheck.every(pair => grid.get(pair[0], pair[1]) > center))
				lowPoints.push([x, y]);
		}
	}

	const basins = lowPoints.map(pair => getBasin(grid, pair));

	return basins
		.map(basin => basin.length)
		.sort((a, b) => a - b)
		.slice(-3)
		.reduce((a, b) => a * b);
};

console.log(`Solution 1: ${findSolutionOne(parseInput())}`);
console.log(`Solution 2: ${findSolutionTwo(parseInput())}`);
