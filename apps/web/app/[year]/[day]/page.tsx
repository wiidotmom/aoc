export default function Day({
	params: { year, day },
}: {
	params: { year: number; day: number };
}) {
	return (
		<h1>
			Hello World {year} {day}
		</h1>
	);
}
