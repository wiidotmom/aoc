import 'utils';

import input from './input';

export const parseInput = () => input.split('\n');

export const findSolutionOne = (input: ReturnType<typeof parseInput>) => {
	input.sort((a, b) => {
		const handA = a.split(' ')[0].split('');
		const handB = b.split(' ')[0].split('');

		const cards = [
			'1',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9',
			'T',
			'J',
			'Q',
			'K',
			'A',
		];

		const types = [
			// five of a kind
			(hand: string[]) => hand.every(x => x == hand[0]),
			// four of a kind
			(hand: string[]) => hand.some(x => hand.filter(y => y == x).length == 4),
			// full house
			(hand: string[]) =>
				hand.some(
					x =>
						hand.filter(y => y == x).length == 3 &&
						hand.some(y => y != x && hand.filter(z => z == y).length == 2)
				),
			// three of a kind
			(hand: string[]) => hand.some(x => hand.filter(y => y == x).length == 3),
			// two pair
			(hand: string[]) =>
				hand.some(
					x =>
						hand.filter(y => y == x).length == 2 &&
						hand.some(y => y != x && hand.filter(z => z == y).length == 2)
				),
			// one pair
			(hand: string[]) =>
				hand.some(
					x =>
						hand.filter(y => y == x).length == 2 &&
						hand.filter(y => y != x).unique()
				),
			// high card
			(hand: string[]) => hand.unique(),
		];

		let aType = 7 - types.indexOf(types.find(x => x(handA))!);
		let bType = 7 - types.indexOf(types.find(x => x(handB))!);

		if (aType < bType) {
			return -1;
		} else if (aType > bType) {
			return 1;
		}

		for (let i = 0; i < handA.length; i++) {
			let cardA = cards.indexOf(handA[i]);
			let cardB = cards.indexOf(handB[i]);
			if (cardA < cardB) {
				return -1;
			} else if (cardA > cardB) {
				return 1;
			}
		}

		return 0;
	});

	return input
		.map(x => x.split(' '))
		.map(([, bid], rank) => {
			return +bid * (rank + 1);
		})
		.reduce((a, b) => a + b);
};

export const findSolutionTwo = (input: ReturnType<typeof parseInput>) => {
	input.sort((a, b) => {
		const handA = a.split(' ')[0].split('');
		const handB = b.split(' ')[0].split('');

		const cards = [
			'1',
			'J',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9',
			'T',
			'Q',
			'K',
			'A',
		];

		const types = [
			// five of a kind
			(hand: string[]) => hand.every(x => x == hand[0]),
			// four of a kind
			(hand: string[]) => hand.some(x => hand.filter(y => y == x).length == 4),
			// full house
			(hand: string[]) =>
				hand.some(
					x =>
						hand.filter(y => y == x).length == 3 &&
						hand.some(y => y != x && hand.filter(z => z == y).length == 2)
				),
			// three of a kind
			(hand: string[]) => hand.some(x => hand.filter(y => y == x).length == 3),
			// two pair
			(hand: string[]) =>
				hand.some(
					x =>
						hand.filter(y => y == x).length == 2 &&
						hand.some(y => y != x && hand.filter(z => z == y).length == 2)
				),
			// one pair
			(hand: string[]) =>
				hand.some(
					x =>
						hand.filter(y => y == x).length == 2 &&
						hand.filter(y => y != x).unique()
				),
			// high card
			(hand: string[]) => hand.unique(),
		];

		let maxBScore = 0;
		let maxAScore = 0;

		for (let i = 0; i < cards.length; i++) {
			let tempHandB = handB.join('').replaceAll(cards[i], 'J').split('');
			let tempHandA = handA.join('').replaceAll(cards[i], 'J').split('');
			let bType = 7 - types.indexOf(types.find(x => x(tempHandB))!);
			let aType = 7 - types.indexOf(types.find(x => x(tempHandA))!);

			if (bType > maxBScore) maxBScore = bType;
			if (aType > maxAScore) maxAScore = aType;
		}

		let aType = 7 - types.indexOf(types.find(x => x(handA))!);
		let bType = 7 - types.indexOf(types.find(x => x(handB))!);

		if (bType > maxBScore) maxBScore = bType;
		if (aType > maxAScore) maxAScore = aType;

		if (maxAScore < maxBScore) {
			return -1;
		} else if (maxAScore > maxBScore) {
			return 1;
		}

		for (let i = 0; i < handA.length; i++) {
			let cardA = cards.indexOf(handA[i]);
			let cardB = cards.indexOf(handB[i]);
			if (cardA < cardB) {
				return -1;
			} else if (cardA > cardB) {
				return 1;
			}
		}

		return 0;
	});

	return input
		.map(x => x.split(' '))
		.map(([, bid], rank) => {
			return +bid * (rank + 1);
		})
		.reduce((a, b) => a + b);
};

export { input };
