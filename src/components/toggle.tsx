import { Switch } from '@headlessui/react';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';

type Props = {
	className?: string;
	enabled: boolean;
	onClick: () => void;
};

export function Toggle({ className, children, onClick, enabled }: PropsWithChildren<Props>) {
	return (
		<div className='flex flex-col justify-center items-center text-xl gap-1'>
			{children}

			<Switch
				checked={enabled}
				onChange={onClick}
				className={clsx(
					'relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75',
					className,
				)}
			>
				<span
					aria-hidden='true'
					className={clsx(
						{
							'translate-x-9': enabled,
							'translate-x-0': !enabled,
						},
						'pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out',
					)}
				/>
			</Switch>
		</div>
	);
}
