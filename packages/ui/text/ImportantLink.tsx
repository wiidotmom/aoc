import * as React from 'react';

import NextLink from 'next/link';

export function ImportantLink({
	href,
	children,
}: React.PropsWithChildren<{ href: string }>) {
	return (
		<NextLink href={href} className={'ImportantLink'}>
			{children}
		</NextLink>
	);
}
