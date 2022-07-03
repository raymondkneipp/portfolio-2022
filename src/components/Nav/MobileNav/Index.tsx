import React from 'react';
import { Popover } from '@headlessui/react';
import {
	IoChatbox,
	IoCodeSlash,
	IoHome,
	IoLogoReact,
	IoMail,
	IoMenu,
	IoPerson,
	IoReader,
} from 'react-icons/io5';
import Link from './Link/Index';

const MobileNav: React.FC = () => {
	return (
		<Popover className="relative sm:hidden">
			<Popover.Button className="text-zinc-100 p-3 hover:bg-zinc-800 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-cyan-500">
				<IoMenu size={24} />
			</Popover.Button>

			<Popover.Panel className="absolute z-40 right-0 bg-zinc-800 p-3 flex flex-col rounded-lg w-56 shadow-lg mt-3">
				<Link to="/" icon={IoHome}>
					Home
				</Link>
				<Link to="/blog" icon={IoReader}>
					Blog
				</Link>
				<Link to="/about" icon={IoPerson}>
					About
				</Link>
				<Link to="/portfolio" icon={IoCodeSlash}>
					Portfolio
				</Link>
				<Link to="/contact" icon={IoMail}>
					Contact
				</Link>
			</Popover.Panel>
		</Popover>
	);
};

export default MobileNav;
