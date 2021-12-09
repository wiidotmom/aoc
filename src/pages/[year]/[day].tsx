import type { GetStaticProps, NextPage } from 'next';
import { useContext, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styled from 'styled-components';

import { Eye, EyeOff, ExternalLink } from 'react-feather';

import { DayContext } from 'components/Layout';
import { formatDay } from 'lib/calendar';

const Day: NextPage<{ solutions: any[] }> = ({ solutions }) => {
	const { year, day } = useContext(DayContext);
	const { year: routerYear, day: routerDay } = useRouter().query;

	console.log(solutions[2]);

	const [showInput, setShowInput] = useState(false);

	return solutions[2] !== '' ? (
		<PageContainer>
			<PageContent>
				<h2>
					{routerYear}, Day {formatDay(parseInt(routerDay as string))}
				</h2>
				<hr />
				{solutions[0] !== 0 ? (
					<SolutionGroup>
						<h3>Part One</h3>
						<SolutionDescription>
							The solution is <SolutionText>{solutions[0]}</SolutionText>
						</SolutionDescription>
					</SolutionGroup>
				) : (
					<SolutionGroup>
						<h3>Part One</h3>
						<SolutionDescription>
							This part hasn't been solved yet.
						</SolutionDescription>
					</SolutionGroup>
				)}
				{solutions[1] !== 0 ? (
					<SolutionGroup>
						<h3>Part Two</h3>
						<SolutionDescription>
							The solution is <SolutionText>{solutions[1]}</SolutionText>
						</SolutionDescription>
					</SolutionGroup>
				) : (
					<SolutionGroup>
						<h3>Part Two</h3>
						<SolutionDescription>
							This part hasn't been solved yet.
						</SolutionDescription>
					</SolutionGroup>
				)}
				<ButtonGroup>
					<InputButton onClick={() => setShowInput(!showInput)}>
						{showInput ? (
							<>
								<EyeOff /> Hide Input
							</>
						) : (
							<>
								<Eye /> Show Input
							</>
						)}
					</InputButton>
					<Link href={`https://adventofcode.com/${year}/day/${day}`} passHref>
						<CodeLink target="_blank">
							<ExternalLink /> View Problem
						</CodeLink>
					</Link>
					<Link
						href={`https://github.com/iGalaxyYT/aoc/blob/main/src/solutions/${year}/${formatDay(
							day
						)}/index.ts`}
						passHref
					>
						<CodeLink target="_blank">
							<ExternalLink />
							View Code
						</CodeLink>
					</Link>
				</ButtonGroup>
				{showInput ? (
					<InputDisplay>
						{solutions[2].join ? solutions[2].join('\n') : solutions[2]}
					</InputDisplay>
				) : (
					<></>
				)}
			</PageContent>
		</PageContainer>
	) : (
		<PageContainer>
			<PageContent>
				<h2>
					{year}, Day {formatDay(day)}
				</h2>
				<hr />
				<SolutionGroup>
					<SolutionDescription>
						Day {formatDay(day)} has not yet been released or solved.
					</SolutionDescription>
				</SolutionGroup>
			</PageContent>
		</PageContainer>
	);
};

export const getStaticProps: GetStaticProps = async context => {
	const years = (await import('solutions')).default;

	const solutions =
		years[parseInt(context.params?.year as string)][
			parseInt(context.params?.day as string) - 1
		];

	if (solutions && solutions[0] && solutions[1] && solutions[2]) {
		return {
			props: {
				solutions: [
					solutions[0](solutions[2]()),
					solutions[1](solutions[2]()),
					solutions[2](),
				],
			},
		};
	} else if (solutions && solutions[0] && solutions[2]) {
		return {
			props: {
				solutions: [solutions[0](solutions[2]()), 0, solutions[2]()],
			},
		};
	} else {
		return {
			props: {
				solutions: [0, 0, ''],
			},
		};
	}
};

export const getStaticPaths = async () => {
	const solutions = (await import('solutions')).default;

	const years = Object.keys(solutions);
	const days = [...Array(25).keys()].map(x => x + 1);

	return {
		paths: years
			.map(x =>
				days.map(y => ({ params: { year: `${x}`, day: formatDay(y) } }))
			)
			.flat(),
		fallback: false,
	};
};

export default Day;

const PageContainer = styled.div`
	height: calc(100vh - 100px);
	width: 100%;

	@media only screen and (max-width: 1100px) {
		height: calc(100vh - 200px);
	}

	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const PageContent = styled.div`
	width: 80%;

	font-size: 1em;
	font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
		Liberation Mono, Courier New, monospace;

	@media only screen and (max-width: 1100px) {
		width: 100%;
	}

	hr {
		margin-top: 10px;
		margin-bottom: 25px;
		color: rgba(255, 255, 255, 0.2);
	}

	h3 {
		margin-bottom: 10px;
	}
`;

const SolutionGroup = styled.div`
	margin-bottom: 25px;
`;

const ButtonGroup = styled.div`
	margin-bottom: 25px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
`;

const SolutionDescription = styled.span`
	font-size: 1em;
`;

const SolutionText = styled.span`
	font-size: 1em;
	border: 1px solid rgba(255, 255, 255, 0.2);
	background-color: rgba(255, 255, 255, 0.1);
	padding: 5px;
	text-shadow: 0px 0px 4px white;
`;

const InputButton = styled.span`
	color: white;
	text-decoration: none;

	border-radius: 9999px;

	padding-left: 1.25rem;
	padding-right: 1.25rem;
	padding-top: 0.75rem;
	padding-bottom: 0.75rem;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	user-select: none;

	svg {
		margin-right: 10px;
	}

	&:hover {
		background-color: rgba(255, 255, 255, 0.1);
		cursor: pointer;
	}
`;

const CodeLink = styled.a`
	color: white;
	text-decoration: none;

	border-radius: 9999px;

	padding-left: 1.25rem;
	padding-right: 1.25rem;
	padding-top: 0.75rem;
	padding-bottom: 0.75rem;

	display: flex;
	flex-direction: row;
	align-items: center;

	user-select: none;

	svg {
		margin-right: 10px;
	}

	&:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
`;

const InputDisplay = styled.div`
	width: calc(100% - 50px);

	white-space: pre-wrap;
	overflow-x: scroll;

	font-size: 1em;
	border: 1px solid rgba(255, 255, 255, 0.2);
	background-color: rgba(255, 255, 255, 0.1);
	padding: 25px;
	text-shadow: 0px 0px 4px white;
`;
