import { Container, Theme } from '@radix-ui/themes';
import { Analytics } from '@vercel/analytics/react';
import clsx from 'clsx';
import type { Metadata } from 'next';
import PlausibleProvider from 'next-plausible';
import { Fira_Mono } from 'next/font/google';
import './globals.css';

const firaMono = Fira_Mono({ weight: ['700'], subsets: ['latin'], variable: '--font-fira-mono' });

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
			<body className={clsx(firaMono.variable)}>
				<Theme accentColor='red' grayColor='mauve' appearance='dark'>
					<Container>{children}</Container>
				</Theme>

				<Analytics />
			</body>
		</html>
	);
}
