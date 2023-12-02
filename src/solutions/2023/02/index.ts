import { sum } from 'utils';

import input from './input';

export const parseInput = () => input.split('\n');

export const findSolutionOne = (input: ReturnType<typeof parseInput>) => {
	const redExp = /\d+ red/g;
	const blueExp = /\d+ blue/g;
	const greenExp = /\d+ green/g;
	let idSum = 0;
	input.forEach((game, id) => {
		game = game.replace(/Game \d+: /g, '');
		const sets = game.split(';');
		let valid = true;
		sets.forEach(set => {
			const red = set.includes('red')
				? sum(...set.match(redExp)!.map(x => +x.replace(' red', '')))
				: 0;
			const blue = set.includes('blue')
				? sum(...set.match(blueExp)!.map(x => +x.replace(' blue', '')))
				: 0;
			const green = set.includes('green')
				? sum(...set.match(greenExp)!.map(x => +x.replace(' green', '')))
				: 0;
			if (!(red <= 12 && green <= 13 && blue <= 14)) valid = false;
		});
		if (valid) idSum += id + 1;
	});
	return idSum;
};

export const findSolutionTwo = (input: ReturnType<typeof parseInput>) => {
	const redExp = /\d+ red/g;
	const blueExp = /\d+ blue/g;
	const greenExp = /\d+ green/g;
	let powerSum = 0;
	input.forEach((game, id) => {
		game = game.replace(/Game \d+: /g, '');
		const sets = game.split(';');
		let minRed = 0;
		let minBlue = 0;
		let minGreen = 0;
		sets.forEach(set => {
			const red = set.includes('red')
				? sum(...set.match(redExp)!.map(x => +x.replace(' red', '')))
				: 0;
			const blue = set.includes('blue')
				? sum(...set.match(blueExp)!.map(x => +x.replace(' blue', '')))
				: 0;
			const green = set.includes('green')
				? sum(...set.match(greenExp)!.map(x => +x.replace(' green', '')))
				: 0;
			if (red > minRed) minRed = red;
			if (blue > minBlue) minBlue = blue;
			if (green > minGreen) minGreen = green;
		});
		powerSum += minRed * minBlue * minGreen;
	});
	return powerSum;
};

export { input };
