import { HiLockClosed } from 'react-icons/hi/index.js';
import React from 'react';

type Props = {
	children: string;
};

const URL: React.FC = ({ children }) => {
	return (
		<div className="bg-neutral-700/50 p-3">
			<div className="bg-neutral-900 rounded-lg flex p-3 items-center">
				<span className="text-neutral-700 mr-2">
					<HiLockClosed size={18} />
				</span>
				<span className="hidden sm:inline text-neutral-100/50">https://</span>
				<span className="text-neutral-100">your-website.com</span>
				<span className="text-neutral-100/50">/{children}</span>
			</div>
		</div>
	);
};

export default URL;
