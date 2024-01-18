import { CategoryId } from '@/content';
import clsx from 'clsx';

type Props = {
	category: CategoryId;
	url: string;
	name: string;
};

export function Tile({ name, url, category }: Props) {
	return (
		<a
			className={clsx(
				'shadow px-2 py-8 col-span-1 row-span-1 rounded-lg transition-all bg-opacity-10 hover:bg-opacity-20 active:bg-opacity-30 border-opacity-75 hover:border-opacity-100 border-2 flex justify-center items-center text-center text-xl',
				{
					'bg-ctre shadow-ctre border-ctre': category === CategoryId.Ctre,
					'bg-advantagekit shadow-advantagekit border-advantagekit': category === CategoryId.Advantagekit,
					'bg-pathplanner shadow-pathplanner border-pathplanner': category === CategoryId.Pathplanner,
					'bg-wpilib shadow-wpilib border-wpilib': category === CategoryId.Wpilib,
					'bg-rev shadow-rev border-rev': category === CategoryId.Rev,
					'bg-limelight shadow-limelight border-limelight': category === CategoryId.Limelight,
					'bg-photonvision shadow-photonvision border-photonvision': category === CategoryId.Photonvision,
				},
			)}
			href={url}
		>
			{name}
		</a>
	);
}
