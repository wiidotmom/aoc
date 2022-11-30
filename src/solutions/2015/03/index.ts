import input from './input';

import { Grid } from 'utils';

export const parseInput = () => input.split('');

export const findSolutionOne = (input: string[]): number => {
	const grid = new Grid(false);

	grid.set(0, 0, true);

	let x = 0,
		y = 0;
	input.forEach(dir => {
		switch (dir) {
			case '>': {
				x++;
				break;
			}
			case '<': {
				x--;
				break;
			}
			case '^': {
				y++;
				break;
			}
			case 'v': {
				y--;
				break;
			}
		}
		grid.set(x, y, true);
	});

	return grid.points.length;
};

export const findSolutionTwo = (input: string[]): number => {
	const grid = new Grid(false);

	grid.set(0, 0, true);

	let santaX = 0,
		santaY = 0,
		roboX = 0,
		roboY = 0;

	enum Previous {
		SANTA,
		ROBO_SANTA,
	}

	let previous = Previous.ROBO_SANTA;

	input.forEach(dir => {
		switch (previous) {
			case Previous.ROBO_SANTA: {
				switch (dir) {
					case '>': {
						santaX++;
						break;
					}
					case '<': {
						santaX--;
						break;
					}
					case '^': {
						santaY++;
						break;
					}
					case 'v': {
						santaY--;
						break;
					}
				}
				previous = Previous.SANTA;
				grid.set(santaX, santaY, true);
				break;
			}
			case Previous.SANTA: {
				switch (dir) {
					case '>': {
						roboX++;
						break;
					}
					case '<': {
						roboX--;
						break;
					}
					case '^': {
						roboY++;
						break;
					}
					case 'v': {
						roboY--;
						break;
					}
				}
				previous = Previous.ROBO_SANTA;
				grid.set(roboX, roboY, true);
				break;
			}
		}
	});

	return grid.points.length;
};
