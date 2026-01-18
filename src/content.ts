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

const currentYear = new Date().getFullYear();

export const GAME_MANUAL_URL = `https://firstfrc.blob.core.windows.net/frc${currentYear}/Manual/${currentYear}GameManual.pdf`;

export const FIELD_LAYOUT_URL = `https://firstfrc.blob.core.windows.net/frc${currentYear}/FieldAssets/${currentYear}-field-dimension-dwgs.pdf`;
