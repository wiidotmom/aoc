import * as React from 'react';

export function ColoredSpan({ children }: React.PropsWithChildren) {
	return (
		<span
			style={{
				color: '#8f008f',
				textShadow: '0 0 2px #8f008f, 0 0 5px #8f008f',
			}}
		>
			{children}
		</span>
	);
}
