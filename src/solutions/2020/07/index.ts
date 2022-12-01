import input from './input';

type BagType = string;

interface BagItem {
	type: BagType;
	count: number;
}

interface BagRule {
	type: BagType;
	contains: BagItem[];
}

const bagList = input
	.split('\n')
	.map(x => x.split(' contain ').map(y => y.replace('.', '')));
const bagTypes = bagList.map(x => x[0].replace(' bags', ''));
const bagContains = bagList
	.map(x => x.slice(1, x.length))
	.map(x =>
		x[0].split(', ').map(y => y.replace(' bags', '').replace(' bag', ''))
	);

let bagRules: BagRule[] = [];

bagTypes.forEach((bag, index) => {
	let bagItems: BagItem[] = [];
	bagContains[index].forEach(bagItem => {
		if (bagItem == 'no other') {
			bagItems.push({ type: 'no other', count: 0 });
		} else {
			bagItems.push({
				type: bagItem.slice(2, bagItem.length),
				count: Number(bagItem[0]),
			});
		}
	});
	bagRules.push({ type: bag, contains: bagItems });
});

const getInnerBagCount = (type: BagType): number => {
	let count = 0;

	const contains = (
		bagRules.find(x => x.type == type) || { type: 'no other', contains: [] }
	).contains;
	contains.forEach(contained => {
		count +=
			contained.count + contained.count * getInnerBagCount(contained.type);
	});

	return count;
};

export const parseInput = () => input;

export const findSolutionOne = (
	input: ReturnType<typeof parseInput>
): number => {
	let containsOriginalBag: BagType[] = [];

	const getOuterBagCount = (originalType: BagType, type: BagType): number => {
		const bagRule = bagRules.find(x => x.type == type);
		const contains = bagRule?.contains.map(x => x.type);
		if (contains?.includes('shiny gold')) {
			if (!containsOriginalBag.includes(originalType))
				containsOriginalBag.push(originalType);
		} else {
			contains?.forEach(contained => getOuterBagCount(originalType, contained));
		}
		return containsOriginalBag.length;
	};

	bagTypes.forEach(type => {
		getOuterBagCount(type, type);
	});

	return containsOriginalBag.length;
};

export const findSolutionTwo = (
	input: ReturnType<typeof parseInput>
): number => {
	const getInnerBagCount = (type: BagType): number => {
		let count = 0;

		const contains = (
			bagRules.find(x => x.type == type) || { type: 'no other', contains: [] }
		).contains;
		contains.forEach(contained => {
			count +=
				contained.count + contained.count * getInnerBagCount(contained.type);
		});

		return count;
	};
	return getInnerBagCount('shiny gold');
};
