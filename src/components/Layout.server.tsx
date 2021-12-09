import { PropsWithChildren } from 'react';
import Link from 'next/link';

import styled from 'styled-components';

import { GitHub } from 'react-feather';

import { getCalendar } from 'lib/calendar';

export default function Layout({ children }: PropsWithChildren<{}>) {
	const calendar = getCalendar();

	return (
		<>
			<Navbar>
				<h1>🎄 aoc</h1>
				<SelectGroup>
					<select>
						<option value="2021">2021</option>
					</select>
					<select>
						<option value="01">01</option>
					</select>
				</SelectGroup>
				<Link href="https://github.com/iGalaxyYT/aoc" passHref>
					<NavLink target="_blank">
						<GitHub /> Source Code
					</NavLink>
				</Link>
			</Navbar>
			{children}
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

const SelectGroup = styled.div`
	select {
		margin: 5px;

		border-radius: 10px;

		padding-left: 1.25rem;
		padding-right: 1.25rem;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;

		border: 3px solid rgba(255, 255, 255, 0.1);
		background-color: rgba(0, 0, 0, 0);
		color: white;

		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
			Liberation Mono, Courier New, monospace;
	}
`;
