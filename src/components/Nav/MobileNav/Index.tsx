import React from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
	IoChatbox,
	IoCodeSlash,
	IoHome,
	IoLogoGithub,
	IoLogoLinkedin,
	IoLogoReact,
	IoMail,
	IoMenu,
	IoNewspaper,
	IoPerson,
	IoReader,
} from 'react-icons/io5/index.js';
import Link from './Link/Index';

const MobileNav: React.FC = () => {
	return (
		<Popover className="relative sm:hidden">
			<Popover.Button className="text-zinc-100 p-3 hover:bg-zinc-800 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-cyan-500">
				<IoMenu size={24} />
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
					<Link to="/" icon={IoHome}>
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
					<Link to="/contact" icon={IoMail}>
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
					<Link to="/" icon={IoReader}>
						Resume
					</Link>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
};

export default MobileNav;
