import * as React from 'react';

import NextLink from 'next/link';

export function Link({
	href,
	children,
}: React.PropsWithChildren<{ href: string }>) {
	return <NextLink href={href}>{children}</NextLink>;
}
