import { createStringGridFromString, Vec2d, vec2d } from 'utils';

import input from './input';

export const parseInput = () => input;

enum Direction {
	UP = '0,1',
	DOWN = '0,-1',
	LEFT = '-1,0',
	RIGHT = '1,0',
	UP_RIGHT = '1,1',
	UP_LEFT = '-1,1',
	DOWN_RIGHT = '1,-1',
	DOWN_LEFT = '-1,-1',
}

const vec2dFromDirection = (direction: Direction) => {
	const [x, y] = direction.split(',').map(x => +x);
	return vec2d(x, y);
};

export const findSolutionOne = (input: ReturnType<typeof parseInput>) => {
	const xmas = 'XMAS';

	const grid = createStringGridFromString(input, '.');

	let xmasCount = 0;
	grid.points.forEach(point => {
		if (point.value == xmas[0]) {
			for (const direction of Object.values(Direction)) {
				const diff = vec2dFromDirection(direction);
				let isXmas = true;
				for (let i = 1; i < xmas.length; i++) {
					if (grid.get(point.x + diff.x * i, point.y + diff.y * i) != xmas[i])
						isXmas = false;
				}
				if (isXmas) xmasCount++;
			}
		}
	});
	return xmasCount;
};

export const findSolutionTwo = (input: ReturnType<typeof parseInput>) => {
	const grid = createStringGridFromString(input, '.');

	let xmasCount = 0;
	grid.points.forEach(point => {
		if (point.value == 'A') {
			const topLeft = grid.getFromPoint(
				vec2d(
					point.x + vec2dFromDirection(Direction.UP_LEFT).x,
					point.y + vec2dFromDirection(Direction.UP_LEFT).y
				)
			);
			const topRight = grid.getFromPoint(
				vec2d(
					point.x + vec2dFromDirection(Direction.UP_RIGHT).x,
					point.y + vec2dFromDirection(Direction.UP_RIGHT).y
				)
			);
			const bottomLeft = grid.getFromPoint(
				vec2d(
					point.x + vec2dFromDirection(Direction.DOWN_LEFT).x,
					point.y + vec2dFromDirection(Direction.DOWN_LEFT).y
				)
			);
			const bottomRight = grid.getFromPoint(
				vec2d(
					point.x + vec2dFromDirection(Direction.DOWN_RIGHT).x,
					point.y + vec2dFromDirection(Direction.DOWN_RIGHT).y
				)
			);

			const isXmas =
				((topLeft == 'M' && bottomRight == 'S') ||
					(topLeft == 'S' && bottomRight == 'M')) &&
				((bottomLeft == 'M' && topRight == 'S') ||
					(bottomLeft == 'S' && topRight == 'M'));

			if (isXmas) xmasCount++;
		}
	});
	return xmasCount;
};

export { input };
