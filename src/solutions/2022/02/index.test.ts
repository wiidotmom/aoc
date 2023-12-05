import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2022.02.1', () => {
	expect(findSolutionOne(parseInput())).toBe(10310);
});

test('2022.02.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(14859);
});
