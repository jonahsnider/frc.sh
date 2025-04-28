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
					'bg-ctre hover:bg-ctre/90 dark:bg-ctre/30 dark:hover:bg-ctre/35': category === CategoryId.Ctre,
					'bg-doglog hover:bg-doglog/90 dark:bg-doglog/30 dark:hover:bg-doglog/35': category === CategoryId.Doglog,
					'bg-advantagekit hover:bg-advantagekit/90 dark:bg-advantagekit/30 dark:hover:bg-advantagekit/35':
						category === CategoryId.Advantagekit,
					'bg-pathplanner hover:bg-pathplanner/90 dark:bg-pathplanner/30 dark:hover:bg-pathplanner/35':
						category === CategoryId.Pathplanner,
					'bg-choreo hover:bg-choreo/90 dark:bg-choreo/30 dark:hover:bg-choreo/35': category === CategoryId.Choreo,
					'bg-wpilib hover:bg-wpilib/90 dark:bg-wpilib/30 dark:hover:bg-wpilib/35': category === CategoryId.Wpilib,
					'bg-rev hover:bg-rev/90 dark:bg-rev/30 dark:hover:bg-rev/35': category === CategoryId.Rev,
					'bg-limelight hover:bg-limelight/90 dark:bg-limelight/30 dark:hover:bg-limelight/35':
						category === CategoryId.Limelight,
					'bg-photonvision hover:bg-photonvision/90 dark:bg-photonvision/30 dark:hover:bg-photonvision/35':
						category === CategoryId.Photonvision,
					'bg-first-sky-blue hover:bg-first-sky-blue/90 dark:bg-first-sky-blue/30 dark:hover:bg-first-sky-blue/35':
						category === CategoryId.First,
				},
				'col-span-1',
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
