import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2022.11.1', () => {
	expect(findSolutionOne(parseInput())).toBe(110264);
});

test('2022.11.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(23612457316);
});
