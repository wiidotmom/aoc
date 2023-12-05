import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2022.03.1', () => {
	expect(findSolutionOne(parseInput())).toBe(7850);
});

test('2022.03.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(2581);
});
