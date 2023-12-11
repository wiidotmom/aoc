export * from './math';
export * from './object';
export * from './grid';
export * from './string';
export * from './recursion';
export * from './bst';

declare global {
	interface Array<T> {
		chunk(size: number): T[][];
	}
}

if (!Array.prototype.chunk) {
	Array.prototype.chunk = function <T>(size: number): T[][] {
		return this.map((x, i) =>
			i % size == 0 ? [x, this[i + 1]] : undefined
		).filter(x => x != undefined) as Array<Array<T>>;
	};
}
