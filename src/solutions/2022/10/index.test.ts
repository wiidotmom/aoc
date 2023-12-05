import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2022.10.1', () => {
	expect(findSolutionOne(parseInput())).toBe(14420);
});

const p2answer = `███░░░██░░█░░░░███░░███░░████░░██░░█░░█
█░░█░█░░█░█░░░░█░░█░█░░█░░░░█░█░░█░█░░█
█░░█░█░░░░█░░░░█░░█░███░░░░█░░█░░█░█░░█
███░░█░██░█░░░░███░░█░░█░░█░░░████░█░░█
█░█░░█░░█░█░░░░█░█░░█░░█░█░░░░█░░█░█░░█
█░░█░░███░████░█░░█░███░░████░█░░█░░██░`;

test('2022.10.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(p2answer);
});
