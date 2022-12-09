import { Grid, vec2d, visualizeBooleanGrid } from 'utils';

import input from './input';

export const parseInput = () =>
	input.split('\n').map(x => ({
		instruction: x.split(' ')[0],
		value: +x.split(' ')[1],
	})) as {
		instruction: 'L' | 'R' | 'U' | 'D';
		value: number;
	}[];

const simulateRope = (input: ReturnType<typeof parseInput>, knots: number) => {
	const visited = new Grid(false);
	visited.set(0, 0, true);

	let rope = Array(knots)
		.fill(-1)
		.map(x => vec2d(0, 0));

	input.forEach(step => {
		for (let j = 0; j < step.value; j++) {
			if (step.instruction == 'L') rope[0].x--;
			else if (step.instruction == 'R') rope[0].x++;
			else if (step.instruction == 'U') rope[0].y++;
			else if (step.instruction == 'D') rope[0].y--;

			for (let i = 1; i < rope.length; i++) {
				while (
					Math.abs(rope[i - 1].x - rope[i].x) >= 2 ||
					Math.abs(rope[i - 1].y - rope[i].y) >= 2
				) {
					if (Math.abs(rope[i].x - rope[i - 1].x) > 0) {
						if (rope[i - 1].x > rope[i].x) rope[i].x++;
						else rope[i].x--;
					}
					if (Math.abs(rope[i].y - rope[i - 1].y) > 0) {
						if (rope[i - 1].y > rope[i].y) rope[i].y++;
						else rope[i].y--;
					}
				}
			}
			visited.set(rope[rope.length - 1].x, rope[rope.length - 1].y, true);
		}
	});

	return visited.points.length;
};

export const findSolutionOne = (input: ReturnType<typeof parseInput>) =>
	simulateRope(input, 2);

export const findSolutionTwo = (input: ReturnType<typeof parseInput>) =>
	simulateRope(input, 10);

export { default as input } from './input';
