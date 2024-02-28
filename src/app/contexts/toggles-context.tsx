'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { PropsWithChildren, createContext, useContext, useMemo } from 'react';

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

const DEFAULT_VALUE = true;

export function TogglesProvider({ children }: PropsWithChildren) {
	const router = useRouter();
	const queryParams = useSearchParams();
	const pathname = usePathname();

	function isToggled(id: ToggleId): boolean {
		return queryParams.has(id) ? queryParams.get(id) !== '0' : DEFAULT_VALUE;
	}

	function toggle(id: ToggleId): void {
		const newValue = !isToggled(id);

		const newParams = new URLSearchParams(queryParams);

		if (newValue === DEFAULT_VALUE) {
			newParams.delete(id);
		} else {
			newParams.set(id, newValue ? '1' : '0');
		}

		router.push(`${pathname}?${newParams.toString()}`);
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: This is wrong
	const context: Context = useMemo(() => ({ isToggled, toggle }), [isToggled, toggle]);

	return <TogglesContext.Provider value={context}>{children}</TogglesContext.Provider>;
}

export function useToggle(id: ToggleId): [boolean, () => void] {
	const context = useContext(TogglesContext);
	const toggle = context.toggle;
	const isToggled = context.isToggled;

	return [isToggled(id), () => toggle(id)];
}
