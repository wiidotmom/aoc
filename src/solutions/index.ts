import y2020 from './2020';
import y2021 from './2021';

export interface Solution {
	findSolutionOne?: { (input: any): number };
	findSolutionTwo?: { (input: any): number };
	parseInput: { (): any };
}

function map(x: any) {
	return [
		x.findSolutionOne ? x.findSolutionOne(x.parseInput()) : 0,
		x.findSolutionTwo ? x.findSolutionTwo(x.parseInput()) : 0,
		x.parseInput(),
	];
}

const years: { [key: number]: number[][] } = {
	2020: y2020.map(map),
	2021: y2021.map(map),
};

export default years;
