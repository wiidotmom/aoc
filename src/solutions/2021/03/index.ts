import input from './input';

export const parseInput = () => input.split('\n');

export const findSolutionOne = (
	input: ReturnType<typeof parseInput>
): number => {
	let minBinary = '';
	let maxBinary = '';

	Array.from(Array(input[0].length)).forEach((x, i) => {
		let oneCount = 0;
		let zeroCount = 0;

		input.forEach(byte => {
			byte[i] === '0' ? zeroCount++ : oneCount++;
		});

		if (oneCount < zeroCount) {
			minBinary = minBinary + '1';
			maxBinary = maxBinary + '0';
		} else {
			minBinary = minBinary + '0';
			maxBinary = maxBinary + '1';
		}
	});

	const gammaRate = parseInt(maxBinary, 2);
	const epsilonRate = parseInt(minBinary, 2);

	return gammaRate * epsilonRate;
};

export const findSolutionTwo = (
	input: ReturnType<typeof parseInput>
): number => {
	function getOxygenGeneratorRating(): number {
		let filteredData = [...input];

		Array.from(Array(input[0].length)).forEach((x, i) => {
			let oneCount = 0;
			let zeroCount = 0;

			filteredData.forEach(byte => {
				byte[i] === '0' ? zeroCount++ : oneCount++;
			});

			if (filteredData.length === 1) return;

			if (oneCount < zeroCount) {
				filteredData = filteredData.filter(d => d[i] === '0');
			} else {
				filteredData = filteredData.filter(d => d[i] === '1');
			}
		});

		return parseInt(filteredData[0], 2);
	}

	function getCO2ScrubberRating(): number {
		let filteredData = [...input];

		Array.from(Array(input[0].length)).forEach((x, i) => {
			let oneCount = 0;
			let zeroCount = 0;

			filteredData.forEach(byte => {
				byte[i] === '0' ? zeroCount++ : oneCount++;
			});

			if (filteredData.length === 1) return;

			if (oneCount < zeroCount) {
				filteredData = filteredData.filter(d => d[i] === '1');
			} else {
				filteredData = filteredData.filter(d => d[i] === '0');
			}
		});

		return parseInt(filteredData[0], 2);
	}

	return getOxygenGeneratorRating() * getCO2ScrubberRating();
};
