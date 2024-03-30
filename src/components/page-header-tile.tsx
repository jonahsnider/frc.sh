import { Code, Heading, Link, Text } from '@radix-ui/themes';
import { TileHeading } from './tile-heading';
import { Toggles } from './toggles';

export function PageHeaderTile() {
	return (
		<TileHeading>
			<div className='flex flex-col items-center justify-center gap-4'>
				<div className='flex flex-col items-center justify-center gap-1'>
					<Heading as='h1' size='8'>
						frc
						<Code variant='ghost'>
							<span className='-tracking-widest text-first-red'>.</span>
							<span className='text-first-white'>s</span>
							<span className='text-first-blue'>h</span>
						</Code>
					</Heading>
					<Text as='p'>
						Created by <Link href='https://jonahsnider.com'>Jonah Snider</Link>
					</Text>
					<Text as='p'>
						View source on <Link href='https://github.com/jonahsnider/frc.sh'>GitHub</Link>
					</Text>
				</div>

				<Toggles />
			</div>
		</TileHeading>
	);
}
