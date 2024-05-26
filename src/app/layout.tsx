import { WebmanifestMetaTag } from '@/components/webmanifest-meta-tag';
import { Container, Theme } from '@radix-ui/themes';
import { Analytics } from '@vercel/analytics/react';
import clsx from 'clsx';
import type { Metadata, Viewport } from 'next';
import PlausibleProvider from 'next-plausible';
import { ThemeProvider } from 'next-themes';
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
	manifest: '/light.webmanifest',
};

export const viewport: Viewport = {
	themeColor: [
		{
			media: '(prefers-color-scheme: dark)',
			color: '#101211',
		},
		{
			media: '(prefers-color-scheme: light)',
			color: '#ffffff',
		},
	],
	colorScheme: 'dark light',
};

// biome-ignore lint/style/noDefaultExport: This has to be a default export
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' suppressHydrationWarning={true}>
			<head>
				<PlausibleProvider domain='frc.sh' />
			</head>
			<body className={clsx(firaMono.variable)}>
				<ThemeProvider attribute='class' enableSystem={true}>
					<Theme accentColor='jade' grayColor='sage'>
						<Container>{children}</Container>
					</Theme>

					<WebmanifestMetaTag />
				</ThemeProvider>

				<Analytics />
			</body>
		</html>
	);
}
