import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import { IoDiamond, IoFlashSharp, IoSearchSharp } from 'react-icons/io5';
import BrowserTab from './BrowserTab/Index';
import Dot from './Dot/Index';
import URL from './URL/Index';
import TabPanel from './TabPanel/Index';

const Browser: React.FC = () => {
	const pages = ['custom', 'speed', 'seo'];
	const [page, setPage] = useState(pages[0]);

	return (
		<Tab.Group
			className="flex flex-col rounded-2xl bg-zinc-800/50 shadow-lg sm:mx-12 md:mx-0 md:absolute right-0 left-1/2 md:rounded-r-none overflow-hidden"
			as="div"
			onChange={(index) => setPage(pages[index])}
		>
			<Tab.List className="flex items-center pt-3 px-3 sm:pl-0">
				<div className="hidden sm:flex space-x-1.5 lg:space-x-3 p-3 items-center justify-center">
					<Dot />
					<Dot />
					<Dot />
				</div>
				<BrowserTab icon={IoDiamond} color="cyan">
					Custom
				</BrowserTab>
				<BrowserTab icon={IoFlashSharp} color="amber">
					Speed
				</BrowserTab>
				<BrowserTab icon={IoSearchSharp} color="emerald">
					SEO
				</BrowserTab>
			</Tab.List>
			<URL>{page}</URL>
			<Tab.Panels>
				<TabPanel
					icon={IoDiamond}
					title="Stand Out Among Cookie Cutter Websites"
					color="cyan"
				>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
						consequuntur repellat! Quaerat officiis temporibus maiores
						consectetur veritatis, sint, expedita nisi commodi debitis, est ad
						odio. Doloremque tempora consequuntur quo eius.
					</p>
				</TabPanel>
				<TabPanel
					icon={IoFlashSharp}
					title="Fast Load Times Leads to More Sales"
					color="amber"
				>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
						consequuntur repellat! Quaerat officiis temporibus maiores
						consectetur veritatis, sint, expedita nisi commodi debitis, est ad
						odio. Doloremque tempora consequuntur quo eius.
					</p>
				</TabPanel>
				<TabPanel
					icon={IoSearchSharp}
					title="Rank Higher Than Your Competitors"
					color="emerald"
				>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
						consequuntur repellat! Quaerat officiis temporibus maiores
						consectetur veritatis, sint, expedita nisi commodi debitis, est ad
						odio. Doloremque tempora consequuntur quo eius.
					</p>
				</TabPanel>
			</Tab.Panels>
		</Tab.Group>
	);
};

export default Browser;
