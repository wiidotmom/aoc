export function isUpperCase(str: string): boolean {
	return str.split('').every(char => char === char.toUpperCase());
}

export function characterCounts(str: string) {
	return str.split('').reduce((a, c) => {
		a[c] = a[c] ? a[c] + 1 : 1;
		return a;
	}, {} as { [key: string]: number });
}

export function isNumber(str: string): boolean {
	return !Number.isNaN(+str);
}
