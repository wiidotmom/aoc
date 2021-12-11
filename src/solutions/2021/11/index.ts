import input from './input';

import { createIntegerGridFromString, Grid } from 'utils';

const getAdjacentPoints = (array: number[][], [x, y]: number[]) => {
	return [
		[-1, 0],
		[-1, -1],
		[-1, 1],
		[1, 0],
		[1, -1],
		[1, 1],
		[0, -1],
		[0, 1],
	]
		.map(([addX, addY]) => [x + addX, y + addY])
		.filter(
			([x, y]) => x >= 0 && y >= 0 && y < array.length && x < array[0].length
		);
};

const step = (total: number, grid: Grid<number>): [number, Grid<number>] => {
	const { min, max } = grid.bounds;
	const next = grid.clone();
	const alreadyFlashed = new Set<string>();

	for (let y = min.y; y <= max.y; y++) {
		for (let x = min.x; x <= max.x; x++) {
			next.set(x, y, next.get(x, y) + 1);
		}
	}

	let cont: boolean;
	do {
		cont = false;

		for (let y = min.y; y <= max.y; y++) {
			for (let x = min.x; x <= max.x; x++) {
				if (next.get(x, y) > 9) {
					alreadyFlashed.add(`${x},${y}`);
					next.set(x, y, 0);
					getAdjacentPoints(next.toArray(), [x, y]).forEach(([ax, ay]) => {
						if (!alreadyFlashed.has(`${ax},${ay}`))
							next.set(ax, ay, next.get(ax, ay) + 1);
					});
					cont = true;
				}
			}
		}
	} while (cont);

	return [total + alreadyFlashed.size, next.clone()];
};

export const parseInput = () => input;

export const findSolutionOne = (input: string): number => {
	let grid = createIntegerGridFromString(input);

	let flashTotal = 0;
	Array.from(Array(100)).forEach(() => {
		const [newTotal, newGrid] = step(flashTotal, grid);
		flashTotal = newTotal;
		grid = newGrid.clone();
	});

	return flashTotal;
};

export const findSolutionTwo = (input: string): number => {
	let grid = createIntegerGridFromString(input);

	let sync = false;
	let stepNum = 0;
	while (!sync) {
		const [newTotal, newGrid] = step(0, grid);
		grid = newGrid;

		sync = newGrid.toArray().every(y => {
			return y.every(x => x === 0);
		});

		stepNum++;
	}

	return stepNum;
};
