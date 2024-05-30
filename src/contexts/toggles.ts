import type { SwitchProps } from '@radix-ui/themes';

export enum ToggleId {
	Java = 'java',
	Cpp = 'cpp',
	Python = 'python',
}

type ToggleContent = {
	urlKey: string;
	displayName: string;
	color: SwitchProps['color'];
};

export const TOGGLES: Readonly<Record<ToggleId, ToggleContent>> = {
	[ToggleId.Java]: {
		displayName: 'Java',
		urlKey: 'java',
		color: 'brown',
	},
	[ToggleId.Cpp]: {
		displayName: 'C++',
		urlKey: 'cpp',
		color: 'crimson',
	},
	[ToggleId.Python]: {
		displayName: 'Python',
		urlKey: 'python',
		color: 'blue',
	},
};
