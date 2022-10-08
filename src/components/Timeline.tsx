import React from 'react';

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

type Event = {
	title: string;
	year: number;
	month?: number;
	content: string;
};

const sortByDate = (a: Event, b: Event) => {
	if (a.year !== b.year) {
		return a.year - b.year;
	} else {
		return a.month - b.month;
	}
};

const events: Event[] = [
	{
		title: 'Cub Scouts',
		year: 2007,
		content: 'I joined Pack 84.',
	},
	{
		title: 'Boy Scouts',
		year: 2011,
		content: 'I joined Troop 416 after getting my Arrow of Light.',
	},
	{
		title: 'HTML',
		year: 2013,
		month: 6,
		content: 'I began coding after searching for how to develop games.',
	},
	{
		title: 'CSS',
		year: 2013,
		month: 6,
		content:
			'I used inline styles on every element before I realized I could create a selector to target all the components I wanted to style.',
	},
	{
		title: 'First Website',
		year: 2013,
		month: 7,
		content: 'I used my newfound knowledge to create a family website.',
	},
	{
		title: 'JavaScript',
		year: 2014,
		month: 4,
		content:
			'I began to learn the basics of programming and the use of libraries, including JQuery.',
	},
	{
		title: 'Linux, Apache, MySQL, PHP',
		year: 2014,
		month: 9,
		content:
			'I began learning about authentication and persisting data via the LAMP stack.',
	},
	{
		title: 'Boy Scout Troop Website',
		year: 2015,
		month: 5,
		content:
			"I created a website for my Boy Scout Troop. Scouts were able to log in to check their scout account balances. The troop treasurer could log in and adjust the scout's balances.",
	},
	{
		title: 'College Courses',
		year: 2017,
		month: 12,
		content:
			"I received 32 credits by taking dual credit courses in my last year and a half of high school, focusing on software development, and I made the dean's list.",
	},
	{
		title: 'Angular',
		year: 2018,
		month: 2,
		content: 'I started learning this JavaScript framework.',
	},
	{
		title: 'React JS',
		year: 2018,
		month: 3,
		content:
			"I quickly fell in love with React because of Angular's steep learning curve.",
	},
	{
		title: 'Graduated High School',
		year: 2018,
		month: 5,
		content:
			'I graduated with an honors diploma and was inducted into the National Honors Society.',
	},
	{
		title: 'My First Job',
		year: 2018,
		month: 5,
		content: "I started working for Sam's Club.",
	},
	{
		title: 'Boot Camp',
		year: 2018,
		month: 10,
		content: 'I enlisted in the U.S. Marine Corps and went to boot camp.',
	},
	{
		title: 'Private First Class',
		year: 2019,
		month: 1,
		content:
			'I graduated boot camp and am now officially a United States Marine.',
	},
	{
		title: 'Marine Combat Training',
		year: 2019,
		month: 2,
		content:
			'The mission of this 29-day course is to train and conduct standards-based combat skills training of all non-infantry Marines to ensure that every Marine is a fighting Marine.',
	},
	{
		title: 'Beauty Bratz',
		year: 2019,
		month: 3,
		content: "I created a website for a family friend's salon using React.",
	},
	{
		title: 'EAA Chapter 174',
		year: 2019,
		month: 5,
		content:
			'I redesigned and maintained a website for a local flight enthusiast club.',
	},
	{
		title: 'Basic Electronics Course',
		year: 2019,
		month: 7,
		content:
			'I learned basic electricity, electronics, digital logic, computer operation, circuit principles, troubleshooting, and soldering.',
	},
	{
		title: 'Lance Corporal',
		year: 2019,
		month: 7,
		content: 'I got promoted!',
	},
	{
		title: 'Digital Wideband Repair Course',
		year: 2019,
		month: 10,
		content: 'I obtained the MOS Digital Wideband Systems Maintainer (2831).',
	},
	{
		title: 'SNHU',
		year: 2019,
		month: 12,
		content: 'I received 27 credits toward a B.S. in Computer Science.',
	},
	{
		title: "Al's Sweeper & Sewing Center",
		year: 2021,
		month: 1,
		content: 'I created an eCommerce site.',
	},
	{
		title: 'Deployed to Jordan',
		year: 2021,
		month: 5,
		content: 'I got deployed overseas to support the DJC2 mission.',
	},
	{
		title: 'Corporal',
		year: 2021,
		month: 6,
		content: 'Middle East promotion!',
	},
	{
		title: 'TypeScript',
		year: 2021,
		month: 8,
		content: 'I love type safety.',
	},
	{
		title: 'Relocated to Bahrain',
		year: 2021,
		month: 9,
		content: 'I was part of the embarking team that transported DJC2.',
	},
	{
		title: 'Awarded Gator of the Month',
		year: 2021,
		month: 10,
		content:
			'I was awarded for my work ethic, diligence, and excellent attitude during the establishment of the DJC2 suite, which positively affected every section of the DJC2 Detachment.',
	},
	{
		title: 'Awarded The Navy and Marine Corps Achievement Medal',
		year: 2021,
		month: 12,
		content:
			"I became an expert on the detachment's hawkeye satellite communications systems. I tested ports and signal flow between subsystems of the hawkeye, ultimately enabling over 1,800 hours of connectivity. I assisted in the diagnosis and repair of two generators valued at over $53,000. My technical acumen and timely reaction to a generator coolant leak kept the system operational, preventing any interruption to the detachment's communications mission of enabling command and control.",
	},
	{
		title: 'Alpost.org',
		year: 2022,
		month: 5,
		content:
			'I began working to provide American Legions with a better web solution.',
	},
];

