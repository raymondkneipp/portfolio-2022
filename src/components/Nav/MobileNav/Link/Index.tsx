import React from 'react';
import type { IconType } from 'react-icons/lib';

type Props = {
	to: string;
	children: string;
	icon: IconType;
};

const Link: React.FC<Props> = ({ to, children, icon }) => {
	return (
		<a
			href={to}
			className="text-zinc-100 px-6 py-3 flex items-center hover:bg-zinc-700 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-cyan-500"
		>
			{React.createElement(icon, { size: 18, className: 'mr-3' })}
			{children}
		</a>
	);
};

export default Link;
