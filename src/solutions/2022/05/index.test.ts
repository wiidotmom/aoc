import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2022.05.1', () => {
	expect(findSolutionOne(parseInput())).toBe('RLFNRTNFB');
});

test('2022.05.2', () => {
	expect(findSolutionTwo(parseInput())).toBe('MHQTLJRLB');
});
