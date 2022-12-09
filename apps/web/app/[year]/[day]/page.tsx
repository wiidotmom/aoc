import { ColoredSpan, ImportantLink, Link } from 'ui';

export default function Day({ params: { year, day } }: any) {
	return (
		<>
			<h1>
				Hello World {year} {day}
			</h1>
		</>
	);
}
