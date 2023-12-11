import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2023.07.1', () => {
	expect(findSolutionOne(parseInput())).toBe(18827);
});

test('2023.07.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(20220305520997);
});
