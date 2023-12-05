import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2021.07.1', () => {
	expect(findSolutionOne(parseInput())).toBe(355521);
});

test('2021.07.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(100148777);
});
