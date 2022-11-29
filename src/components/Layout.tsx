import { PropsWithChildren, createContext, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styled from 'styled-components';

import { GitHub } from 'react-feather';

import { formatDay, useYears } from 'lib/calendar';
import { sum } from 'utils';

export const DayContext = createContext({ year: 2021, day: 1 });

export default function Layout({ children }: PropsWithChildren<{}>) {
	const router = useRouter();
	const [{ year, day }, setDay] = useState({
		year: parseInt(router.query.year as string),
		day: parseInt(router.query.day as string),
	});
	const { data: years } = useYears();

	let stars: { [key: number]: number };
	if (years) {
		stars = {
			2015: sum(...years[2015].map(x => x.length - 1)),
			2016: sum(...years[2016].map(x => x.length - 1)),
			2017: sum(...years[2017].map(x => x.length - 1)),
			2018: sum(...years[2018].map(x => x.length - 1)),
			2019: sum(...years[2019].map(x => x.length - 1)),
			2020: sum(...years[2020].map(x => x.length - 1)),
			2021: sum(...years[2021].map(x => x.length - 1)),
			2022: sum(...years[2022].map(x => x.length - 1)),
		};
	}

	return (
		<>
			<LayoutContainer>
				<LayoutContent>
					<Navbar>
						<h1>
							🎄 aoc
							<SubHeader>.igalaxy.dev</SubHeader>
						</h1>
						<SelectGroup>
							<select
								value={year}
								onChange={e => {
									setDay({ year: parseInt(e.target.value), day });
									router.replace(
										`/solutions/${e.target.value}/${formatDay(day)}`
									);
								}}
							>
								{[2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015].map(x => (
									<option
										key={`year${x}`}
										value={x}
										disabled={!(years && years[x][day - 1] != null)}
									>
										{x} {stars && `(${stars[x]}*)`}
									</option>
								))}
							</select>
							<select
								value={day}
								onChange={e => {
									setDay({ year, day: parseInt(e.target.value) });
									router.replace(
										`/solutions/${year}/${formatDay(parseInt(e.target.value))}`
									);
								}}
							>
								{[...Array(25).keys()]
									.map(x => x + 1)
									.map(x => (
										<option
											key={`day${x}`}
											value={x}
											disabled={!(years && years[year][x - 1] != null)}
										>
											{formatDay(x)}
										</option>
									))}
							</select>
						</SelectGroup>
						<LinkGroup>
							<Link href={`https://github.com/iGalaxyYT/aoc`} passHref>
								<NavLink target="_blank">
									<GitHub /> Source Code
								</NavLink>
							</Link>
						</LinkGroup>
					</Navbar>
					<DayContext.Provider value={{ year, day }}>
						{children}
					</DayContext.Provider>
				</LayoutContent>
			</LayoutContainer>
		</>
	);
}

const LayoutContainer = styled.div`
	height: 100vh;
	width: 100vw;

	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const LayoutContent = styled.div`
	height: 100vh;
	width: 85vw;
`;

const Navbar = styled.div`
	display: flex;
	flex-direction: row;

	justify-content: space-between;
	align-items: center;

	height: 100px;

	font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
		Liberation Mono, Courier New, monospace;

	user-select: none;

	@media only screen and (max-width: 1100px) {
		flex-direction: column;
		height: 200px;
	}
`;

const SubHeader = styled.span`
	color: rgba(255, 255, 255, 0.25);
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
