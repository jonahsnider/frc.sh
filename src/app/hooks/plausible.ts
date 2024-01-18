import { usePlausible as baseUsePlausible } from 'next-plausible';

export type PlausibleEvents = {
	'Click tile': { name: string };
};

export const usePlausible = () => baseUsePlausible<PlausibleEvents>();
