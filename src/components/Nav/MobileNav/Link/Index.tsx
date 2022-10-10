import type { IconType } from 'react-icons/lib';
import React from 'react';

type Props = {
	to: string;
	children: string;
	icon: IconType;
	onClick?: () => void;
	target?: string;
};

const Link: React.FC<Props> = ({
	to,
	children,
	icon,
	onClick,
	target = '_self',
}) => {
	return (
		<a
			onClick={onClick}
			href={to}
			className="text-neutral-100 px-6 py-3 flex items-center hover:bg-neutral-700 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-blue-400 transition"
			target={target}
		>
			<span className="text-blue-400">
				{React.createElement(icon, { size: 18, className: 'mr-3' })}
			</span>
			{children}
		</a>
	);
};

export default Link;
