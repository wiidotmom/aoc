import { lcmMany } from 'utils';

import input from './input';

class Monkey {
	items: number[];
	operation: (old: number) => number;
	divisible: number;
	trueMonkey: number;
	falseMonkey: number;

	inspections: number = 0;

	constructor(
		items: number[],
		operation: (old: number) => number,
		divisible: number,
		trueMonkey: number,
		falseMonkey: number
	) {
		this.items = items;
		this.operation = operation;
		this.divisible = divisible;
		this.trueMonkey = trueMonkey;
		this.falseMonkey = falseMonkey;
	}

	public runTurn(input: ReturnType<typeof parseInput>, relief = true) {
		const newItems = [...this.items],
			lcm = lcmMany(...input.map(x => x.divisible));
		this.items.forEach(item => {
			const afterInspection = relief
				? Math.floor((this.operation(item) % lcm) / 3)
				: this.operation(item) % lcm;
			newItems.shift();
			this.inspections++;
			if (afterInspection % this.divisible == 0)
				input[this.trueMonkey].sendItem(afterInspection);
			else input[this.falseMonkey].sendItem(afterInspection);
		});
		this.items = newItems;
	}

	public sendItem(item: number) {
		this.items.push(item);
	}
}

export const parseInput = () =>
	input.split('\n\n').map(
		x =>
			new Monkey(
				x
					.split('\n')[1]
					.replace('  Starting items: ', '')
					.split(', ')
					.map(y => +y),
				(() => {
					const op = x.split('\n')[2].replace('  Operation: new = old ', '');

					if (op.startsWith('*')) {
						if (op.split(' ')[1] == 'old') return (old: number) => old * old;
						else return (old: number) => old * +op.split(' ')[1];
					} else {
						if (op.split(' ')[1] == 'old') return (old: number) => old + old;
						else return (old: number) => old + +op.split(' ')[1];
					}
				})(),
				+x.split('\n')[3].replace('  Test: divisible by ', ''),
				+x.split('\n')[4].replace('    If true: throw to monkey ', ''),
				+x.split('\n')[5].replace('    If false: throw to monkey ', '')
			)
	);

export const findSolutionOne = (input: ReturnType<typeof parseInput>) => {
	for (let i = 0; i < 20; i++) {
		input.forEach(monkey => monkey.runTurn(input));
	}

	const top = input.map(x => x.inspections).sort((a, b) => b - a);

	return top[0] * top[1];
};

export const findSolutionTwo = (input: ReturnType<typeof parseInput>) => {
	for (let i = 0; i < 10000; i++) {
		input.forEach(monkey => monkey.runTurn(input, false));
	}

	const top = input.map(x => x.inspections).sort((a, b) => b - a);

	return top[0] * top[1];
};

export { default as input } from './input';
