'use client';

import { CategoryId } from '@/content';
import { track } from '@vercel/analytics';
import clsx from 'clsx';
import { usePlausible } from './hooks/plausible';

type Props = {
	category: CategoryId;
	url: string;
	name: string;
	className: string;
	parentTitle: string;
};

export function Tile({ name, url, category, className, parentTitle }: Props) {
	const plausible = usePlausible();

	return (
		// biome-ignore lint/a11y/useValidAnchor: The element has a valid href, the onClick handler isn't used for navigation
		<a
			className={clsx(
				'col-span-1 row-span-1 flex items-center justify-center rounded-lg border-2 border-opacity-75 bg-opacity-10 px-2 py-8 text-center text-xl shadow outline-none transition-all hover:border-opacity-100 hover:bg-opacity-20 focus:bg-opacity-20 active:bg-opacity-30 xl:text-2xl',
				{
					'border-ctre bg-ctre shadow-ctre': category === CategoryId.Ctre,
					'border-advantagekit bg-advantagekit shadow-advantagekit': category === CategoryId.Advantagekit,
					'border-pathplanner bg-pathplanner shadow-pathplanner': category === CategoryId.Pathplanner,
					'border-wpilib bg-wpilib shadow-wpilib': category === CategoryId.Wpilib,
					'border-rev bg-rev shadow-rev': category === CategoryId.Rev,
					'border-limelight bg-limelight shadow-limelight': category === CategoryId.Limelight,
					'border-photonvision bg-photonvision shadow-photonvision': category === CategoryId.Photonvision,
					'border-first-sky-blue bg-first-sky-blue shadow-first-sky-blue': category === CategoryId.First,
				},
				className,
			)}
			href={url}
			onClick={() => {
				plausible('Click tile', { props: { name: `${parentTitle} ${name}` } });
				track('Click tile', { name: `${parentTitle} ${name}` });
			}}
		>
			{name}
		</a>
	);
}
