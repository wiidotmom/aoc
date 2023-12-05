import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2015.01.1', () => {
	expect(findSolutionOne(parseInput())).toBe(74);
});

test('2015.01.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(1795);
});
