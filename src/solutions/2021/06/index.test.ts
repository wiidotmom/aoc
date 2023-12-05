import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2021.06.1', () => {
	expect(findSolutionOne(parseInput())).toBe(374994);
});

test('2021.06.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(1686252324092);
});
