import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2023.05.1', () => {
	expect(findSolutionOne(parseInput())).toBe(836040384);
});

test('2023.05.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(10834440);
});
