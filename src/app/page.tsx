import { CategoryId } from '@/content';
import { Tile } from './tile';
import { TileHeading } from './tile-heading';
import { TileSectionHeading } from './tile-section-heading';

// biome-ignore lint/style/noDefaultExport: This has to be a default export
export default function Home() {
	return (
		<main className='min-h-screen p-4 w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
			<TileHeading>
				<div className='flex flex-col justify-center items-center gap-2'>
					frc.sh
					<p className='text-base'>
						Created by{' '}
						<a href='https://jonahsnider.com' className='underline'>
							Jonah Snider
						</a>
					</p>
				</div>
			</TileHeading>

			<TileSectionHeading className='col-span-2 bg-ctre bg-opacity-15'>CTR Electronics</TileSectionHeading>
			<Tile category={CategoryId.Ctre} name='Docs' url='https://pro.docs.ctr-electronics.com/en/latest/' />
			<Tile category={CategoryId.Ctre} name='Examples' url='https://github.com/CrossTheRoadElec/Phoenix6-Examples' />
			<Tile
				category={CategoryId.Ctre}
				name='Phoenix Javadoc'
				url='https://api.ctr-electronics.com/phoenix6/release/java/'
			/>
			<Tile
				category={CategoryId.Ctre}
				name='Phoenix C++ reference'
				url='https://api.ctr-electronics.com/phoenix6/release/cpp/'
			/>
			<Tile
				category={CategoryId.Ctre}
				name='Phoenix Python reference'
				url='https://api.ctr-electronics.com/phoenix6/release/python/'
			/>
			<TileSectionHeading className='col-span-2 bg-rev bg-opacity-15'>REV</TileSectionHeading>
			<Tile category={CategoryId.Rev} name='Docs' url='https://docs.revrobotics.com/brushless' />
			<Tile
				category={CategoryId.Rev}
				name='Examples'
				url='https://github.com/REVrobotics/SPARK-MAX-Examples/tree/master'
			/>
			<Tile
				category={CategoryId.Rev}
				name='REVLib Javadoc'
				url='https://codedocs.revrobotics.com/java/com/revrobotics/package-summary.html'
			/>
			<Tile
				category={CategoryId.Rev}
				name='REVLib C++ reference'
				url='https://codedocs.revrobotics.com/cpp/namespacerev.html'
			/>
			<Tile
				category={CategoryId.Rev}
				name='REVLib Python reference'
				url='https://robotpy.readthedocs.io/projects/rev/en/stable/rev.html'
			/>

			<TileSectionHeading className='col-span-2 bg-pathplanner bg-opacity-15'>PathPlanner</TileSectionHeading>
			<Tile category={CategoryId.Pathplanner} name='Docs' url='https://pathplanner.dev/home.html' />
			<Tile
				category={CategoryId.Pathplanner}
				name='Examples'
				url='https://github.com/mjansen4857/pathplanner/tree/main/examples'
			/>
			<TileSectionHeading className='col-span-2 bg-advantagekit bg-opacity-15'>AdvantageKit</TileSectionHeading>
			<Tile
				category={CategoryId.Advantagekit}
				name='Docs'
				url='https://github.com/Mechanical-Advantage/AdvantageKit#readme'
			/>

			<TileSectionHeading className='col-span-2 bg-wpilib bg-opacity-15'>WPILib</TileSectionHeading>
			<Tile category={CategoryId.Wpilib} name='Docs' url='https://docs.wpilib.org/en/stable/' />
			<Tile
				category={CategoryId.Wpilib}
				name='Javadoc'
				url='https://github.wpilib.org/allwpilib/docs/release/java/index.html'
			/>
			<Tile
				category={CategoryId.Wpilib}
				name='C++ reference'
				url='https://github.wpilib.org/allwpilib/docs/release/cpp/index.html'
			/>
			<Tile
				category={CategoryId.Wpilib}
				name='Python reference'
				url='https://robotpy.readthedocs.io/projects/robotpy/en/stable/'
			/>
			<Tile
				category={CategoryId.Wpilib}
				name='Java examples'
				url='https://github.com/wpilibsuite/allwpilib/tree/main/wpilibjExamples/src/main/java/edu/wpi/first/wpilibj/examples'
			/>
			<Tile
				category={CategoryId.Wpilib}
				name='C++ examples'
				url='https://github.com/wpilibsuite/allwpilib/tree/main/wpilibcExamples/src/main/cpp/examples'
			/>

			<TileSectionHeading className='col-span-2 bg-limelight bg-opacity-15'>Limelight</TileSectionHeading>
			<Tile category={CategoryId.Limelight} name='Docs' url='https://docs.limelightvision.io/' />
			<TileSectionHeading className='col-span-2 bg-photonvision bg-opacity-15'>Photonvision</TileSectionHeading>
			<Tile category={CategoryId.Photonvision} name='Docs' url='https://docs.photonvision.org/en/latest/' />
		</main>
	);
}
