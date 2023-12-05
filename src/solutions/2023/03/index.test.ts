import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2023.03.1', () => {
	expect(findSolutionOne(parseInput())).toBe(529618);
});

test('2023.03.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(77509019);
});
