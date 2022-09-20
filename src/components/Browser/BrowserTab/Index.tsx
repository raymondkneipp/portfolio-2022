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
						selected ? 'bg-neutral-700/50' : 'hover:bg-neutral-700/25'
					}`}
				>
					<div className={`text-${color}-500 mr-1 sm:mr-2`}>
						{React.createElement(icon, { size: 24 })}
					</div>
					{children}
				</button>
			)}
		</Tab>
	);
};

export default BrowserTab;
