export enum CategoryId {
	Ctre = 'ctre',
	Rev = 'rev',
	Wpilib = 'wpilib',
	Pathplanner = 'pathplanner',
	Choreo = 'choreo',
	Doglog = 'doglog',
	Advantagekit = 'advantagekit',
	Limelight = 'limelight',
	Photonvision = 'photonvision',
	First = 'first',
}

export const GAME_MANUAL_URL = `https://firstfrc.blob.core.windows.net/frc${new Date().getFullYear()}/Manual/${new Date().getFullYear()}GameManual.pdf`;

export const FIELD_LAYOUT_URL = `https://firstfrc.blob.core.windows.net/frc${new Date().getFullYear()}/FieldAssets/${new Date().getFullYear()}FieldDrawings.pdf`;
