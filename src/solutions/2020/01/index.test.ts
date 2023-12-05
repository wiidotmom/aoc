import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2020.01.1', () => {
	expect(findSolutionOne(parseInput())).toBe(145875);
});

test('2020.01.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(69596112);
});
