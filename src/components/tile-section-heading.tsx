import clsx from 'clsx';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
	className?: string;
}>;

export function TileSectionHeading({ children, className }: Props) {
	return (
		<div
			className={clsx(
				'col-span-2 row-span-1 flex items-center justify-center rounded-lg px-2 py-8 text-3xl font-medium shadow transition-colors lg:col-span-1 xl:text-4xl',
				className,
			)}
		>
			{children}
		</div>
	);
}
