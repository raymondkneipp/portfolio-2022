import { HiCheck, HiExclamationCircle } from 'react-icons/hi/index.js';
import React, { useRef, useState } from 'react';

import { AiOutlineLoading3Quarters } from 'react-icons/ai/index.js';
import emailjs from 'emailjs-com';

const ContactForm: React.FC = () => {
	const form = useRef();
	const [status, setStatus] = useState('idle');

	const handleSubmit = (e) => {
		e.preventDefault();

		setStatus('loading');

		emailjs
			.sendForm(
				import.meta.env.PUBLIC_EMAILJS_SERVICE,
				import.meta.env.PUBLIC_CONTACT_TEMPLATE,
				form.current,
				import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY
			)
			.then((res) => {
				form.current.reset();

				setStatus('success');
			})
			.catch((error) => {
				setStatus('error');
			});
	};

	return (
		<form
			className="space-y-3 max-w-lg flex flex-col mx-auto"
			onSubmit={handleSubmit}
			ref={form}
		>
			<label htmlFor="email" className="text-blue-400">
				Email
			</label>
			<input
				type="email"
				required={true}
				id="email"
				name="email"
				disabled={status !== 'idle'}
				className="flex-1 bg-transparent placeholder:text-blue-400/50 text-blue-400 focus:outline-none p-3 block border-2 border-blue-400/20 focus:border-blue-400 rounded-lg max-w-none disabled:cursor-not-allowed"
				placeholder="Email Address"
			/>
			<label htmlFor="message" className="text-blue-400">
				Message
			</label>
			<textarea
				id="message"
				required={true}
				minLength={10}
				name="message"
				disabled={status !== 'idle'}
				className="flex-1 bg-transparent placeholder:text-blue-400/50 text-blue-400 focus:outline-none p-3 block border-2 border-blue-400/20 focus:border-blue-400 rounded-lg max-w-none resize-none disabled:cursor-not-allowed"
				rows="4"
				placeholder="Your message"
			></textarea>
			<button
				type="submit"
				disabled={status !== 'idle'}
				value="Send Message"
				className="font-bold text-zinc-900 bg-blue-400 px-6 py-3 hover:bg-blue-300 transition rounded-lg cursor-pointer focus:outline-none focus-visible:ring focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 flex items-center justify-center disabled:bg-blue-400/75 disabled:cursor-not-allowed"
			>
				{status === 'loading' && (
					<span className="animate-spin">
						<AiOutlineLoading3Quarters size={24} />
					</span>
				)}
				{status === 'idle' && 'Send'}
				{status === 'success' && <HiCheck size={24} />}
				{status === 'error' && <HiExclamationCircle size={24} />}
			</button>
		</form>
	);
};

export default ContactForm;
