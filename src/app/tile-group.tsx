import { PropsWithChildren } from 'react';

export function TileGroup({ children }: PropsWithChildren) {
	return <section className='col-span-1 flex flex-col gap-4'>{children}</section>;
}
