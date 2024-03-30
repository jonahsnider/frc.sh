import { Card } from '@radix-ui/themes';
import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
	className?: string;
}>;

export function TileSectionHeading({ children, className }: Props) {
	return (
		<Card
			className={clsx('col-span-1 flex items-center justify-center py-rx-7 sm:col-span-1 xs:col-span-2', className)}
		>
			{children}
		</Card>
	);
}
