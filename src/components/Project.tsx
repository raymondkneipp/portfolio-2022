import { HiExternalLink, HiLockClosed } from 'react-icons/hi/index.js';

import React from 'react';

type Props = {
	url: string;
	image: string;
	name: string;
	date: string;
	children: string;
	topics: string[];
	source: string | false;
	flip?: boolean;
};

export const Project: React.FC<Props> = ({
	url,
	image,
	name,
	date,
	children,
	topics,
	source,
	flip,
}) => {
	return (
		<div
			className={`flex flex-col gap-12 items-center ${
				flip ? 'sm:flex-row-reverse' : 'sm:flex-row'
			}`}
		>
			<a
				href={url}
				target="_blank"
				className="text-neutral-400 hover:text-neutral-100 transition select-all basis-1/2"
			>
				<img
					src={image}
					alt={`screenshot of ${name}`}
					className="rounded-2xl"
				/>
			</a>
			<div className="flex flex-col gap-3 basis-1/2">
				<div className="flex items-baseline gap-3">
					<h3 className="text-2xl text-neutral-100 capitalize font-heading font-semibold">
						{name}
					</h3>
					<span className="text-neutral-400 text-sm">{date}</span>
				</div>
				<a
					href={url}
					target="_blank"
					className="text-neutral-400 hover:text-neutral-100 transition select-all"
				>
					{url.replace(/^https?:\/\//, '').replace(/\/+$/, '')}
				</a>
				<p className="text-neutral-300">{children}</p>

				<div>
					{source === false ? (
						<div class="cursor-not-allowed text-neutral-400 flex gap-1 items-center justify-start">
							<HiLockClosed />
							<span>This is a private repository</span>
						</div>
					) : (
						<a
							href={source}
							target="_blank"
							className="text-blue-400 hover:text-blue-300 transition flex gap-1 items-center justify-start"
						>
							<HiExternalLink />
							<span>View source code on GitHub</span>
						</a>
					)}
				</div>

				<div className="flex items-center flex-wrap gap-3">
					{topics.map((topic) => (
						<a
							href={`https://github.com/topics/${topic.topic.name}`}
							className="text-sm bg-neutral-800 text-neutral-400 rounded-full py-1 px-2 hover:text-white transition"
						>
							{topic.topic.name}
						</a>
					))}
				</div>
			</div>
		</div>
	);
};