const Timeline: React.FC = () => {
	return (
		<div className="flex flex-col gap-6 py-24 container mx-auto px-3">
			<h2 class="text-4xl text-neutral-100 font-heading text-center">
				A Timeline of my Life
			</h2>

			<div className="relative flex-col gap-12 hidden md:flex">
				{/* Vertical line */}
				<div className="w-px h-full bg-neutral-800 absolute inset-y-0 left-1/2"></div>

				{events.sort(sortByDate).map((event, i) => (
					<div className="grid grid-cols-[1fr_auto_1fr] gap-3" key={i}>
						{i % 2 === 0 ? (
							<div className="flex justify-end items-start">
								<div className="bg-blue-400 px-1.5 rounded-2xl text-neutral-900">
									{months[event.month - 1]} {event.year}
								</div>
							</div>
						) : (
							<div className="flex flex-col items-end gap-3">
								<h3 className="font-heading text-neutral-100">{event.title}</h3>
								<p className="bg-neutral-900 rounded-2xl p-3 text-neutral-300">
									{event.content}
								</p>
							</div>
						)}

						{/* Dot */}
						<div className="h-[9px] w-[9px] ml-px rounded-2xl bg-blue-400 mt-2 z-40"></div>

						{i % 2 === 0 ? (
							<div className="flex flex-col items-start gap-3">
								<h3 className="font-heading text-neutral-100">{event.title}</h3>
								<p className="bg-neutral-900 rounded-2xl p-3 text-neutral-300">
									{event.content}
								</p>
							</div>
						) : (
							<div className="flex justify-start items-start">
								<div className="bg-blue-400 px-1.5 rounded-2xl text-neutral-900">
									{months[event.month - 1]} {event.year}
								</div>
							</div>
						)}
					</div>
				))}
			</div>

			<div className="flex-col gap-12 flex md:hidden relative">
				<div className="w-px h-full bg-neutral-800 absolute inset-y-0 left-0"></div>
				{events.sort(sortByDate).map((event, i) => (
					<div className="flex flex-col gap-3 items-start" key={i}>
						<div className="flex items-center gap-3">
							<div className="h-[9px] w-[9px] shrink-0 ml-px rounded-2xl bg-blue-400 transform -translate-x-[5px]"></div>
							<span className="bg-blue-400 px-1.5 rounded-2xl text-neutral-900 text-center">
								{months[event.month - 1]} {event.year}
							</span>
							<h3 className="font-heading text-neutral-100">{event.title}</h3>
						</div>
						<p className="bg-neutral-900 rounded-2xl p-3 text-neutral-300 ml-[22px]">
							{event.content}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Timeline;
