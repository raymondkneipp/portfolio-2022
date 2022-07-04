import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import {
	IoDiamond,
	IoFlashSharp,
	IoSearchSharp,
} from 'react-icons/io5/index.js';
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
				<div className="hidden sm:flex space-x-1.5 lg:space-x-3 p-3 items-center justify-center lg:px-6">
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
					<p className="indent-6">
						Your website needs to stand out amidst your vast competition.
						Something eye-catching, easy to use, and optimized for conversion.
						Your website is an extension of your business, and there is no
						one-size-fits-all template.
					</p>
				</TabPanel>
				<TabPanel
					icon={IoFlashSharp}
					title="Fast Load Times Leads to More Sales"
					color="amber"
				>
					<p className="indent-6">
						Load time is when you make your first impression. If your website is
						slow, you and your business look unprofessional. 40% of people will
						abandon a site if it takes longer than 3 seconds.
					</p>
				</TabPanel>
				<TabPanel
					icon={IoSearchSharp}
					title="Rank Higher Than Your Competitors"
					color="emerald"
				>
					<p className="indent-6">
						Organic search is most often the primary source of a website's
						traffic. Every time you are ranked lower than a competitor, you are
						losing money. Good search engine optimization is crucial to being
						successful.
					</p>
				</TabPanel>
			</Tab.Panels>
		</Tab.Group>
	);
};

export default Browser;
