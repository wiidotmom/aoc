import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2020.03.1', () => {
	expect(findSolutionOne(parseInput())).toBe(218);
});

test('2020.03.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(3847183340);
});
