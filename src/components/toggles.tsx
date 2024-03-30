'use client';

import { Switch, type SwitchProps } from '@radix-ui/themes';
import { useContext } from 'react';
import { ToggleId, TogglesContext } from '../contexts/toggles-context';

type ToggleContent = {
	urlKey: string;
	displayName: string;
	color: SwitchProps['color'];
};

const TOGGLES: Record<ToggleId, ToggleContent> = {
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

export function Toggles() {
	const togglesContext = useContext(TogglesContext);
	const toggles = Object.entries(TOGGLES).map(([_id, content]) => {
		const id = _id as ToggleId;
		const isToggled = togglesContext.isToggled(id);

		return (
			<div key={id} className='flex flex-col items-center justify-center gap-rx-1'>
				{content.displayName}

				<Switch size='3' onClick={() => togglesContext.toggle(id)} checked={isToggled} color={content.color} />
			</div>
		);
	});

	return <div className='flex gap-6'>{toggles}</div>;
}
