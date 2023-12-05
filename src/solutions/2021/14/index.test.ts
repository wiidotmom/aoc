import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2021.14.1', () => {
	expect(findSolutionOne(parseInput())).toBe(2975);
});

test('2021.14.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(3015383850689);
});
