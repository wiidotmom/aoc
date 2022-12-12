import { Grid, Vec2d, vec2d } from 'utils';

import input from './input';

export const parseInput = () => input.split('\n').map(x => x.split(''));

const getHeight = (letter: string) =>
	letter == 'S'
		? 0
		: letter == 'E'
		? 25
		: 'abcdefghijklmnopqrstuvwxyz'.indexOf(letter);

export const findSolutionOne = (input: ReturnType<typeof parseInput>) => {
	const start = vec2d(
			input.find(x => x.indexOf('S') != -1)!.indexOf('S'),
			input.findIndex(x => x.indexOf('S') != -1)
		),
		end = vec2d(
			input.find(x => x.indexOf('E') != -1)!.indexOf('E'),
			input.findIndex(x => x.indexOf('E') != -1)
		);

	const grid = new Grid(-1);
	input.forEach((row, y) => {
		row.forEach((column, x) => {
			grid.set(x, y, getHeight(column));
		});
	});

	const queue: [Vec2d, number][] = [[start, 0]];
	const visited = new Set<string>();

	while (queue.length > 0) {
		const [pos, dist] = queue.shift()!;

		if (visited.has(Grid.pointToString(pos.x, pos.y))) continue;
		visited.add(Grid.pointToString(pos.x, pos.y));

		if (pos.x == end.x && pos.y == end.y) return dist;

		const height = grid.get(pos.x, pos.y);
		[
			[0, 1],
			[0, -1],
			[1, 0],
			[-1, 0],
		]
			.map(x => vec2d(pos.x + x[0], pos.y + x[1]))
			.filter(x => grid.get(x.x, x.y) != -1)
			.forEach(neighbor => {
				if (grid.get(neighbor.x, neighbor.y) - height <= 1)
					queue.push([neighbor, dist + 1]);
			});
	}
};

export const findSolutionTwo = (input: ReturnType<typeof parseInput>) => {
	const starts: Vec2d[] = [];
	input.forEach((row, y) => {
		row.forEach((column, x) => {
			if (column == 'a') starts.push(vec2d(x, y));
		});
	});
	const end = vec2d(
		input.find(x => x.indexOf('E') != -1)!.indexOf('E'),
		input.findIndex(x => x.indexOf('E') != -1)
	);

	const grid = new Grid(-1);
	input.forEach((row, y) => {
		row.forEach((column, x) => {
			grid.set(x, y, getHeight(column));
		});
	});

	const distances: number[] = [];
	starts.forEach(start => {
		const queue: [Vec2d, number][] = [[start, 0]];
		const visited = new Set<string>();

		while (queue.length > 0) {
			const [pos, dist] = queue.shift()!;

			if (visited.has(Grid.pointToString(pos.x, pos.y))) continue;
			visited.add(Grid.pointToString(pos.x, pos.y));

			if (pos.x == end.x && pos.y == end.y) return distances.push(dist);

			const height = grid.get(pos.x, pos.y);
			[
				[0, 1],
				[0, -1],
				[1, 0],
				[-1, 0],
			]
				.map(x => vec2d(pos.x + x[0], pos.y + x[1]))
				.filter(x => grid.get(x.x, x.y) != -1)
				.forEach(neighbor => {
					if (grid.get(neighbor.x, neighbor.y) - height <= 1)
						queue.push([neighbor, dist + 1]);
				});
		}
	});
	return Math.min(...distances);
};

export { default as input } from './input';
