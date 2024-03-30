import { Card } from '@radix-ui/themes';
import type { PropsWithChildren } from 'react';

export function TileHeading({ children }: PropsWithChildren) {
	return <Card className='col-span-full'>{children}</Card>;
}
