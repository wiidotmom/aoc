import { sum, Grid, visualizeBooleanGrid } from 'utils';

import input from './input';

export const parseInput = () => input.split('\n');

export const findSolutionOne = (input: ReturnType<typeof parseInput>) => {
	let X = 1,
		cycle = 0;
	const signals: number[] = [];

	const checkCycle = () => {
		if (cycle == 20 || (cycle - 20) % 40 == 0) signals.push(cycle * X);
	};

	input.forEach(line => {
		if (line == 'noop') {
			cycle++;
			checkCycle();
		}
		if (line.startsWith('addx')) {
			cycle++;
			checkCycle();
			cycle++;
			checkCycle();
			X += +line.replace('addx ', '');
		}
	});

	return sum(...signals);
};

export const findSolutionTwo = (input: ReturnType<typeof parseInput>) => {
	let X = 1,
		cycle = 0;

	const screen = new Grid(false);

	const checkCycle = () => {
		const pixels = [X - 1, X, X + 1];

		const drawX = cycle % 40 != 0 ? cycle % 40 : 40;
		const drawY = Math.ceil(cycle / 40);

		if (pixels.includes(drawX)) screen.set(drawX, drawY, true);
	};

	input.forEach(line => {
		if (line == 'noop') {
			cycle++;
			checkCycle();
		}
		if (line.startsWith('addx')) {
			cycle++;
			checkCycle();
			cycle++;
			X += +line.replace('addx ', '');
			checkCycle();
		}
	});

	//temp fix
	const left = screen.bounds.min.x;
	for (let i = 1; i <= 6; i++) {
		screen.set(left - 1, i, true);
	}

	return visualizeBooleanGrid(screen);
};

export { default as input } from './input';
