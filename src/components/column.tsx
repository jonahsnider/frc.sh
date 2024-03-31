import type { PropsWithChildren } from 'react';

export function Column({ children }: PropsWithChildren) {
	return <div className='flex flex-col gap-rx-4'>{children}</div>;
}
