import { Container, Theme } from '@radix-ui/themes';
import clsx from 'clsx';
import type { Metadata, Viewport } from 'next';
import { Fira_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { WebmanifestMetaTag } from '@/components/webmanifest-meta-tag';
import './globals.css';
import { metadataBase } from '@/metadata';

const firaMono = Fira_Mono({ weight: ['700'], subsets: ['latin'], variable: '--font-fira-mono' });

export const metadata: Metadata = {
	title: 'frc.sh',
	description: 'Quick links for FRC programming & software resources.',
	metadataBase,
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' suppressHydrationWarning={true}>
			<body className={clsx(firaMono.variable)}>
				<ThemeProvider attribute='class' enableSystem={true}>
					<Theme accentColor='jade' grayColor='sage'>
						<Container>{children}</Container>
					</Theme>

					<WebmanifestMetaTag />
				</ThemeProvider>
			</body>
		</html>
	);
}
