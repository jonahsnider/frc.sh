import { Analytics } from '@vercel/analytics/react';
import clsx from 'clsx';
import type { Metadata } from 'next';
import PlausibleProvider from 'next-plausible';
import { Fira_Mono, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const firaMono = Fira_Mono({ weight: ['400'], subsets: ['latin'], variable: '--font-fira-mono' });

export const metadata: Metadata = {
	title: 'frc.sh',
	description: 'Quick links for FRC programming & software resources.',
	metadataBase: new URL('https://frc.sh'),
	openGraph: {
		url: 'https://frc.sh',
		type: 'website',
		title: 'frc.sh',
		siteName: 'frc.sh',
		description: 'Quick links for FRC programming & software resources.',
	},
};

// biome-ignore lint/style/noDefaultExport: This has to be a default export
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<head>
				<PlausibleProvider domain='frc.sh' />
			</head>
			<body className={clsx('container mx-auto bg-neutral-900 text-white', inter.className, firaMono.variable)}>
				{children}

				<Analytics />
			</body>
		</html>
	);
}
