import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2021.05.1', () => {
	expect(findSolutionOne(parseInput())).toBe(7674);
});

test('2021.05.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(20898);
});
