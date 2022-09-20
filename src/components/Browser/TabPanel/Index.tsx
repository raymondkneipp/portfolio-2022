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
			className="p-6 md:p-12 space-y-6 text-neutral-300 text-lg focus:outline-none focus-visible:ring focus-visible:ring-blue-400"
		>
			<div className={`${color} flex items-center`}>
				<span className="mr-3">{React.createElement(icon, { size: 48 })}</span>
				<h3 className="font-bold">{title}</h3>
			</div>
			{children}
		</Tab.Panel>
	);
};

export default TabPanel;
