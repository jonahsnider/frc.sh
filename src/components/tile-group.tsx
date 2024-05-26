'use client';

import { CategoryId } from '@/content';
import { Card, Heading, Theme, type ThemeProps } from '@radix-ui/themes';
import clsx from 'clsx';
import { useContext } from 'react';
import { type ToggleId, TogglesContext } from '../contexts/toggles-context';
import { Tile } from './tile';

type Entry = {
	name: string;
	url: string;
	toggle?: ToggleId;
};

type Props = {
	title: string;
	category: CategoryId;
	tiles: Entry[];
};

function getAccentColor(category: CategoryId): ThemeProps['accentColor'] {
	switch (category) {
		case CategoryId.Ctre:
			return 'lime';
		case CategoryId.Doglog:
			return 'red';
		case CategoryId.Advantagekit:
			return 'yellow';
		case CategoryId.Limelight:
			return 'lime';
		case CategoryId.First:
			return 'sky';
		case CategoryId.Pathplanner:
			return 'indigo';
		case CategoryId.Choreo:
			return 'violet';
		case CategoryId.Rev:
			return 'orange';
		case CategoryId.Wpilib:
			return 'blue';
		case CategoryId.Photonvision:
			return 'blue';
		default:
			return undefined;
	}
}

export function TileGroup({ category, tiles, title }: Props) {
	const togglesContext = useContext(TogglesContext);

	const filteredTiles = tiles.filter((tile) => (tile.toggle ? togglesContext.isToggled(tile.toggle) : true));

	if (filteredTiles.length === 0) {
		return undefined;
	}

	const childTilesCount = filteredTiles.length + 1;

	return (
		<Theme accentColor={getAccentColor(category)} asChild={true}>
			<Card
				className={clsx(
					'col-span-1 grid grid-cols-subgrid gap-rx-4 bg-opacity-40 pt-rx-4 sm:col-span-1 xs:col-span-2 dark:bg-opacity-10',
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
				)}
				style={{
					gridRow: `span ${childTilesCount} / span ${childTilesCount}`,
				}}
			>
				<Heading as='h2' size='7' align='center' className='col-span-1 w-full sm:col-span-1 xs:col-span-2'>
					{title}
				</Heading>

				{filteredTiles.map(({ name, url }) => (
					<Tile key={name} category={category} name={name} url={url} parentTitle={title} />
				))}
			</Card>
		</Theme>
	);
}
