import { Card, Code, Heading, Link, Text } from '@radix-ui/themes';
import { Toggles } from './toggles';

export function PageHeaderTile() {
	return (
		<div className='grid grid-cols-1 xs:grid-cols-2 gap-rx-4 sm:grid-cols-3 md:grid-cols-4'>
			<Card className='col-span-1 flex flex-col items-center justify-center gap-1'>
				<Text as='p' size='3'>
					Created by <Link href='https://jonahsnider.com'>Jonah Snider</Link>
				</Text>

				<Text as='p' size='3'>
					View source on <Link href='https://github.com/jonahsnider/frc.sh'>GitHub</Link>
				</Text>
			</Card>

			<Card className='col-span-1 xs:col-span-2 row-start-1 sm:col-span-1 sm:row-start-auto md:col-span-2'>
				<div className='flex flex-col items-center justify-center gap-1'>
					<Heading as='h1' size='8'>
						frc
						<Code variant='ghost' className='-tracking-[0.1em]'>
							<span className='text-first-red'>.</span>
							<span className='dark:text-first-white'>s</span>
							<span className='text-first-blue'>h</span>
						</Code>
					</Heading>

					<Toggles />
				</div>
			</Card>

			<Card className='col-span-1 flex flex-col items-center justify-center gap-1'>
				<Heading as='h2' size='3'>
					Other projects:
				</Heading>

				<Link href='https://scores.frc.sh/?utm_source=frc.sh' size='3'>
					scores.frc.sh
				</Link>

				<Link href='https://frc-colors.com/?utm_source=frc.sh' size='3'>
					FRC Colors
				</Link>
			</Card>
		</div>
	);
}
