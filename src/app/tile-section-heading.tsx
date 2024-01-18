import clsx from 'clsx';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
	className?: string;
}>;

export function TileSectionHeading({ children, className }: Props) {
	return (
		<div
			className={clsx(
				'shadow px-2 py-8 row-span-1 rounded-lg transition-colors flex justify-center items-center text-4xl font-medium',
				className,
			)}
		>
			{children}
		</div>
	);
}
