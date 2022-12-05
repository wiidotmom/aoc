import input from './input';

import * as crypto from 'crypto';

export const parseInput = () => input;

export const findSolutionOne = (
	input: ReturnType<typeof parseInput>
): number => {
	let answer = -1,
		currentNum = 0;
	while (answer == -1) {
		let hash = crypto
			.createHash('md5')
			.update(`${input}${currentNum}`)
			.digest('hex');
		if (hash.startsWith('00000')) answer = currentNum;
		currentNum++;
	}
	return answer;
};

export const findSolutionTwo = (
	input: ReturnType<typeof parseInput>
): number => {
	let answer = -1,
		currentNum = 0;
	while (answer == -1) {
		let hash = crypto
			.createHash('md5')
			.update(`${input}${currentNum}`)
			.digest('hex');
		if (hash.startsWith('000000')) answer = currentNum;
		currentNum++;
	}
	return answer;
};

export { default as input } from './input';
