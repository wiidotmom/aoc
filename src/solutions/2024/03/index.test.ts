import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2024.03.1', () => {
	expect(findSolutionOne(parseInput())).toBe(178794710);
});

test('2024.03.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(76729637);
});
