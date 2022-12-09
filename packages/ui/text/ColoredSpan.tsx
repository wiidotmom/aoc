import * as React from 'react';

export function ColoredSpan({ children }: React.PropsWithChildren) {
	return (
		<span
			style={{
				color: '#c900c9',
				textShadow: '0 0 2px #c900c9, 0 0 5px #c900c9',
			}}
		>
			{children}
		</span>
	);
}
