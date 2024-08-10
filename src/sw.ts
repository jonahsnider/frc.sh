import { defaultCache } from '@serwist/next/worker';
import type { PrecacheEntry } from '@serwist/precaching';
import { Serwist } from 'serwist';

declare const self: ServiceWorkerGlobalScope & {
	// Change this attribute's name to your `injectionPoint`.
	// `injectionPoint` is an InjectManifest option.
	// See https://serwist.pages.dev/docs/build/inject-manifest/configuring
	// biome-ignore lint/style/useNamingConvention: This can't be renamed
	__SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
};

const serwist = new Serwist({
	// Other options
	runtimeCaching: defaultCache,
	skipWaiting: true,
	precacheEntries: self.__SW_MANIFEST,
	clientsClaim: true,
	navigationPreload: true,
});

serwist.addEventListeners();
