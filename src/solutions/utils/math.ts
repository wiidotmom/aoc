export function gcd(a: number, b: number): number {
	if (!b) return Math.abs(a);
	return gcd(b, a % b);
}

export function lcm(a: number, b: number): number {
	if (a === 0 || b === 0) return 0;
	return Math.abs((a * b) / gcd(a, b));
}

export function sum(...values: number[]): number {
	return values.reduce((a, b) => a + b);
}
