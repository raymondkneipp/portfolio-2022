import {
	IoClose,
	IoCodeSlash,
	IoHome,
	IoLogoGithub,
	IoLogoLinkedin,
	IoMail,
	IoMenu,
	IoNewspaper,
	IoPerson,
	IoReader,
} from 'react-icons/io5/index.js';
import { Popover, Transition } from '@headlessui/react';

import Link from './Link/Index';
import React from 'react';

const MobileNav: React.FC = () => {
	return (
		<Popover className="relative sm:hidden z-40">
			{({ open }) => (
				<>
					<Popover.Button
						className="text-zinc-100 p-3 hover:bg-zinc-800 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-cyan-500"
						aria-label="menu"
					>
						{open ? (
							<IoClose size={24} aria-hidden="true" />
						) : (
							<IoMenu size={24} aria-hidden="true" />
						)}
					</Popover.Button>

					<Transition
						enter="transition duration-100 ease-out"
						enterFrom="transform scale-95 opacity-0"
						enterTo="transform scale-100 opacity-100"
						leave="transition duration-75 ease-out"
						leaveFrom="transform scale-100 opacity-100"
						leaveTo="transform scale-95 opacity-0"
					>
						<Popover.Panel className="absolute z-40 right-0 bg-zinc-800 p-3 flex flex-col rounded-lg w-56 shadow-lg mt-3">
							<Link to="/#" icon={IoHome}>
								Home
							</Link>
							<Link to="/blog" icon={IoNewspaper}>
								Blog
							</Link>
							<Link to="/#about" icon={IoPerson}>
								About
							</Link>
							<Link to="/#portfolio" icon={IoCodeSlash}>
								Portfolio
							</Link>
							<Link to="/#contact" icon={IoMail}>
								Contact
							</Link>
							<div className="bg-zinc-700 h-px my-3" />
							<Link
								to="https://www.linkedin.com/in/raymondkneipp/"
								icon={IoLogoLinkedin}
							>
								LinkedIn
							</Link>
							<Link to="https://github.com/raymondkneipp" icon={IoLogoGithub}>
								GitHub
							</Link>
							<Link to="/resume.pdf" icon={IoReader}>
								Resume
							</Link>
						</Popover.Panel>
					</Transition>
				</>
			)}
		</Popover>
	);
};

export default MobileNav;
