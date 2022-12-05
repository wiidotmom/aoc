import type { GetStaticProps, NextPage } from 'next';
import { useContext, useState } from 'react';
import { performance } from 'perf_hooks';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

import styled from 'styled-components';
import { Eye, EyeOff, ExternalLink } from 'react-feather';

import { DayContext } from 'components/Layout';
import { formatDay } from 'lib/calendar';

const Day: NextPage<{ solutions: any[]; timings: number[] }> = ({
	solutions,
	timings,
}) => {
	const { year, day } = useContext(DayContext);
	const { year: routerYear, day: routerDay } = useRouter().query;

	const [showInput, setShowInput] = useState(false);

	return solutions[2] !== '' ? (
		<PageContainer>
			<Head>
				<title>
					aoc - {routerYear}, Day {routerDay}
				</title>
				<meta name="title" content={`aoc - ${routerYear}, Day ${routerDay}`} />
				<meta
					name="description"
					content="🎄 iGalaxy's Advent of Code solutions - language of choice is TypeScript."
				/>

				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content={`https://aoc.igalaxy.dev/${routerYear}/${routerDay}`}
				/>
				<meta
					property="og:title"
					content={`aoc - ${routerYear}, Day ${routerDay}`}
				/>
				<meta
					property="og:description"
					content="🎄 iGalaxy's Advent of Code solutions - language of choice is TypeScript."
				/>
				<meta
					property="og:image"
					content={`https://aoc-image-gen.vercel.app/**Day%20${routerDay}**,%20${routerYear}.png?theme=dark&md=1&fontSize=200px&widths=400&heights=400&images=https%3A%2F%2Fcdn.igalaxy.dev&images=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fremojansen%2Flogo.ts%40master%2Fts.svg`}
				/>

				<meta property="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:url"
					content={`https://aoc.igalaxy.dev/${routerYear}/${routerDay}`}
				/>
				<meta
					property="twitter:title"
					content={`aoc - ${routerYear}, Day ${routerDay}`}
				/>
				<meta
					property="twitter:description"
					content="🎄 iGalaxy's Advent of Code solutions - language of choice is TypeScript."
				/>
				<meta
					property="twitter:image"
					content={`https://aoc-image-gen.vercel.app/**Day%20${routerDay}**,%20${routerYear}.png?theme=dark&md=1&fontSize=200px&widths=400&heights=400&images=https%3A%2F%2Fcdn.igalaxy.dev&images=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fremojansen%2Flogo.ts%40master%2Fts.svg`}
				/>
			</Head>
			<PageContent>
				<h2>
					{routerYear}, Day {formatDay(parseInt(routerDay as string))}
				</h2>
				<hr />
				{solutions[0] !== 0 ? (
					<SolutionGroup>
						<h3>Part One</h3>
						<SolutionDescription>
							My solution is <SolutionText>{solutions[0]}</SolutionText> (found
							in {timings[0].toFixed(4)}ms)
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
							My solution is <SolutionText>{solutions[1]}</SolutionText> (found
							in {timings[1].toFixed(4)}ms)
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
			<Head>
				<title>
					aoc - {routerYear}, Day {routerDay}
				</title>
			</Head>
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

	let startTime = performance.now();
	const answerPartOne =
		solutions && solutions[0] ? solutions[0](solutions[2]()) : 0;
	let endTime = performance.now();
	const timePartOne = solutions && solutions[0] ? endTime - startTime : -1;

	startTime = performance.now();
	const answerPartTwo =
		solutions && solutions[1] ? solutions[1](solutions[2]()) : 0;
	endTime = performance.now();
	const timePartTwo = solutions && solutions[1] ? endTime - startTime : -1;

	return {
		props: {
			solutions: [answerPartOne, answerPartTwo, solutions[3]],
			timings: [timePartOne, timePartTwo],
		},
	};
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

const SolutionText = styled.p`
	font-size: 1em;
	border: 1px solid rgba(255, 255, 255, 0.2);
	background-color: rgba(255, 255, 255, 0.1);
	padding: 5px;
	text-shadow: 0px 0px 4px white;
	display: inline-block;
	white-space: pre;
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
