import fs from 'fs';
import path from 'path';
import { bold } from 'colorette';

const INPUT_FILE = fs
	.readFileSync(path.join(__dirname, 'input.txt'))
	.toString();

type BoardNumber = number | true;

class Board {
	private rows: BoardNumber[][];

	constructor(board: string) {
		/**
		 * 1. Trim trailing spaces
		 * 2. Split at any number of spaces using regex magic
		 * 3. Convert to integers
		 *
		 * trust me, this is better than the mess I had originally
		 */
		this.rows = board.split('\n').map(row =>
			row
				.trim()
				.split(/\s+/)
				.map(num => parseInt(num))
		);
	}

	private get columns(): BoardNumber[][] {
		let columns: BoardNumber[][] = [];

		Array.from(Array(5)).forEach((x, i) => {
			let column: BoardNumber[] = [];
			this.rows.forEach(row => {
				column.push(row[i]);
			});
			columns.push(column);
		});

		return columns;
	}

	public markNumber(num: number) {
		for (let row = 0; row < this.rows.length; row++) {
			for (let col = 0; col < this.rows.length; col++) {
				if (this.rows[row][col] === num) this.rows[row][col] = true;
			}
		}
	}

	public isWinningBoard(): boolean {
		let isWinner = false;

		/** Specifically checking if the number is true because it might also return true if it exists */
		this.columns.forEach(column => {
			if (column.every(num => num === true)) isWinner = true;
		});
		this.rows.forEach(row => {
			if (row.every(num => num === true)) isWinner = true;
		});

		return isWinner;
	}

	public getUnmarkedSum(): number {
		let sum = 0;

		this.rows.flat().forEach(num => {
			if (!(num === true)) sum += num;
		});

		return sum;
	}
}

const findSolutionOne = (input: string[]): number | undefined => {
	const numbers = input[0].split(',').map(num => parseInt(num));
	const boards = input.slice(1).map(board => new Board(board));

	for (let i = 0; i < numbers.length; i++) {
		const num = numbers[i];

		boards.forEach(board => board.markNumber(num));

		const winningBoard = boards.find(board => board.isWinningBoard());
		if (winningBoard) return winningBoard.getUnmarkedSum() * num;
	}
};

const findSolutionTwo = (input: string[]): number | undefined => {
	const numbers = input[0].split(',').map(num => parseInt(num));
	/** Make boards reassignable so they can be filtered */
	let boards = input.slice(1).map(board => new Board(board));

	for (let i = 0; i < numbers.length; i++) {
		const num = numbers[i];

		boards.forEach(board => board.markNumber(num));

		/** Return last board before filtering it out */
		if (boards.length === 1 && boards[0].isWinningBoard())
			return boards[0].getUnmarkedSum() * num;

		boards = boards.filter(board => !board.isWinningBoard());
	}
};

const data = INPUT_FILE.split('\n\n').map(line => line.trim());
console.log(`Solution 1: ${findSolutionOne(data)}`);
console.log(`Solution 2: ${findSolutionTwo(data)}`);
