import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2021.13.1', () => {
	expect(findSolutionOne(parseInput())).toBe(788);
});

const p2answer = `█░░█░░░██░███░░█░░█░████░█░░█░███░░░██░
█░█░░░░░█░█░░█░█░█░░█░░░░█░░█░█░░█░█░░█
██░░░░░░█░███░░██░░░███░░█░░█░███░░█░░░
█░█░░░░░█░█░░█░█░█░░█░░░░█░░█░█░░█░█░██
█░█░░█░░█░█░░█░█░█░░█░░░░█░░█░█░░█░█░░█
█░░█░░██░░███░░█░░█░████░░██░░███░░░███`;

test('2021.13.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(p2answer);
});
