import { createIntegerGridFromString, Grid } from 'utils';

import input from './input';

export const parseInput = () => createIntegerGridFromString(input).toArray();

export const findSolutionOne = (input: ReturnType<typeof parseInput>) =>
	[
		...input[0],
		...input[input.length - 1],
		...input.slice(1, input.length - 1).map(x => x[0]),
		...input.slice(1, input.length - 1).map(x => x[x.length - 1]),
		...createIntegerGridFromString(
			input
				.filter((x, i) => i != 0 && i != input.length - 1)
				.map(x => x.slice(1, x.length - 1))
				.map(x => x.join(''))
				.join('\n')
		)
			.points.filter(
				point =>
					input[point.y + 1]
						.slice(0, point.x + 1)
						.every(x => x < point.value) ||
					input[point.y + 1]
						.slice(point.x + 2, input[point.y + 1].length)
						.every(x => x < point.value) ||
					input
						.map(x => x[point.x + 1])
						.slice(0, point.y + 1)
						.every(x => x < point.value) ||
					input
						.map(x => x[point.x + 1])
						.slice(point.y + 2, input.length)
						.every(x => x < point.value)
			)
			.map(x => +x.value),
	].length;

export const findSolutionTwo = (input: ReturnType<typeof parseInput>) => {
	const scores = new Grid<number>(-1);

	for (let y = 0; y < input.length; y++) {
		for (let x = 0; x < input.length; x++) {
			const getShorter = (arr: number[]) => {
				return arr.slice(
					0,
					arr.findIndex(i => i >= input[y][x]) != -1
						? arr.findIndex(i => i >= input[y][x]) + 1
						: arr.length
				);
			};

			let left = getShorter(input[y].slice(0, x).reverse()),
				right = getShorter(input[y].slice(x + 1, input[y].length)),
				up = getShorter(
					input
						.map(row => row[x])
						.slice(0, y)
						.reverse()
				),
				down = getShorter(input.map(row => row[x]).slice(y + 1, input.length));

			scores.set(x, y, left.length * right.length * up.length * down.length);
		}
	}

	return Math.max(...scores.points.map(x => +x.value));
};

export { default as input } from './input';
