'use client';

import { CategoryId } from '@/content';
import { PageHeaderTile } from './page-header-tile';
import { TileGroup } from './tile-group';
import { ToggleId, TogglesProvider } from './contexts/toggles-context';

// biome-ignore lint/style/noDefaultExport: This has to be a default export
export default function Home() {
	return (
		<main className='flex min-h-screen w-full flex-col gap-4 p-4 md:grid md:grid-cols-2 lg:grid-flow-row-dense lg:grid-cols-3 xl:grid-cols-4'>
			<TogglesProvider>
				<PageHeaderTile />

				<TileGroup
					category={CategoryId.Ctre}
					className='lg:col-start-1'
					title='CTR Electronics'
					tiles={[
						{ name: 'Docs', url: 'https://pro.docs.ctr-electronics.com/en/latest/' },
						{ name: 'Examples', url: 'https://github.com/CrossTheRoadElec/Phoenix6-Examples' },
						{
							name: 'Phoenix Javadoc',
							url: 'https://api.ctr-electronics.com/phoenix6/release/java/',
							toggle: ToggleId.Java,
						},
						{
							name: 'Phoenix C++ reference',
							url: 'https://api.ctr-electronics.com/phoenix6/release/cpp/',
							toggle: ToggleId.Cpp,
						},
						{
							name: 'Phoenix Python reference',
							url: 'https://api.ctr-electronics.com/phoenix6/release/python/',
							toggle: ToggleId.Python,
						},
					]}
				/>

				<TileGroup
					category={CategoryId.Rev}
					className='lg:col-start-2'
					title='REV'
					tiles={[
						{ name: 'Docs', url: 'https://docs.revrobotics.com/brushless' },
						{ name: 'Examples', url: 'https://github.com/REVrobotics/SPARK-MAX-Examples/tree/master' },
						{
							name: 'REVLib Javadoc',
							url: 'https://codedocs.revrobotics.com/java/com/revrobotics/package-summary.html',
							toggle: ToggleId.Java,
						},
						{
							name: 'REVLib C++ reference',
							url: 'https://codedocs.revrobotics.com/cpp/namespacerev.html',
							toggle: ToggleId.Cpp,
						},
						{
							name: 'REVLib Python reference',
							url: 'https://robotpy.readthedocs.io/projects/rev/en/stable/rev.html',
							toggle: ToggleId.Python,
						},
					]}
				/>

				<TileGroup
					category={CategoryId.Wpilib}
					className='lg:col-start-3'
					title='WPILib'
					tiles={[
						{ name: 'Docs', url: 'https://docs.wpilib.org/en/stable/' },
						{
							name: 'Javadoc',
							url: 'https://github.wpilib.org/allwpilib/docs/release/java/index.html',
							toggle: ToggleId.Java,
						},
						{
							name: 'C++ reference',
							url: 'https://github.wpilib.org/allwpilib/docs/release/cpp/index.html',
							toggle: ToggleId.Cpp,
						},
						{
							name: 'Python reference',
							url: 'https://robotpy.readthedocs.io/projects/robotpy/en/stable/',
							toggle: ToggleId.Python,
						},
						{
							name: 'Java examples',
							url: 'https://github.com/wpilibsuite/allwpilib/tree/main/wpilibjExamples/src/main/java/edu/wpi/first/wpilibj/examples',
							toggle: ToggleId.Java,
						},
						{
							name: 'C++ examples',
							url: 'https://github.com/wpilibsuite/allwpilib/tree/main/wpilibcExamples/src/main/cpp/examples',
							toggle: ToggleId.Cpp,
						},
					]}
				/>

				<TileGroup
					category={CategoryId.Advantagekit}
					className='lg:col-start-2 xl:col-start-4'
					title='AdvantageKit'
					tiles={[
						{ name: 'Docs', url: 'https://github.com/Mechanical-Advantage/AdvantageKit#readme', toggle: ToggleId.Java },
					]}
				/>

				<TileGroup
					category={CategoryId.Pathplanner}
					className='lg:col-start-1 xl:col-start-4'
					title='PathPlanner'
					tiles={[
						{ name: 'Docs', url: 'https://pathplanner.dev/home.html' },
						{ name: 'Examples', url: 'https://github.com/mjansen4857/pathplanner/tree/main/examples' },
					]}
				/>

				<TileGroup
					category={CategoryId.Photonvision}
					className='lg:col-start-2 xl:col-start-4'
					title='PhotonVision'
					tiles={[{ name: 'Docs', url: 'https://docs.photonvision.org/en/latest/' }]}
				/>

				<TileGroup
					category={CategoryId.Limelight}
					className='lg:col-start-3 xl:col-start-4'
					title='Limelight'
					tiles={[{ name: 'Docs', url: 'https://docs.limelightvision.io/' }]}
				/>

				<TileGroup
					category={CategoryId.First}
					className='lg:col-start-1 xl:col-start-1'
					title='FIRST'
					tiles={[
						{
							name: 'Game manual PDF',
							url: `https://firstfrc.blob.core.windows.net/frc${new Date().getFullYear()}/Manual/${new Date().getFullYear()}GameManual.pdf`,
						},
						{
							name: 'Field layout and marking PDF',
							url: `https://firstfrc.blob.core.windows.net/frc${new Date().getFullYear()}/FieldAssets/${new Date().getFullYear()}FieldDrawings.pdf`,
						},
					]}
				/>
			</TogglesProvider>
		</main>
	);
}
