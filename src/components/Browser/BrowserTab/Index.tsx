import React, { Fragment } from 'react';

import type { IconType } from 'react-icons/lib';
import { Tab } from '@headlessui/react';

type Props = {
	children: string;
	icon: IconType;
	color: string;
};

const BrowserTab: React.FC<Props> = ({ children, icon, color, active }) => {
	return (
		<Tab as={Fragment}>
			{({ selected }) => (
				<button
					className={`rounded-t-lg p-3 flex-1 flex items-center justify-start text-neutral-300 overflow-hidden transition focus:outline-none focus-visible:ring focus-visible:ring-blue-400 z-30 ${
						selected ? 'bg-neutral-800' : 'hover:bg-neutral-800/50'
					}`}
				>
					<div className={`${color} mr-1 sm:mr-2`}>
						{React.createElement(icon, { size: 24 })}
					</div>
					{children}
				</button>
			)}
		</Tab>
	);
};

export default BrowserTab;
