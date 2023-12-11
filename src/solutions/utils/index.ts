export * from './math';
export * from './object';
export * from './grid';
export * from './string';
export * from './recursion';
export * from './bst';

declare global {
	interface Array<T> {
		chunk(size: number): T[][];
		unique(): boolean;
	}
}

Array.prototype.chunk = function <T>(size: number): T[][] {
	return this.map((x, i) =>
		i % size == 0 ? [x, this[i + 1]] : undefined
	).filter(x => x != undefined) as Array<Array<T>>;
};

Array.prototype.unique = function <T>(): boolean {
	const set = new Set<T>();
	for (let i = 0; i < this.length; i++) {
		set.add(this[i]);
	}
	return set.size == this.length;
};
