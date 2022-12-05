import input from './input';

class Vector2D {
	private _x: number;
	private _y: number;

	constructor(x: number, y: number) {
		this._x = x;
		this._y = y;
	}

	get x(): number {
		return this._x;
	}

	set x(newX: number) {
		this._x = newX;
	}

	get y(): number {
		return this._y;
	}

	set y(newY: number) {
		this._y = newY;
	}
}

const getTreesFromSlope = (
	input: string[],
	X_SLOPE: number,
	Y_SLOPE: number
): number => {
	let pos = new Vector2D(0, 0);
	let trees = 0;

	while (pos.y < input.length) {
		if (input[pos.y][pos.x] == '#') trees++;

		pos.x = (pos.x + X_SLOPE) % input[0].length;
		pos.y = pos.y + Y_SLOPE;
	}

	return trees;
};

export const parseInput = () => input.split('\n');

export const findSolutionOne = (input: ReturnType<typeof parseInput>): number =>
	getTreesFromSlope(input, 3, 1);

export const findSolutionTwo = (input: ReturnType<typeof parseInput>): number =>
	getTreesFromSlope(input, 1, 1) *
	getTreesFromSlope(input, 3, 1) *
	getTreesFromSlope(input, 5, 1) *
	getTreesFromSlope(input, 7, 1) *
	getTreesFromSlope(input, 1, 2);

export { default as input } from './input';
