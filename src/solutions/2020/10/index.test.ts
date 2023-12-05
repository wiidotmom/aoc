import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2020.10.1', () => {
	expect(findSolutionOne(parseInput())).toBe(2400);
});

test('2020.10.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(338510590509056);
});
