import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2021.10.1', () => {
	expect(findSolutionOne(parseInput())).toBe(411471);
});

test('2021.10.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(3122628974);
});
