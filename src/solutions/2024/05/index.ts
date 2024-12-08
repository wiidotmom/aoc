import input from './input';

export const parseInput = () => input;

export const findSolutionOne = (input: ReturnType<typeof parseInput>) => {
	const rules = new Set<string>();

	const [ruleLines, testLines] = input.split('\n\n');

	ruleLines.split('\n').forEach(line => {
		rules.add(line);
	});

	let sum = 0;
	testLines.split('\n').forEach(line => {
		const order = line.split(',').map(x => +x);
		const relevant = Array.from(rules).filter(x =>
			x.split('|').every(y => order.includes(+y))
		);

		let isCorrect = true;
		relevant.forEach(rule => {
			const [first, second] = rule.split('|').map(x => +x);
			if (order.indexOf(first) > order.indexOf(second)) isCorrect = false;
		});

		if (isCorrect) sum += order[Math.floor(order.length / 2)];
	});

	return sum;
};

export const findSolutionTwo = (input: ReturnType<typeof parseInput>) => {
	const rules = new Set<string>();

	const [ruleLines, testLines] = input.split('\n\n');

	ruleLines.split('\n').forEach(line => {
		rules.add(line);
	});

	let sum = 0;
	testLines.split('\n').forEach(line => {
		const order = line.split(',').map(x => +x);
		const relevant = Array.from(rules).filter(x =>
			x.split('|').every(y => order.includes(+y))
		);
		const edges = new Map<number, Set<number>>();

		let isCorrect = true;
		relevant.forEach(rule => {
			const [first, second] = rule.split('|').map(x => +x);
			if (!edges.has(first)) edges.set(first, new Set<number>());
			edges.get(first)!.add(second);
			if (order.indexOf(first) > order.indexOf(second)) isCorrect = false;
		});

		if (!isCorrect) {
			order.sort((a, b) => {
				if (edges.get(a)?.has(b)) {
					return -1;
				}
				return 0;
			});
			sum += order[Math.floor(order.length / 2)];
		}
	});

	return sum;
};

export { input };
