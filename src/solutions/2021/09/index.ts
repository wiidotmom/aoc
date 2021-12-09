import { createIntegerGridFromString, Grid } from 'utils';

import input from './input';

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
	const originalGrid = createIntegerGridFromString(input);

	const flowGrid = new Grid<number[][]>([]);

	const originalArray = originalGrid.toArray();
	for (let y = 0; y < originalArray.length; y++) {
		for (let x = 0; x < originalArray[0].length; x++) {
			const center = originalGrid.get(x, y);

			let toCheck: number[][] = [];

			[
				[x - 1, y],
				[x + 1, y],
				[x, y - 1],
				[x, y + 1],
			].forEach(pair => {
				if (
					pair[0] >= 0 &&
					pair[0] < originalArray[0].length &&
					pair[1] >= 0 &&
					pair[1] < originalArray.length
				)
					toCheck.push([pair[0], pair[1]]);
			});
		}
	}

	return 0;
};
