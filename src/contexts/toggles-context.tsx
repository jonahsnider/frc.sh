'use client';

import { type PropsWithChildren, createContext, useCallback, useEffect, useMemo } from 'react';
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
	const [toggleState, setToggleState] = useMutative({
		toggles: new Set<ToggleId>(DEFAULT_TOGGLES),
	});

	useEffect(() => {
		// Avoid hydration errors by only updating toggles when mounted
		setToggleState({
			toggles: new Set(getInitialToggles()),
		});
	}, [setToggleState]);

	const isToggled = useCallback((id: ToggleId) => toggleState.toggles.has(id), [toggleState.toggles]);

	const toggle = useCallback(
		(id: ToggleId) => {
			setToggleState((draft) => {
				if (draft.toggles.has(id)) {
					draft.toggles.delete(id);
				} else {
					draft.toggles.add(id);
				}

				storeToggles([...draft.toggles]);
			});
		},
		[setToggleState],
	);

	const context: Context = useMemo(() => ({ isToggled, toggle }), [isToggled, toggle]);

	return <TogglesContext.Provider value={context}>{children}</TogglesContext.Provider>;
}
