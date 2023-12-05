import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2021.08.1', () => {
	expect(findSolutionOne(parseInput())).toBe(488);
});

test('2021.08.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(1040429);
});
