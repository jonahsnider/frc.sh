import { defaultCache } from '@serwist/vite/worker';
import { type PrecacheEntry, Serwist, type SerwistGlobalConfig } from 'serwist';

declare global {
	interface WorkerGlobalScope extends SerwistGlobalConfig {
		__SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
	}
}

declare const self: ServiceWorkerGlobalScope;

const serwist = new Serwist({
	runtimeCaching: defaultCache,
	skipWaiting: true,
	precacheEntries: self.__SW_MANIFEST,
	clientsClaim: true,
	navigationPreload: true,
});

serwist.addEventListeners();
