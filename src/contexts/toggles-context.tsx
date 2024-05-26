'use client';

import { useSet } from '@uidotdev/usehooks';
import { type PropsWithChildren, createContext, useEffect, useMemo } from 'react';

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
	// biome-ignore lint/suspicious/noEmptyBlockStatements: This is a noop
	toggle: () => {},
});

const LOCAL_STORAGE_KEY = 'toggles';
type LocalStorageToggles = ToggleId[];

const DEFAULT_TOGGLES: LocalStorageToggles = [ToggleId.Java];

export function TogglesProvider({ children }: PropsWithChildren) {
	// For server side rendering
	const maybeLocalStorage = globalThis.localStorage as Storage | undefined;

	const enabledIds = useSet<ToggleId>();

	// biome-ignore lint/correctness/useExhaustiveDependencies: We want this to run once on mount
	useEffect(() => {
		const storedToggles = maybeLocalStorage?.getItem(LOCAL_STORAGE_KEY);

		const parsedToggles = storedToggles ? (JSON.parse(storedToggles) as LocalStorageToggles) : DEFAULT_TOGGLES;

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

	// biome-ignore lint/correctness/useExhaustiveDependencies: We can't just check if the set object has changed, we need to serialize it
	useEffect(() => {
		maybeLocalStorage?.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...enabledIds]));
	}, [[...enabledIds].join(''), maybeLocalStorage]);

	const context: Context = useMemo(() => ({ isToggled, toggle }), [isToggled, toggle]);

	return <TogglesContext.Provider value={context}>{children}</TogglesContext.Provider>;
}
