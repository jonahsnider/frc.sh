'use client';

import { createContext, type PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react';
import { useMutative } from 'use-mutative';
import { ToggleId } from './toggles';

type Context = {
	toggle(id: ToggleId): void;
	isToggled(id: ToggleId): boolean;
};

type LocalStorageToggles = readonly ToggleId[];

const DEFAULT_TOGGLES: LocalStorageToggles = [ToggleId.Java];

const LOCAL_STORAGE_KEY = 'toggles';

export const TogglesContext = createContext<Context>({
	isToggled: () => false,
	toggle: () => {},
});

// For server side rendering
function getLocalStorage(): Storage | undefined {
	return globalThis.localStorage as Storage | undefined;
}

function getInitialToggles(): LocalStorageToggles {
	const maybeLocalStorage = getLocalStorage();

	if (!maybeLocalStorage) {
		return DEFAULT_TOGGLES;
	}

	const storedToggles = maybeLocalStorage.getItem(LOCAL_STORAGE_KEY);

	if (storedToggles === null) {
		return DEFAULT_TOGGLES;
	}

	return JSON.parse(storedToggles) as LocalStorageToggles;
}

function storeToggles(toggles: LocalStorageToggles): void {
	const maybeLocalStorage = getLocalStorage();

	maybeLocalStorage?.setItem(LOCAL_STORAGE_KEY, JSON.stringify(toggles));
}

export function TogglesProvider({ children }: PropsWithChildren) {
	const [toggles, setToggles] = useMutative(() => new Set<ToggleId>(DEFAULT_TOGGLES));
	const [hasLoadedToggles, setHasLoadedToggles] = useState(false);

	useEffect(() => {
		// Avoid hydration errors by only updating toggles when mounted
		setToggles(new Set(getInitialToggles()));
		setHasLoadedToggles(true);
	}, [setToggles]);

	useEffect(() => {
		if (hasLoadedToggles) {
			storeToggles([...toggles]);
		}
	}, [hasLoadedToggles, toggles]);

	const isToggled = useCallback((id: ToggleId) => toggles.has(id), [toggles]);

	const toggle = useCallback(
		(id: ToggleId) => {
			setToggles((draft) => {
				if (draft.has(id)) {
					draft.delete(id);
				} else {
					draft.add(id);
				}
			});
		},
		[setToggles],
	);

	const context: Context = useMemo(() => ({ isToggled, toggle }), [isToggled, toggle]);

	return <TogglesContext.Provider value={context}>{children}</TogglesContext.Provider>;
}
