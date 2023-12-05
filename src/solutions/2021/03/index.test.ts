import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2021.03.1', () => {
	expect(findSolutionOne(parseInput())).toBe(3923414);
});

test('2021.03.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(5852595);
});
