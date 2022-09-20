import {
	HiArrowRight,
	HiCheck,
	HiExclamationCircle,
} from 'react-icons/hi/index.js';
import React, { useRef, useState } from 'react';

import { AiOutlineLoading3Quarters } from 'react-icons/ai/index.js';
import emailjs from 'emailjs-com';

const EmailGrabber: React.FC = () => {
	const form = useRef();
	const [status, setStatus] = useState('idle');

	const handleSubmit = (e) => {
		e.preventDefault();

		setStatus('loading');

		emailjs
			.sendForm(
				import.meta.env.PUBLIC_EMAILJS_SERVICE,
				import.meta.env.PUBLIC_COUPON_TEMPLATE,
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
		<form className="space-y-3" ref={form} onSubmit={handleSubmit}>
			<label htmlFor="coupon" className="text-neutral-800 flex items-center">
				<span className="mr-3">
					Get <strong>25%</strong> off your next website
				</span>
				<HiArrowRight />
			</label>
			<div className="rounded-lg sm:border-2 border-neutral-900/20 flex sm:p-2 focus-within:border-neutral-900 transition flex-col sm:flex-row space-y-3 sm:space-y-0">
				<input
					type="email"
					id="coupon"
					name="email"
					disabled={status !== 'idle'}
					required={true}
					className="flex-1 bg-transparent placeholder:text-neutral-900/50 text-neutral-900 focus:outline-none p-3 block border-2 border-neutral-900/20 focus:border-neutral-900 rounded-lg sm:border-0 max-w-none disabled:cursor-not-allowed"
					placeholder="Email Address"
				/>
				<button
					type="submit"
					disabled={status !== 'idle'}
					className="font-bold text-blue-400 bg-neutral-900 px-6 py-3 hover:bg-neutral-800 transition focus-visible:ring focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-400 rounded-lg cursor-pointer focus:outline-none disabled:bg-neutral-900/75 disabled:cursor-not-allowed sm:basis-36 flex items-center justify-center"
				>
					{status === 'loading' && (
						<>
							<span className="animate-spin">
								<AiOutlineLoading3Quarters size={24} />
							</span>
						</>
					)}
					{status === 'idle' && 'Get Coupon'}
					{status === 'success' && <HiCheck size={24} />}
					{status === 'error' && <HiExclamationCircle size={24} />}
				</button>
			</div>
		</form>
	);
};

export default EmailGrabber;
