import React from 'react';
import { IoLockClosed } from 'react-icons/io5/index.js';

type Props = {
	children: string;
};

const URL: React.FC = ({ children }) => {
	return (
		<div className="bg-zinc-700/50 p-3">
			<div className="bg-zinc-900 rounded-lg flex p-3 items-center">
				<span className="text-zinc-700 mr-2">
					<IoLockClosed size={18} />
				</span>
				<span className="hidden sm:inline text-zinc-100/50">https://</span>
				<span className="text-zinc-100">your-website.com</span>
				<span className="text-zinc-100/50">/{children}</span>
			</div>
		</div>
	);
};

export default URL;
