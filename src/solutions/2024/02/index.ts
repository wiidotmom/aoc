import input from './input';

export const parseInput = () => input.split('\n');

export const findSolutionOne = (
	input: ReturnType<typeof parseInput>
): number => {
	let safe = 0;

	for (const line of input) {
		const nums = line.split(' ').map(x => +x);

		let isSafe = true;
		let increasing = nums[1] - nums[0] > 0;

		for (let i = 1; i < nums.length; i++) {
			if (increasing) {
				if (nums[i] - nums[i - 1] < 0) isSafe = false;
			} else {
				if (nums[i] - nums[i - 1] > 0) isSafe = false;
			}

			let diff = Math.abs(nums[i] - nums[i - 1]);
			if (diff > 3 || diff < 1) isSafe = false;
		}

		if (isSafe) safe++;
	}

	return safe;
};

export const findSolutionTwo = (
	input: ReturnType<typeof parseInput>
): number => {
	let safe = 0;

	for (const line of input) {
		const nums = line.split(' ').map(x => +x);

		function checkNums(nums: number[]): boolean {
			let thisIsSafe = true;

			let increasing = nums[1] - nums[0] > 0;

			for (let i = 1; i < nums.length; i++) {
				if (increasing) {
					if (nums[i] - nums[i - 1] < 0) thisIsSafe = false;
				} else {
					if (nums[i] - nums[i - 1] > 0) thisIsSafe = false;
				}

				let diff = Math.abs(nums[i] - nums[i - 1]);
				if (diff > 3 || diff < 1) thisIsSafe = false;
			}

			return thisIsSafe;
		}

		let isSafe = checkNums(nums);

		if (isSafe) safe++;
		else {
			for (let i = 0; i < nums.length; i++) {
				let numsCopy = [...nums];
				numsCopy.splice(i, 1);
				if (checkNums(numsCopy)) isSafe = true;
			}
			if (isSafe) safe++;
		}
	}

	return safe;
};

export { input };
