'use client';

import { useSet } from '@uidotdev/usehooks';
import { PropsWithChildren, createContext, useEffect, useMemo } from 'react';

export enum ToggleId {
	Java = 'java',
	Cpp = 'cpp',
	Python = 'python',
}

type Context = {
	toggle(id: ToggleId): void;
	isToggled(id: ToggleId): boolean;
};

export const TogglesContext = createContext<Context>({
	isToggled: () => false,
	toggle: () => {},
});

const LOCAL_STORAGE_KEY = 'toggles';
type LocalStorageToggles = ToggleId[];

const DEFAULT_TOGGLES: LocalStorageToggles = [ToggleId.Java];

export function TogglesProvider({ children }: PropsWithChildren) {
	// For server side rendering
	const maybeLocalStorage = globalThis.localStorage as Storage | undefined;

	const rawStoredIds = maybeLocalStorage?.getItem(LOCAL_STORAGE_KEY);
	const storedIds = rawStoredIds ? (JSON.parse(rawStoredIds) as LocalStorageToggles) : DEFAULT_TOGGLES;
	const enabledIds = useSet<ToggleId>(storedIds);

	// biome-ignore lint/correctness/useExhaustiveDependencies: We want this to run once on mount
	useEffect(() => {
		const storedToggles = maybeLocalStorage?.getItem(LOCAL_STORAGE_KEY) ?? JSON.stringify([]);

		const parsedToggles = JSON.parse(storedToggles) as LocalStorageToggles;

		for (const id of parsedToggles) {
			enabledIds.add(id);
		}
	}, []);

	function isToggled(id: ToggleId): boolean {
		return enabledIds.has(id);
	}

	function toggle(id: ToggleId): void {
		const newValue = !isToggled(id);

		if (newValue) {
			enabledIds.add(id);
		} else {
			enabledIds.delete(id);
		}
	}

	maybeLocalStorage?.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...enabledIds]));

	// biome-ignore lint/correctness/useExhaustiveDependencies: This is wrong
	const context: Context = useMemo(() => ({ isToggled, toggle }), [isToggled, toggle]);

	return <TogglesContext.Provider value={context}>{children}</TogglesContext.Provider>;
}
