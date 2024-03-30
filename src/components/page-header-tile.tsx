import { TileHeading } from './tile-heading';
import { Toggles } from './toggles';

export function PageHeaderTile() {
	return (
		<TileHeading>
			<div className='flex flex-col items-center justify-center gap-4'>
				<div className='flex flex-col items-center justify-center gap-1'>
					<h1 className='text-4xl'>
						frc
						<span className='font-mono'>
							<span className='-tracking-widest text-first-red'>.</span>
							<span className='text-first-white'>s</span>
							<span className='text-first-blue'>h</span>
						</span>
					</h1>
					<p className='text-lg'>
						Created by{' '}
						<a href='https://jonahsnider.com' className='underline'>
							Jonah Snider
						</a>
					</p>
					<p className='text-lg'>
						View source on{' '}
						<a href='https://github.com/jonahsnider/frc.sh' className='underline'>
							GitHub
						</a>
					</p>
				</div>

				<Toggles />
			</div>
		</TileHeading>
	);
}
