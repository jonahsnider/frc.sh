'use client';

import { CategoryId } from '@/content';
import { usePlausible } from '@/hooks/plausible';
import { Card, Text } from '@radix-ui/themes';
import { track } from '@vercel/analytics';
import clsx from 'clsx';

type Props = {
	category: CategoryId;
	url: string;
	name: string;
	className?: string;
	parentTitle: string;
};

export function Tile({ name, url, category, className, parentTitle }: Props) {
	const plausible = usePlausible();

	return (
		<Card
			asChild={true}
			className={clsx(
				{
					'bg-ctre': category === CategoryId.Ctre,
					'bg-doglog': category === CategoryId.Doglog,
					'bg-advantagekit': category === CategoryId.Advantagekit,
					'bg-pathplanner': category === CategoryId.Pathplanner,
					'bg-choreo': category === CategoryId.Choreo,
					'bg-wpilib': category === CategoryId.Wpilib,
					'bg-rev': category === CategoryId.Rev,
					'bg-limelight': category === CategoryId.Limelight,
					'bg-photonvision': category === CategoryId.Photonvision,
					'bg-first-sky-blue': category === CategoryId.First,
				},
				'col-span-1 dark:bg-opacity-30 dark:hover:bg-opacity-35 hover:bg-opacity-90',
				className,
			)}
		>
			<Text asChild={true} size='6' align='center'>
				<a
					href={url}
					onClick={() => {
						plausible('Click tile', { props: { name: `${parentTitle} ${name}` } });
						track('Click tile', { name: `${parentTitle} ${name}` });
					}}
					className='flex items-center justify-center py-rx-6'
				>
					{name}
				</a>
			</Text>
		</Card>
	);
}
