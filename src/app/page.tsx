import { CategoryId } from '@/content';
import { Tile } from './tile';
import { TileHeading } from './tile-heading';
import { TileSectionHeading } from './tile-section-heading';

// biome-ignore lint/style/noDefaultExport: This has to be a default export
export default function Home() {
	return (
		<main className='min-h-screen p-4 w-full flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:grid-flow-row-dense'>
			<TileHeading>
				<div className='flex flex-col justify-center items-center gap-2'>
					<h1>
						frc
						<span className='font-mono'>
							<span className='text-first-red -tracking-widest'>.</span>
							<span className='text-first-white'>s</span>
							<span className='text-first-blue'>h</span>
						</span>
					</h1>
					<p className='text-base'>
						Created by{' '}
						<a href='https://jonahsnider.com' className='underline'>
							Jonah Snider
						</a>
					</p>
				</div>
			</TileHeading>

			<TileSectionHeading className='lg:col-start-1 bg-ctre bg-opacity-15'>CTR Electronics</TileSectionHeading>
			<Tile
				className='lg:col-start-1'
				category={CategoryId.Ctre}
				name='Docs'
				url='https://pro.docs.ctr-electronics.com/en/latest/'
			/>
			<Tile
				className='lg:col-start-1'
				category={CategoryId.Ctre}
				name='Examples'
				url='https://github.com/CrossTheRoadElec/Phoenix6-Examples'
			/>
			<Tile
				className='lg:col-start-1'
				category={CategoryId.Ctre}
				name='Phoenix Javadoc'
				url='https://api.ctr-electronics.com/phoenix6/release/java/'
			/>
			<Tile
				className='lg:col-start-1'
				category={CategoryId.Ctre}
				name='Phoenix C++ reference'
				url='https://api.ctr-electronics.com/phoenix6/release/cpp/'
			/>
			<Tile
				className='lg:col-start-1'
				category={CategoryId.Ctre}
				name='Phoenix Python reference'
				url='https://api.ctr-electronics.com/phoenix6/release/python/'
			/>

			<TileSectionHeading className='bg-rev bg-opacity-15 lg:col-start-2'>REV</TileSectionHeading>
			<Tile
				className='lg:col-start-2'
				category={CategoryId.Rev}
				name='Docs'
				url='https://docs.revrobotics.com/brushless'
			/>
			<Tile
				className='lg:col-start-2'
				category={CategoryId.Rev}
				name='Examples'
				url='https://github.com/REVrobotics/SPARK-MAX-Examples/tree/master'
			/>
			<Tile
				className='lg:col-start-2'
				category={CategoryId.Rev}
				name='REVLib Javadoc'
				url='https://codedocs.revrobotics.com/java/com/revrobotics/package-summary.html'
			/>
			<Tile
				className='lg:col-start-2'
				category={CategoryId.Rev}
				name='REVLib C++ reference'
				url='https://codedocs.revrobotics.com/cpp/namespacerev.html'
			/>
			<Tile
				className='lg:col-start-2'
				category={CategoryId.Rev}
				name='REVLib Python reference'
				url='https://robotpy.readthedocs.io/projects/rev/en/stable/rev.html'
			/>

			<TileSectionHeading className='bg-wpilib bg-opacity-15 lg:col-start-3'>WPILib</TileSectionHeading>
			<Tile
				className='lg:col-start-3'
				category={CategoryId.Wpilib}
				name='Docs'
				url='https://docs.wpilib.org/en/stable/'
			/>
			<Tile
				className='lg:col-start-3'
				category={CategoryId.Wpilib}
				name='Javadoc'
				url='https://github.wpilib.org/allwpilib/docs/release/java/index.html'
			/>
			<Tile
				className='lg:col-start-3'
				category={CategoryId.Wpilib}
				name='C++ reference'
				url='https://github.wpilib.org/allwpilib/docs/release/cpp/index.html'
			/>
			<Tile
				className='lg:col-start-3'
				category={CategoryId.Wpilib}
				name='Python reference'
				url='https://robotpy.readthedocs.io/projects/robotpy/en/stable/'
			/>
			<Tile
				className='lg:col-start-3'
				category={CategoryId.Wpilib}
				name='Java examples'
				url='https://github.com/wpilibsuite/allwpilib/tree/main/wpilibjExamples/src/main/java/edu/wpi/first/wpilibj/examples'
			/>
			<Tile
				className='lg:col-start-3'
				category={CategoryId.Wpilib}
				name='C++ examples'
				url='https://github.com/wpilibsuite/allwpilib/tree/main/wpilibcExamples/src/main/cpp/examples'
			/>

			<TileSectionHeading className='bg-advantagekit bg-opacity-15 lg:col-start-2'>AdvantageKit</TileSectionHeading>
			<Tile
				className='lg:col-start-2'
				category={CategoryId.Advantagekit}
				name='Docs'
				url='https://github.com/Mechanical-Advantage/AdvantageKit#readme'
			/>

			<TileSectionHeading className='bg-pathplanner bg-opacity-15 lg:col-start-1'>PathPlanner</TileSectionHeading>
			<Tile
				className='lg:col-start-1'
				category={CategoryId.Pathplanner}
				name='Docs'
				url='https://pathplanner.dev/home.html'
			/>
			<Tile
				className='lg:col-start-1'
				category={CategoryId.Pathplanner}
				name='Examples'
				url='https://github.com/mjansen4857/pathplanner/tree/main/examples'
			/>

			<TileSectionHeading className='bg-photonvision bg-opacity-15 lg:col-start-2'>Photonvision</TileSectionHeading>
			<Tile
				className='lg:col-start-2'
				category={CategoryId.Photonvision}
				name='Docs'
				url='https://docs.photonvision.org/en/latest/'
			/>

			<TileSectionHeading className='bg-limelight bg-opacity-15 lg:col-start-3'>Limelight</TileSectionHeading>
			<Tile
				className='lg:col-start-3'
				category={CategoryId.Limelight}
				name='Docs'
				url='https://docs.limelightvision.io/'
			/>
		</main>
	);
}
