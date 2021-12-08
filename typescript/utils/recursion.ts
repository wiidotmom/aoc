export function getPermutationsOfArray<T>(input: T[]): T[][] {
	let result: T[][] = [];

	const getNextPermutation = (arr: T[], mutated: T[] = []) => {
		if (arr.length === 0) {
			result.push(mutated);
		} else {
			for (let i = 0; i < arr.length; i++) {
				let current = arr.slice();
				let next = current.splice(i, 1);
				getNextPermutation(current.slice(), [...mutated, ...next]);
			}
		}
	};

	getNextPermutation(input);

	return result;
}
