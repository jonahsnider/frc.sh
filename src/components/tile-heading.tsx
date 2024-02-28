import { PropsWithChildren } from 'react';

export function TileHeading({ children }: PropsWithChildren) {
	return (
		<div className='col-span-full row-span-1 flex items-center justify-center rounded-lg bg-neutral-800 px-2 py-4 shadow transition-colors'>
			{children}
		</div>
	);
}
