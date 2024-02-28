import { defaultCache } from '@serwist/next/browser';
import type { PrecacheEntry } from '@serwist/precaching';
import { installSerwist } from '@serwist/sw';

// biome-ignore lint/correctness/noUndeclaredVariables: This is a global type
declare const self: ServiceWorkerGlobalScope & {
	// Change this attribute's name to your `injectionPoint`.
	// `injectionPoint` is an InjectManifest option.
	// See https://serwist.pages.dev/docs/build/inject-manifest/configuring
	// biome-ignore lint/style/useNamingConvention: This can't be renamed
	__SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
};

installSerwist({
	precacheEntries: self.__SW_MANIFEST,
	skipWaiting: true,
	clientsClaim: true,
	navigationPreload: true,
	runtimeCaching: defaultCache,
});
