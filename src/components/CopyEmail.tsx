import { HiCheck, HiDuplicate } from 'react-icons/hi/index.js';
import React, { useState } from 'react';

import pkg from 'react-copy-to-clipboard';

const CopyEmail: React.FC = () => {
	const [copied, setCopied] = useState(false);
	const [text, setText] = useState('hello@raymondkneipp.com');

	const { CopyToClipboard } = pkg;

	return (
		<div
			className={`rounded-lg border-2 flex p-2 transition max-w-lg mx-auto focus-within:border-blue-400 ${
				copied ? 'border-blue-400' : 'border-blue-400/20'
			}`}
		>
			<a
				href={`mailto:${text}`}
				className="text-blue-400 p-3 select-all mr-auto focus:outline-none focus-visible:ring focus-visible:ring-blue-400 rounded-lg"
			>
				{text}
			</a>

			<CopyToClipboard
				text={text}
				onCopy={() => {
					setCopied(true);
					setTimeout(() => {
						setCopied(false);
					}, 5000);
				}}
			>
				<button
					disabled={copied}
					className="font-bold p-3 hover:bg-neutral-800 transition rounded-lg cursor-pointer focus:outline-none text-blue-400 disabled:bg-transparent disabled:cursor-not-allowed focus-visible:ring focus-visible:ring-blue-400"
				>
					{copied ? <HiCheck size={24} /> : <HiDuplicate size={24} />}
				</button>
			</CopyToClipboard>
		</div>
	);
};

export default CopyEmail;
