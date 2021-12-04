import fs from 'fs';
import path from 'path';

const INPUT_FILE = fs
	.readFileSync(path.join(__dirname, 'input.txt'))
	.toString();

const findSolutionOne = (input: string[]): number => {
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

const findSolutionTwo = (input: string[]): number => {
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

let data = INPUT_FILE.split('\n');
console.log(`Solution 1: ${findSolutionOne(data)}`);
console.log(`Solution 2: ${findSolutionTwo(data)}`);
