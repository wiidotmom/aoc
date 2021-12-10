import input from './input';

export const parseInput = () => input.split('\n');

type OpeningBlockChar = '(' | '[' | '{' | '<';
type ClosingBlockChar = ')' | ']' | '}' | '>';

const blockPairs = {
	'(': ')',
	'[': ']',
	'{': '}',
	'<': '>',
};

const errorPoints = {
	')': 3,
	']': 57,
	'}': 1197,
	'>': 25137,
};

const autocompletePoints = {
	')': 1,
	']': 2,
	'}': 3,
	'>': 4,
};

export const findSolutionOne = (input: string[]) => {
	let score = 0;

	input.forEach(line => {
		let expectedClosingChars: string[] = [];

		line.split('').forEach(char => {
			if ([...Object.keys(blockPairs)].includes(char)) {
				expectedClosingChars.push(blockPairs[char as OpeningBlockChar]);
			} else {
				const expectedClosingChar = expectedClosingChars.pop();
				if (char !== expectedClosingChar) {
					score += errorPoints[char as ClosingBlockChar] || 0;
				}
			}
		});
	});

	return score;
};

export const findSolutionTwo = (input: string[]) => {
	let lineScores: number[] = [];

	input.forEach(line => {
		let expectedClosingChars: string[] = [];

		let validLine = true;
		line.split('').forEach(char => {
			if ([...Object.keys(blockPairs)].includes(char)) {
				expectedClosingChars.push(blockPairs[char as OpeningBlockChar]);
			} else {
				const expectedClosingChar = expectedClosingChars.pop();
				if (char !== expectedClosingChar) {
					validLine = false;
				}
			}
		});
		if (validLine) {
			let lineScore = 0;
			while (expectedClosingChars.length > 0) {
				lineScore = lineScore * 5;
				lineScore +=
					autocompletePoints[expectedClosingChars.pop() as ClosingBlockChar];
			}
			lineScores.push(lineScore);
		}
	});

	return lineScores.sort((a, b) => a - b)[Math.floor(lineScores.length / 2)];
};
