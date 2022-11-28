import y2020 from './2020';
import y2021 from './2021';
import y2022 from './2022';

export interface Solution {
	findSolutionOne?: { (input: any): number };
	findSolutionTwo?: { (input: any): number };
	parseInput: { (): any };
}

function map(x: any) {
	return [x.findSolutionOne, x.findSolutionTwo, x.parseInput];
}

const years: { [key: number]: any[][] } = {
	2020: y2020.map(x => map(x)),
	2021: y2021.map(x => map(x)),
	2022: y2022.map(x => map(x)),
};

export default years;
