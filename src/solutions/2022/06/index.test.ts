import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2022.06.1', () => {
	expect(findSolutionOne(parseInput())).toBe(1262);
});

test('2022.06.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(3444);
});
