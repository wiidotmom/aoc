import { ColoredSpan, ImportantLink, Link } from 'ui';

export default function Day({ params: { year, day } }: any) {
	return (
		<>
			<ImportantLink href="/">Advent of Code</ImportantLink>
			<br />
			<ColoredSpan>
				//<ImportantLink href="/">2022</ImportantLink>
			</ColoredSpan>
			<h1>
				Hello World {year} {day}
			</h1>
		</>
	);
}
