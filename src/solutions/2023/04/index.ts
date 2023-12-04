import input from './input';

export const parseInput = () => input.split('\n');

export const findSolutionOne = (input: ReturnType<typeof parseInput>) => {
	let sum = 0;
	input.forEach(card => {
		card = card.split(':')[1];
		const winning = card
			.split(' | ')[0]
			.split(' ')
			.filter(x => x != '')
			.map(x => +x);
		const have = card
			.split(' | ')[1]
			.split(' ')
			.filter(x => x != '')
			.map(x => +x);
		const matching = have.filter(x => winning.includes(x)).length - 1;
		if (matching >= 0) sum += Math.pow(2, matching);
	});
	return sum;
};

export const findSolutionTwo = (input: ReturnType<typeof parseInput>) => {
	const cards = new Array(input.length).fill(1);

	const total = input.reduce((total, card, i) => {
		card = card.split(':')[1];
		const winning = card
			.split(' | ')[0]
			.split(' ')
			.filter(x => x != '')
			.map(x => +x);
		const have = card
			.split(' | ')[1]
			.split(' ')
			.filter(x => x != '')
			.map(x => +x);

		while (cards[i] > 0) {
			for (let j = 1; j <= have.filter(x => winning.includes(x)).length; j++) {
				cards[i + j]++;
				total++;
			}
			cards[i]--;
		}

		return total;
	}, 0);

	return total + input.length;
};

export { input };
