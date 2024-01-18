import { CategoryId } from '@/content';
import clsx from 'clsx';
import { Tile } from './tile';
import { TileSectionHeading } from './tile-section-heading';

type Entry = {
	name: string;
	url: string;
};

type Props = {
	title: string;
	category: CategoryId;
	tiles: Entry[];
	className: string;
};

export function TileGroup({ category, className, tiles, title }: Props) {
	return (
		<>
			<TileSectionHeading
				className={clsx(
					'bg-opacity-15',
					{
						'bg-ctre': category === CategoryId.Ctre,
						'bg-advantagekit': category === CategoryId.Advantagekit,
						'bg-pathplanner': category === CategoryId.Pathplanner,
						'bg-wpilib': category === CategoryId.Wpilib,
						'bg-rev': category === CategoryId.Rev,
						'bg-limelight': category === CategoryId.Limelight,
						'bg-photonvision': category === CategoryId.Photonvision,
					},
					className,
				)}
			>
				{title}
			</TileSectionHeading>
			{tiles.map(({ name, url }) => (
				<Tile key={name} className={className} category={category} name={name} url={url} parentTitle={title} />
			))}
		</>
	);
}
