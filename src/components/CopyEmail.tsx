import React, { useState } from 'react';
import { IoCheckmark, IoCopy } from 'react-icons/io5/index.js';
import pkg from 'react-copy-to-clipboard';

const CopyEmail: React.FC = () => {
	const [copied, setCopied] = useState(false);
	const [text, setText] = useState('hello@raymondkneipp.com');

	const { CopyToClipboard } = pkg;

	return (
		<div
			className={`rounded-lg border-2 flex p-2 transition max-w-lg mx-auto ${
				copied ? 'border-cyan-500' : 'border-cyan-500/20'
			}`}
		>
			<span className="flex-1 text-cyan-500 p-3 select-all">{text}</span>

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
					className="font-bold p-3 hover:bg-zinc-800 transition rounded-lg cursor-pointer focus:outline-none text-cyan-500 disabled:bg-transparent disabled:cursor-not-allowed"
				>
					{copied ? <IoCheckmark size={24} /> : <IoCopy size={24} />}
				</button>
			</CopyToClipboard>
		</div>
	);
};

export default CopyEmail;
