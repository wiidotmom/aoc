import fs from 'fs';
import path from 'path';

const INPUT_FILE = fs
	.readFileSync(path.join(__dirname, 'input.txt'))
	.toString();

const findSolutionOne = (input: number[]): number => {
	const min = Math.min(...input),
		max = Math.max(...input);

	let cheapest: number;
	Array.from(Array(max - min)).forEach((x, i) => {
		const cost = input.map(y => Math.abs(i + min - y)).reduce((a, b) => a + b);
		if (cost < cheapest || !cheapest) cheapest = cost;
	});

	return cheapest!;
};

const findSolutionTwo = (input: number[]): number => {
	const min = Math.min(...input),
		max = Math.max(...input);

	const tri = (n: number) => (n * (n + 1)) / 2;

	let cheapest: number;
	Array.from(Array(max - min)).forEach((x, i) => {
		const cost = input
			.map(y => tri(Math.abs(i + min - y)))
			.reduce((a, b) => a + b);
		if (cost < cheapest || !cheapest) cheapest = cost;
	});

	return cheapest!;
};

const data = INPUT_FILE.split(',').map(x => parseInt(x));
console.log(`Solution 1: ${findSolutionOne(data)}`);
console.log(`Solution 2: ${findSolutionTwo(data)}`);
