import { CategoryId } from '@/content';
import { TileGroup } from './tile-group';
import { TileHeading } from './tile-heading';

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

			<TileGroup
				category={CategoryId.Ctre}
				className='lg:col-start-1'
				title='CTR Electronics'
				tiles={[
					{ name: 'Docs', url: 'https://pro.docs.ctr-electronics.com/en/latest/' },
					{ name: 'Examples', url: 'https://github.com/CrossTheRoadElec/Phoenix6-Examples' },
					{ name: 'Phoenix Javadoc', url: 'https://api.ctr-electronics.com/phoenix6/release/java/' },
					{ name: 'Phoenix C++ reference', url: 'https://api.ctr-electronics.com/phoenix6/release/cpp/' },
					{ name: 'Phoenix Python reference', url: 'https://api.ctr-electronics.com/phoenix6/release/python/' },
				]}
			/>

			<TileGroup
				category={CategoryId.Rev}
				className='lg:col-start-2'
				title='REV'
				tiles={[
					{ name: 'Docs', url: 'https://docs.revrobotics.com/brushless' },
					{ name: 'Examples', url: 'https://github.com/REVrobotics/SPARK-MAX-Examples/tree/master' },
					{ name: 'REVLib Javadoc', url: 'https://codedocs.revrobotics.com/java/com/revrobotics/package-summary.html' },
					{ name: 'REVLib C++ reference', url: 'https://codedocs.revrobotics.com/cpp/namespacerev.html' },
					{ name: 'REVLib Python reference', url: 'https://robotpy.readthedocs.io/projects/rev/en/stable/rev.html' },
				]}
			/>

			<TileGroup
				category={CategoryId.Wpilib}
				className='lg:col-start-3'
				title='WPILib'
				tiles={[
					{ name: 'Docs', url: 'https://docs.wpilib.org/en/stable/' },
					{ name: 'Javadoc', url: 'https://github.wpilib.org/allwpilib/docs/release/java/index.html' },
					{ name: 'C++ reference', url: 'https://github.wpilib.org/allwpilib/docs/release/cpp/index.html' },
					{ name: 'Python reference', url: 'https://robotpy.readthedocs.io/projects/robotpy/en/stable/' },
					{
						name: 'Java examples',
						url: 'https://github.com/wpilibsuite/allwpilib/tree/main/wpilibjExamples/src/main/java/edu/wpi/first/wpilibj/examples',
					},
					{
						name: 'C++ examples',
						url: 'https://github.com/wpilibsuite/allwpilib/tree/main/wpilibcExamples/src/main/cpp/examples',
					},
				]}
			/>

			<TileGroup
				category={CategoryId.Advantagekit}
				className='lg:col-start-2'
				title='AdvantageKit'
				tiles={[{ name: 'Docs', url: 'https://github.com/Mechanical-Advantage/AdvantageKit#readme' }]}
			/>

			<TileGroup
				category={CategoryId.Pathplanner}
				className='lg:col-start-1'
				title='PathPlanner'
				tiles={[
					{ name: 'Docs', url: 'https://pathplanner.dev/home.html' },
					{ name: 'Examples', url: 'https://github.com/mjansen4857/pathplanner/tree/main/examples' },
				]}
			/>

			<TileGroup
				category={CategoryId.Photonvision}
				className='lg:col-start-2'
				title='Photonvision'
				tiles={[{ name: 'Docs', url: 'https://docs.photonvision.org/en/latest/' }]}
			/>

			<TileGroup
				category={CategoryId.Limelight}
				className='lg:col-start-3'
				title='Limelight'
				tiles={[{ name: 'Docs', url: 'https://docs.limelightvision.io/' }]}
			/>
		</main>
	);
}
