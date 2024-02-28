'use client';

import { CategoryId } from '@/content';
import clsx from 'clsx';
import { useContext } from 'react';
import { ToggleId, TogglesContext } from '../contexts/toggles-context';
import { Tile } from './tile';
import { TileSectionHeading } from './tile-section-heading';

type Entry = {
	name: string;
	url: string;
	toggle?: ToggleId;
};

type Props = {
	title: string;
	category: CategoryId;
	tiles: Entry[];
	className: string;
};

export function TileGroup({ category, className, tiles, title }: Props) {
	const togglesContext = useContext(TogglesContext);

	const filteredTiles = tiles.filter((tile) => (tile.toggle ? togglesContext.isToggled(tile.toggle) : true));

	if (filteredTiles.length === 0) {
		return undefined;
	}

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
						'bg-first-sky-blue': category === CategoryId.First,
					},
					className,
				)}
			>
				{title}
			</TileSectionHeading>
			{filteredTiles.map(({ name, url }) => (
				<Tile key={name} className={className} category={category} name={name} url={url} parentTitle={title} />
			))}
		</>
	);
}
