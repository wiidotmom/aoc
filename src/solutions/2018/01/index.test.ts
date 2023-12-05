import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2018.01.1', () => {
	expect(findSolutionOne(parseInput())).toBe(538);
});

test('2018.01.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(77271);
});
