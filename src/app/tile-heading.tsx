import { PropsWithChildren } from 'react';

export function TileHeading({ children }: PropsWithChildren) {
	return (
		<div className='shadow px-2 py-4 col-span-full row-span-1 rounded transition-colors flex justify-center items-center bg-neutral-800 text-4xl'>
			{children}
		</div>
	);
}
