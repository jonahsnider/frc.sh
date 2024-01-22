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
				'shadow px-2 py-8 col-span-1 row-span-1 rounded-lg transition-all bg-opacity-10 hover:bg-opacity-20 active:bg-opacity-30 focus:bg-opacity-20 border-opacity-75 hover:border-opacity-100 border-2 flex justify-center items-center text-center text-xl xl:text-2xl outline-none',
				{
					'bg-ctre shadow-ctre border-ctre': category === CategoryId.Ctre,
					'bg-advantagekit shadow-advantagekit border-advantagekit': category === CategoryId.Advantagekit,
					'bg-pathplanner shadow-pathplanner border-pathplanner': category === CategoryId.Pathplanner,
					'bg-wpilib shadow-wpilib border-wpilib': category === CategoryId.Wpilib,
					'bg-rev shadow-rev border-rev': category === CategoryId.Rev,
					'bg-limelight shadow-limelight border-limelight': category === CategoryId.Limelight,
					'bg-photonvision shadow-photonvision border-photonvision': category === CategoryId.Photonvision,
					'bg-first-sky-blue shadow-first-sky-blue border-first-sky-blue': category === CategoryId.First,
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
