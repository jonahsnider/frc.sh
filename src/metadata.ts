export const metadataBase =
	process.env.NODE_ENV === 'development' ? new URL('http://localhost:3000') : new URL('https://frc.sh');
