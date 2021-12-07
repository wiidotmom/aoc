import fs from 'fs';
import path from 'path';

import { lcm } from 'utils';

const INPUT_FILE = fs
	.readFileSync(path.join(__dirname, 'input.txt'))
	.toString();

const findSolutionOne = (input: string[]): number => {
	const minimum = parseInt(input[0]);
	const busIds = input[1]
		.split(',')
		.filter(x => x !== 'x')
		.map(x => parseInt(x));

	let bus: number, minutes: number;
	busIds.forEach(id => {
		const waitTime = (Math.floor(minimum / id) + 1) * id - minimum;
		if (waitTime < minutes || !minutes) {
			minutes = waitTime;
			bus = id;
		}
	});
	return bus! * minutes!;
};

const findSolutionTwo = (input: string[]): number => {
	const busIds = input[1].split(',').map(x => (x === 'x' ? 1 : parseInt(x)));

	let step = busIds[0],
		t = 0;
	busIds.forEach((id, i) => {
		if (id === step) return;

		while ((t + i) % id !== 0) {
			t += step;
		}

		step = lcm(step, id);
	});

	return t;
};

const data = INPUT_FILE.split('\n');
console.log(`Solution 1: ${findSolutionOne(data)}`);
console.log(`Solution 2: ${findSolutionTwo(data)}`);
