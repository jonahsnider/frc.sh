'use client';

import { useLocalStorage } from '@uidotdev/usehooks';
import { PropsWithChildren, createContext, useMemo } from 'react';

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

export function TogglesProvider({ children }: PropsWithChildren) {
	const [storedIds, setStoredIds] = useLocalStorage<LocalStorageToggles>(LOCAL_STORAGE_KEY, Object.values(ToggleId));

	function isToggled(id: ToggleId): boolean {
		return storedIds.includes(id);
	}

	function toggle(id: ToggleId): void {
		const newValue = !isToggled(id);

		if (newValue) {
			setStoredIds([...storedIds, id]);
		} else {
			setStoredIds(storedIds.filter((storedId) => storedId !== id));
		}
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: This is wrong
	const context: Context = useMemo(() => ({ isToggled, toggle }), [isToggled, toggle]);

	return <TogglesContext.Provider value={context}>{children}</TogglesContext.Provider>;
}
