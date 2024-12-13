import {
	createStringGridFromString,
	Grid,
	vec2d,
	visualizeStringGrid,
} from 'utils';
import input from './input';

export const parseInput = () => createStringGridFromString(input, '.');

enum Direction {
	UP = '0,-1',
	DOWN = '0,1',
	LEFT = '-1,0',
	RIGHT = '1,0',
}

const vec2dFromDirection = (direction: Direction) => {
	const [x, y] = direction.split(',').map(x => +x);
	return vec2d(x, y);
};

export const findSolutionOne = (input: ReturnType<typeof parseInput>) => {
	const startingPos = input.points.find(x => x.value == '^')!;
	let pos = vec2d(startingPos.x, startingPos.y);
	let direction = Direction.UP;
	while (input.isInBounds(pos.x, pos.y)) {
		input.set(pos.x, pos.y, 'X');
		const diff = vec2dFromDirection(direction);
		const nextPos = vec2d(pos.x + diff.x, pos.y + diff.y);
		if (input.getFromPoint(nextPos) == '#') {
			direction =
				direction == Direction.UP
					? Direction.RIGHT
					: direction == Direction.RIGHT
					? Direction.DOWN
					: direction == Direction.DOWN
					? Direction.LEFT
					: Direction.UP;
		} else {
			pos.x = nextPos.x;
			pos.y = nextPos.y;
		}
	}
	return input.points.filter(x => x.value == 'X').length;
};

export const findSolutionTwo = (input: ReturnType<typeof parseInput>) => {
	const startingPos = input.points.find(x => x.value == '^')!;
	function traverse(grid: Grid<string>) {
		let pos = vec2d(startingPos.x, startingPos.y);
		let direction = Direction.UP;
		let hasLoop = false;
		const visited = new Set<string>();
		while (grid.isInBounds(pos.x, pos.y)) {
			if (visited.has(`${direction}_${pos.x}_${pos.y}`)) {
				hasLoop = true;
				break;
			}
			visited.add(`${direction}_${pos.x}_${pos.y}`);
			grid.set(pos.x, pos.y, 'X');
			const diff = vec2dFromDirection(direction);
			const nextPos = vec2d(pos.x + diff.x, pos.y + diff.y);
			if (grid.getFromPoint(nextPos) == '#') {
				direction =
					direction == Direction.UP
						? Direction.RIGHT
						: direction == Direction.RIGHT
						? Direction.DOWN
						: direction == Direction.DOWN
						? Direction.LEFT
						: Direction.UP;
			} else {
				pos.x = nextPos.x;
				pos.y = nextPos.y;
			}
		}
		return hasLoop;
	}
	const grid = input.clone();
	const start = Date.now();
	traverse(grid);
	const end = Date.now();
	const visited = grid.points.filter(x => x.value == 'X');
	let sum = 0;
	// console.log(
	// 	`hey girl, you're about to run traverse() ${
	// 		visited.length
	// 	} times, which will take ~${((end - start) / 1000) * visited.length}s`
	// );
	visited.forEach(point => {
		if (point.x != startingPos.x && point.y != startingPos.y) {
			console.log(point);
			const grid = input.clone();
			grid.set(point.x, point.y, '#');
			if (traverse(grid)) sum++;
		}
	});
	return sum;
};

console.log(findSolutionTwo(parseInput()));
