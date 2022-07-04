import React, { useState } from 'react';
import { IoCheckmark, IoCopy } from 'react-icons/io5/index.js';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const CopyEmail: React.FC = () => {
	const [copied, setCopied] = useState(false);
	const [text, setText] = useState('hello@raymondkneipp.com');

	return (
		<div className="rounded-lg border-2 border-cyan-500/20 flex p-2 focus-within:border-cyan-500 transition max-w-lg mx-auto">
			<span className="flex-1 text-cyan-500 p-3">{text}</span>

			<CopyToClipboard
				text={text}
				onCopy={() => {
					setCopied(true);
					setTimeout(() => {
						setCopied(false);
					}, 5000);
				}}
			>
				<button className="font-bold p-3 hover:bg-zinc-800 transition rounded-lg cursor-pointer focus:outline-none text-cyan-500">
					{copied ? <IoCheckmark size={24} /> : <IoCopy size={24} />}
				</button>
			</CopyToClipboard>
		</div>
	);
};

export default CopyEmail;
