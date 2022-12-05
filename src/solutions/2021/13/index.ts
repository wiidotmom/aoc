import { Grid, Vec2d, visualizeBooleanGrid } from 'utils';

import input from './input';

export const parseInput = () => ({
	dots: input
		.split('\n\n')[0]
		.split('\n')
		.map(x => ({ x: +x.split(',')[0], y: +x.split(',')[1] } as Vec2d)),
	instructions: input
		.split('\n\n')[1]
		.split('\n')
		.map(x => ({
			axis: x.replace('fold along ', '').split('=')[0] as 'x' | 'y',
			value: +x.replace('fold along ', '').split('=')[1],
		})),
});

const runInstruction = (
	grid: Grid<boolean>,
	instruction: {
		axis: 'x' | 'y';
		value: number;
	}
): Grid<boolean> => {
	const { axis, value } = instruction;
	grid.points.forEach(point => {
		if (axis === 'x') {
			if (point.x > value) {
				grid.delete(point.x, point.y);
				grid.set((point.x -= (point.x - value) * 2), point.y, true);
			} else if (point.x === value) {
				grid.delete(point.x, point.y);
			}
		} else if (axis === 'y' && point.y > value) {
			if (point.y > value) {
				grid.delete(point.x, point.y);
				grid.set(point.x, (point.y -= (point.y - value) * 2), true);
			} else if (point.y === value) {
				grid.delete(point.x, point.y);
			}
		}
	});

	return grid.clone();
};

export const findSolutionOne = (
	input: ReturnType<typeof parseInput>
): number => {
	let grid = new Grid(false);

	input.dots.forEach(dot => grid.set(dot.x, dot.y, true));

	grid = runInstruction(grid, input.instructions[0]);

	return grid.points.length;
};

export const findSolutionTwo = (
	input: ReturnType<typeof parseInput>
): string => {
	let grid = new Grid(false);

	input.dots.forEach(dot => grid.set(dot.x, dot.y, true));
	input.instructions.forEach(instruction => {
		grid = runInstruction(grid, instruction);
	});

	return visualizeBooleanGrid(grid);
};

export { default as input } from './input';
