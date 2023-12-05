import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2022.08.1', () => {
	expect(findSolutionOne(parseInput())).toBe(1719);
});

test('2022.08.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(590824);
});
