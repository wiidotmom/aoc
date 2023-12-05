import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2023.04.1', () => {
	expect(findSolutionOne(parseInput())).toBe(21959);
});

test('2023.04.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(5132675);
});
