'use client';

import clsx from 'clsx';
import { useContext } from 'react';
import { ToggleId, TogglesContext } from '../contexts/toggles-context';
import { Toggle } from './toggle';

type ToggleContent = {
	urlKey: string;
	displayName: string;
};

const TOGGLES: Record<ToggleId, ToggleContent> = {
	[ToggleId.Java]: {
		displayName: 'Java',
		urlKey: 'java',
	},
	[ToggleId.Cpp]: {
		displayName: 'C++',
		urlKey: 'cpp',
	},
	[ToggleId.Python]: {
		displayName: 'Python',
		urlKey: 'python',
	},
};

export function Toggles() {
	const togglesContext = useContext(TogglesContext);
	const toggles = Object.entries(TOGGLES).map(([_id, content]) => {
		const id = _id as ToggleId;
		const isToggled = togglesContext.isToggled(id);

		return (
			<Toggle
				key={id}
				onClick={() => togglesContext.toggle(id)}
				enabled={isToggled}
				className={clsx({
					'bg-java': id === ToggleId.Java,
					'bg-cpp': id === ToggleId.Cpp,
					'bg-python': id === ToggleId.Python,
					'bg-opacity-25': !isToggled,
				})}
			>
				{content.displayName}
			</Toggle>
		);
	});

	return <div className='flex gap-6'>{toggles}</div>;
}
