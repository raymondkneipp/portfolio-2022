import {
	IoCaretDown,
	IoLogoGithub,
	IoLogoLinkedin,
} from 'react-icons/io5/index.js';

import { HiDocumentText } from 'react-icons/hi/index.js';
import Link from '../MobileNav/Link/Index';
import { Popover } from '@headlessui/react';
import React from 'react';

const DropDown: React.FC = () => {
	return (
		<Popover className="relative">
			{({ open, close }) => (
				<>
					<Popover.Button
						className="text-neutral-400 hover:text-neutral-100 py-1.5 px-3 hover:bg-neutral-900 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-blue-400 flex items-center gap-1 transition"
						aria-label="menu"
					>
						More <IoCaretDown />
					</Popover.Button>

					<Popover.Panel className="absolute right-0 bg-black border border-neutral-800 p-3 mt-3 rounded-lg shadow-lg grid">
						<Link
							to="https://www.linkedin.com/in/raymondkneipp/"
							onClick={() => close()}
							icon={IoLogoLinkedin}
							target="_blank"
						>
							LinkedIn
						</Link>
						<Link
							to="https://github.com/raymondkneipp"
							icon={IoLogoGithub}
							onClick={() => close()}
							target="_blank"
						>
							GitHub
						</Link>
						<Link
							to="/resume.pdf"
							icon={HiDocumentText}
							onClick={() => close()}
							target="_blank"
						>
							Resume
						</Link>
					</Popover.Panel>
				</>
			)}
		</Popover>
	);
};

export default DropDown;
