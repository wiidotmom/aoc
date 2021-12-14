export function isUpperCase(str: string): boolean {
	return str.split('').every(char => char === char.toUpperCase());
}
