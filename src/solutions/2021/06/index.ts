import input from './input';

export const parseInput = () => input.split(',');

class Sea {
	fish: number[];
	days: number;

	constructor(input: number[], days: number) {
		this.days = days;

		this.fish = new Array(9).fill(0);
		input.forEach(fish => {
			this.fish[fish]++;
		});
	}

	public runSimulation(): number {
		while (this.days > 0) {
			/**
			 * Move everything to the left - in theory everything should increase by 1 starting from the left.
			 * Value returned is 1st value
			 */
			const newFish = this.fish.shift()!;

			this.fish[6] += newFish;
			this.fish[8] = newFish;

			this.days--;
		}

		return this.fish.reduce((a, b) => a + b);
	}
}

export const findSolutionOne = (
	input: ReturnType<typeof parseInput>
): number => {
	const sea = new Sea(
		input.map(x => parseInt(x)),
		80
	);

	return sea.runSimulation();
};

export const findSolutionTwo = (
	input: ReturnType<typeof parseInput>
): number => {
	const sea = new Sea(
		input.map(x => parseInt(x)),
		256
	);

	return sea.runSimulation();
};
