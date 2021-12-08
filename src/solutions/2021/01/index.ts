import input from './input';

const findSolutionOne = (input: number[]): number => {
	let inc: number = 0;
	let previous: number;

	input.forEach(x => {
		if (x > previous) inc++;
		previous = x;
	});

	return inc;
};

const findSolutionTwo = (input: number[]): number => {
	let inc: number = 0;
	let window: number[] = input.slice(0, 2);
	let previousSum: number;

	input.slice(2).forEach(x => {
		if (window.length === 3) window = window.slice(1);

		window.push(x);

		const sum = window.reduce((a, b) => a + b);

		if (sum > previousSum) inc++;

		previousSum = sum;
	});

	return inc;
};

let data = input.split('\n').map(x => Number(x));
console.log(`Solution 1: ${findSolutionOne(data)}`);
console.log(`Solution 2: ${findSolutionTwo(data)}`);
