import type { IconType } from 'react-icons/lib';
import React from 'react';
import { Tab } from '@headlessui/react';

type Props = {
	children: React.ReactNode;
	icon: IconType;
	title: string;
	color: string;
};

const TabPanel: React.FC<Props> = ({ children, icon, title, color }) => {
	return (
		<Tab.Panel
			as="div"
			className="p-6 md:p-12 text-neutral-300 text-lg focus:outline-none focus-visible:ring focus-visible:ring-blue-400 relative overflow-hidden"
		>
			<span
				className={`absolute opacity-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${color}`}
			>
				{React.createElement(icon, { size: 500 })}
			</span>
			<div className="flex flex-col gap-6">
				<div className={`${color} flex items-center`}>
					<h3 className="font-heading font-semibold">{title}</h3>
				</div>
				{children}
			</div>
		</Tab.Panel>
	);
};

export default TabPanel;
