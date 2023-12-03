import { createStringGridFromString, isNumber } from 'utils';

import input from './input';

export const parseInput = () => input;

export const findSolutionOne = (input: ReturnType<typeof parseInput>) => {
	const grid = createStringGridFromString(input, '.');

	let sum = 0;
	const points = grid.points;
	points.forEach(({ x, y, value }) => {
		if (isNumber(grid.get(x - 1, y))) return;
		if (isNumber(value)) {
			let hasSymbolNeighbors = false;
			let num = '';
			while (isNumber(grid.get(x, y))) {
				num += grid.get(x, y);
				const neighbors = grid.getNeighbors(x, y, true);
				if (
					neighbors.some(
						neighbor =>
							!isNumber(grid.get(neighbor.x, neighbor.y)) &&
							grid.get(neighbor.x, neighbor.y) != '.'
					)
				) {
					hasSymbolNeighbors = true;
				}
				x++;
			}
			if (hasSymbolNeighbors) sum += +num;
		}
	});
	return sum;
};

export const findSolutionTwo = (input: ReturnType<typeof parseInput>) => {
	const grid = createStringGridFromString(input, '.');

	let sum = 0;
	const points = grid.points;
	points.forEach(({ x, y }) => {
		if (grid.get(x, y) == '*') {
			let neighbors = grid
				.getNeighbors(x, y, true)
				.filter(neighbor => isNumber(grid.get(neighbor.x, neighbor.y)));
			neighbors = neighbors.filter(
				neighbor =>
					!neighbors.find(n => n.x == neighbor.x - 1 && n.y == neighbor.y)
			);
			let nums: string[] = [];
			neighbors.forEach(neighbor => {
				let num = '';
				while (isNumber(grid.get(neighbor.x - 1, neighbor.y))) {
					neighbor.x--;
				}
				while (isNumber(grid.get(neighbor.x, neighbor.y))) {
					num += grid.get(neighbor.x, neighbor.y);
					neighbor.x++;
				}
				nums.push(num);
			});
			if (nums.length == 2) {
				sum += +nums[0] * +nums[1];
			}
		}
	});
	return sum;
};

export { input };
