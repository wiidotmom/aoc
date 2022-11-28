import y2015 from './2015';
import y2016 from './2016';
import y2017 from './2017';
import y2018 from './2018';
import y2019 from './2019';
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
	2015: y2015.map(map),
	2016: y2016.map(map),
	2017: y2017.map(map),
	2018: y2018.map(map),
	2019: y2019.map(map),
	2020: y2020.map(map),
	2021: y2021.map(map),
	2022: y2022.map(map),
};

export default years;
