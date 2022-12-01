import input from './input';

export const parseInput = () => input.split('\n');

export const findSolutionOne = (
	input: ReturnType<typeof parseInput>
): number => {
	const nums = input.map(x => parseInt(x));

	let solution = 0;
	nums.forEach((entry, index) => {
		nums.forEach((subEntry, subIndex) => {
			if (entry + subEntry == 2020) solution = entry * subEntry;
		});
	});
	return solution;
};

export const findSolutionTwo = (
	input: ReturnType<typeof parseInput>
): number => {
	const nums = input.map(x => parseInt(x));

	let solution = 0;
	nums.forEach((entry, index) => {
		nums.forEach((subEntry, subIndex) => {
			nums.forEach((subSubEntry, subSubIndex) => {
				if (entry + subEntry + subSubEntry == 2020)
					solution = entry * subEntry * subSubEntry;
			});
		});
	});
	return solution;
};
