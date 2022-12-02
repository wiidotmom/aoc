import useSWR from 'swr';

export function formatDay(day: number): string {
	return day.toLocaleString('en-US', {
		minimumIntegerDigits: 2,
		useGrouping: false,
	});
}

export function useYears() {
	return useSWR<{ [key: number]: any[][] }, Error>('/api/years', url =>
		fetch(url).then(res => res.json())
	);
}
