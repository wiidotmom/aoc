import input from './input';

export const parseInput = () => input.split('\n');

export const findSolutionOne = (
	input: ReturnType<typeof parseInput>
): number => {
	let myScore = 0;
	input.forEach(round => {
		const [them, me] = round.split(' ');

		switch (them) {
			case 'A': {
				switch (me) {
					case 'X': {
						myScore += 1 + 3;
						break;
					}
					case 'Y': {
						myScore += 2 + 6;
						break;
					}
					case 'Z': {
						myScore += 3 + 0;
					}
				}
				break;
			}
			case 'B': {
				switch (me) {
					case 'X': {
						myScore += 1 + 0;
						break;
					}
					case 'Y': {
						myScore += 2 + 3;
						break;
					}
					case 'Z': {
						myScore += 3 + 6;
						break;
					}
				}
				break;
			}
			case 'C': {
				switch (me) {
					case 'X': {
						myScore += 1 + 6;
						break;
					}
					case 'Y': {
						myScore += 2 + 0;
						break;
					}
					case 'Z': {
						myScore += 3 + 3;
						break;
					}
				}
				break;
			}
		}
	});

	return myScore;
};

export const findSolutionTwo = (
	input: ReturnType<typeof parseInput>
): number => {
	let myScore = 0;

	input.forEach(round => {
		const [them, me] = round.split(' ');

		switch (them) {
			case 'A': {
				switch (me) {
					case 'X': {
						myScore += 3 + 0;
						break;
					}
					case 'Y': {
						myScore += 1 + 3;
						break;
					}
					case 'Z': {
						myScore += 2 + 6;
						break;
					}
				}
				break;
			}
			case 'B': {
				switch (me) {
					case 'X': {
						myScore += 1 + 0;
						break;
					}
					case 'Y': {
						myScore += 2 + 3;
						break;
					}
					case 'Z': {
						myScore += 3 + 6;
						break;
					}
				}
				break;
			}
			case 'C': {
				switch (me) {
					case 'X': {
						myScore += 2 + 0;
						break;
					}
					case 'Y': {
						myScore += 3 + 3;
						break;
					}
					case 'Z': {
						myScore += 1 + 6;
						break;
					}
				}
				break;
			}
		}
	});

	return myScore;
};
