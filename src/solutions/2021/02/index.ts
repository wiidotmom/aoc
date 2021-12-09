import input from './input';

export const parseInput = () => input.split('\n');

export const findSolutionOne = (input: string[]): number => {
	let pos: number = 0;
	let depth: number = 0;

	const instructions = {
		forward: (num: number) => (pos += num),
		down: (num: number) => (depth += num),
		up: (num: number) => (depth -= num),
	};

	input.forEach(instruction => {
		const instr = instruction.split(' ')[0] as 'forward' | 'down' | 'up';
		const num = Number(instruction.split(' ')[1]);

		instructions[instr](num);
	});

	return pos * depth;
};

export const findSolutionTwo = (input: string[]): number => {
	let aim: number = 0;
	let pos: number = 0;
	let depth: number = 0;

	const instructions = {
		forward: (num: number) => {
			pos += num;
			depth += aim * num;
		},
		down: (num: number) => (aim += num),
		up: (num: number) => (aim -= num),
	};

	input.forEach(instruction => {
		const instr = instruction.split(' ')[0] as 'forward' | 'down' | 'up';
		const num = Number(instruction.split(' ')[1]);

		instructions[instr](num);
	});

	return pos * depth;
};
