'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export function WebmanifestMetaTag() {
	// next/head isn't a thing in app router, and webmanifests don't support media queries (https://github.com/w3c/manifest/issues/975)
	// So, this is the best way to swap out the webmanifest based on the current color scheme
	const { resolvedTheme: theme } = useTheme();
	const tag = typeof document === 'undefined' ? undefined : document.querySelector('link[rel="manifest"]');

	useEffect(() => {
		if (tag) {
			const url = `/${theme === 'dark' ? 'dark' : 'light'}.webmanifest`;

			tag.setAttribute('href', url);
		}
	}, [theme, tag]);

	return <></>;
}
