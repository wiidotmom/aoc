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
	const mas = 'MAS';

	const grid = createStringGridFromString(input, '.');

	let xmasCount = 0;
	let centers = new Set<Vec2d>();
	grid.points.forEach(point => {
		if (point.value == mas[0]) {
			for (const direction of [Direction.DOWN_RIGHT, Direction.UP_RIGHT]) {
				if (
					direction == Direction.DOWN_RIGHT &&
					centers.has(vec2d(point.x + 1, point.y - 1))
				)
					continue;
				if (
					direction == Direction.UP_RIGHT &&
					centers.has(vec2d(point.x + 1, point.y + 1))
				)
					continue;
				let diff = vec2dFromDirection(direction);
				let isXmas = true;
				for (let i = 1; i < mas.length; i++) {
					if (grid.get(point.x + diff.x * i, point.y + diff.y * i) != mas[i])
						isXmas = false;
				}
				let other = vec2d(0, 0);
				if (direction == Direction.DOWN_RIGHT) {
					for (const otherDirection of [
						Direction.DOWN_LEFT,
						Direction.UP_RIGHT,
					]) {
						diff = vec2dFromDirection(otherDirection);
						if (otherDirection == Direction.DOWN_LEFT) {
							other = vec2d(point.x + 2, point.y);
						} else {
							other = vec2d(point.x, point.y - 2);
						}
					}
				} else {
					for (const otherDirection of [
						Direction.UP_LEFT,
						Direction.DOWN_RIGHT,
					]) {
						diff = vec2dFromDirection(otherDirection);
						if (otherDirection == Direction.UP_LEFT) {
							other = vec2d(point.x + 2, point.y);
						} else {
							other = vec2d(point.x, point.y + 2);
						}
					}
				}
				for (let i = 1; i < mas.length; i++) {
					if (grid.get(other.x + diff.x * i, point.y + diff.y * i) != mas[i])
						isXmas = false;
				}

				if (isXmas) {
					xmasCount++;
					if (direction == Direction.DOWN_RIGHT) {
						centers.add(vec2d(point.x + 1, point.y - 1));
					} else {
						centers.add(vec2d(point.x + 1, point.y + 1));
					}
				}
			}
		}
	});
	return xmasCount;
};

console.log(findSolutionTwo(parseInput()));
