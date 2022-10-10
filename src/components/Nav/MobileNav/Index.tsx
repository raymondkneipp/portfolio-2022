import {
	HiCollection,
	HiDocumentText,
	HiHome,
	HiMail,
	HiMenu,
	HiPencil,
	HiUser,
	HiX,
} from 'react-icons/hi/index.js';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5/index.js';

import Link from './Link/Index';
import { Popover } from '@headlessui/react';
import React from 'react';

const MobileNav: React.FC = () => {
	return (
		<Popover className="static sm:hidden z-40">
			{({ open }) => (
				<>
					<Popover.Button
						className="z-50 relative text-neutral-100 p-3 hover:bg-neutral-900 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-blue-400"
						aria-label="menu"
					>
						{open ? (
							<HiX size={24} aria-hidden="true" />
						) : (
							<HiMenu size={24} aria-hidden="true" />
						)}
					</Popover.Button>

					<Popover.Overlay className="fixed inset-0 bg-black opacity-80 z-10" />

					<Popover.Panel className="absolute z-40 left-0 right-0 top-full bg-neutral-900 p-3 m-3 rounded-lg shadow-lg grid grid-cols-2">
						<Link to="/#" icon={HiHome}>
							Home
						</Link>
						<Link to="/blog" icon={HiPencil}>
							Blog
						</Link>
						<Link to="/about" icon={HiUser}>
							About
						</Link>
						<Link to="/#website-projects" icon={HiCollection}>
							Projects
						</Link>
						<Link to="/#contact" icon={HiMail}>
							Contact
						</Link>
						<div className="bg-neutral-800 h-px my-3 col-span-full" />
						<Link
							to="https://www.linkedin.com/in/raymondkneipp/"
							icon={IoLogoLinkedin}
						>
							LinkedIn
						</Link>
						<Link to="https://github.com/raymondkneipp" icon={IoLogoGithub}>
							GitHub
						</Link>
						<Link to="/resume.pdf" icon={HiDocumentText}>
							Resume
						</Link>
					</Popover.Panel>
				</>
			)}
		</Popover>
	);
};

export default MobileNav;
