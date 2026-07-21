'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export function WebmanifestMetaTag() {
	// Web manifests do not support media queries, so swap the manifest to match the current color scheme.
	const { resolvedTheme: theme } = useTheme();
	const tag = typeof document === 'undefined' ? undefined : document.querySelector('link[rel="manifest"]');

	useEffect(() => {
		if (tag) {
			const url = `/${theme === 'dark' ? 'dark' : 'light'}.webmanifest`;

			tag.setAttribute('href', url);
		}
	}, [theme, tag]);

	return undefined;
}
