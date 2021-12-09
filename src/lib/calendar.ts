interface Year {
	year: number;
	days: number[];
}

export function formatDay(day: number): string {
	return day.toLocaleString('en-US', {
		minimumIntegerDigits: 2,
		useGrouping: false,
	});
}
