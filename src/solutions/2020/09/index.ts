import input from './input';

export const parseInput = () => input.split('\n');

export const findSolutionOne = (
	input: ReturnType<typeof parseInput>
): number => {
	const numbers = input.map(x => Number(x));

	let found = false;
	let firstNum: number = 0;
	numbers.slice(25, numbers.length - 1).forEach((num, index) => {
		const before = numbers.slice(index, index + 25);
		let solutions: Array<number>[] = [];
		before.forEach(x => {
			before.forEach(y => {
				if (x + y == num) solutions.push([x, y]);
			});
		});
		if (found == false && solutions.length < 1) {
			found = true;
			firstNum = num;
		}
	});
	return firstNum;
};

export const findSolutionTwo = (
	input: ReturnType<typeof parseInput>
): number => {
	const numbers = input.map(x => Number(x));
	const firstNum = findSolutionOne(input);

	let secondNum: number = 0;
	numbers.forEach((num, index) => {
		numbers.slice(index + 1, numbers.length - 1).forEach((subNum, subIndex) => {
			let nums: number[] = numbers.slice(index + 1, index + 2 + subIndex);
			if (nums.reduce((a, b) => a + b) == firstNum) {
				if (secondNum == 0) secondNum = Math.max(...nums) + Math.min(...nums);
			}
		});
	});
	return secondNum;
};

export { default as input } from './input';
