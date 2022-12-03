export interface Vec2d {
	x: number;
	y: number;
}

export function vec2d(x: number, y: number): Vec2d {
	return { x, y };
}

export function create2dArrayWithBounds<T>(
	boundY: number,
	boundX: number,
	defaultValue: T
): T[][] {
	/**
	 * Populate array of length boundY with arrays of length boundX that are filled with defaultValue
	 *      x
	 *   ┍━━━━━┑
	 * y │     │
	 *   ┕━━━━━┙
	 */
	return Array(boundY)
		.fill(null)
		.map(() => Array(boundX).fill(defaultValue));
}

export function createIntegerGridFromString(str: string): Grid<number> {
	const grid = new Grid<number>(0);

	let array = str.split('\n').map(x => x.split('').map(y => parseInt(y)));

	for (let y = 0; y < array.length; y++) {
		for (let x = 0; x < array[0].length; x++) {
			grid.set(x, y, array[y][x]);
		}
	}

	return grid;
}

/**
 * Used for 2D spatial data manipulation
 */
export class Grid<T> {
	defaultValue: T;
	grid: Map<string, T>;

	constructor(defaultValue: T) {
		this.defaultValue = defaultValue;
		this.grid = new Map();
	}

	public get points() {
		return [...this.grid.entries()]
			.map(([key, value]) => [...key.split(','), value])
			.map(([x, y, value]) => ({
				x: parseInt(x as string),
				y: parseInt(y as string),
				value,
			}));
	}

	public get bounds() {
		return {
			min: {
				x: Math.min(...this.points.map(({ x }) => x)),
				y: Math.min(...this.points.map(({ y }) => y)),
			},
			max: {
				x: Math.max(...this.points.map(({ x }) => x)),
				y: Math.max(...this.points.map(({ y }) => y)),
			},
		};
	}

	private pointToString(x: number, y: number) {
		return `${x},${y}`;
	}

	public get(x: number, y: number): T {
		return this.grid.has(this.pointToString(x, y))
			? (this.grid.get(this.pointToString(x, y)) as T)
			: this.defaultValue;
	}

	public set(x: number, y: number, value: T) {
		this.grid.set(this.pointToString(x, y), value);
	}

	public delete(x: number, y: number) {
		this.grid.delete(this.pointToString(x, y));
	}

	public getNeighbors(x: number, y: number, includeDiagonals: boolean = false) {
		const neighbors: Vec2d[] = [];

		(includeDiagonals
			? [
					vec2d(x - 1, y + 1),
					vec2d(x, y + 1),
					vec2d(x + 1, y + 1),
					vec2d(x - 1, y),
					vec2d(x + 1, y),
					vec2d(x - 1, y - 1),
					vec2d(x, y - 1),
					vec2d(x + 1, y - 1),
			  ]
			: [vec2d(x, y + 1), vec2d(x - 1, y), vec2d(x + 1, y), vec2d(x, y - 1)]
		).forEach(possibleNeighbor => {
			if (
				possibleNeighbor.x >= this.bounds.min.x &&
				possibleNeighbor.x <= this.bounds.max.x &&
				possibleNeighbor.y >= this.bounds.min.y &&
				possibleNeighbor.y <= this.bounds.max.y
			)
				neighbors.push(possibleNeighbor);
		});

		return neighbors;
	}

	public toArray() {
		const { min, max } = this.bounds;
		const array = create2dArrayWithBounds(
			max.y - min.y + 1,
			max.x - min.x + 1,
			this.defaultValue
		);

		/** Populate array with values from map */
		for (let y = min.y; y <= max.y; y++) {
			for (let x = min.x; x <= max.x; x++) {
				array[y - min.y][x - min.x] = this.get(x, y);
			}
		}

		return array;
	}

	public clone() {
		const clone = new Grid(this.defaultValue);
		clone.grid = new Map(this.grid);
		return clone;
	}
}

export function visualizeBooleanGrid(grid: Grid<boolean>) {
	return grid
		.toArray()
		.map(x => x.map(y => (y ? '█' : '░')))
		.map(x => x.join(''))
		.join('\n');
}
