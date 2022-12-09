import * as React from 'react';

import NextLink from 'next/link';

export function NavLink({
	href,
	children,
}: React.PropsWithChildren<{ href: string }>) {
	return (
		<NextLink href={href} style={{ padding: '0 .6em' }}>
			{children}
		</NextLink>
	);
}
