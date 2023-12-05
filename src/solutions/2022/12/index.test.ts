import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2022.12.1', () => {
	expect(findSolutionOne(parseInput())).toBe(437);
});

test('2022.12.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(430);
});
