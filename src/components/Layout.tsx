import { PropsWithChildren, createContext, useState } from 'react';
import Link from 'next/link';

import styled from 'styled-components';

import { GitHub, ExternalLink } from 'react-feather';

import { formatDay, getCalendar } from 'lib/calendar';

export const DayContext = createContext({ year: 2021, day: 1 });

export default function Layout({ children }: PropsWithChildren<{}>) {
	const calendar = getCalendar();

	const [{ year, day }, setDay] = useState({ year: 2021, day: 1 });

	return (
		<>
			<Navbar>
				<h1>
					🎄 aoc<SubHeader>.igalaxy.dev</SubHeader>
				</h1>
				<SelectGroup>
					<select
						value={year}
						onChange={e => setDay({ year: parseInt(e.target.value), day })}
					>
						{[2021, 2020].map(x => (
							<option value={x}>{x}</option>
						))}
					</select>
					<select
						value={day}
						onChange={e => setDay({ year, day: parseInt(e.target.value) })}
					>
						{[...Array(25).keys()].map(x => (
							<option value={x + 1}>{formatDay(x + 1)}</option>
						))}
					</select>
				</SelectGroup>
				<LinkGroup>
					<Link href={`https://adventofcode.com/${year}/day/${day}`} passHref>
						<NavLink target="_blank">
							<ExternalLink /> View Problem
						</NavLink>
					</Link>
					<Link
						href={`https://github.com/iGalaxyYT/aoc/blob/main/src/solutions/${year}/${formatDay(
							day
						)}/index.ts`}
						passHref
					>
						<NavLink target="_blank">
							<GitHub /> Source Code
						</NavLink>
					</Link>
				</LinkGroup>
			</Navbar>
			<DayContext.Provider value={{ year, day }}>
				{children}
			</DayContext.Provider>
		</>
	);
}

const Navbar = styled.div`
	display: flex;
	flex-direction: row;

	justify-content: space-around;
	align-items: center;

	height: 100px;
	width: 100vw;

	font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
		Liberation Mono, Courier New, monospace;

	user-select: none;
`;

const SubHeader = styled.span`
	color: rgba(255, 255, 255, 0.2);
`;

const NavLink = styled.a`
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

	svg {
		margin-right: 10px;
	}

	&:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
`;

const LinkGroup = styled.div`
	display: flex;
	flex-direction: row;
`;

const SelectGroup = styled.div`
	select {
		margin-left: 5px;
		margin-right: 5px;

		border-radius: 8px;

		padding-left: 1.25rem;
		padding-right: 1.25rem;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;

		border: 3px solid rgba(255, 255, 255, 0.1);
		background-color: #010409;
		color: white;

		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
			Liberation Mono, Courier New, monospace;
		font-size: 1em;
	}
`;
