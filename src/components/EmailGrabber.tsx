import React from 'react';
import { IoArrowForward } from 'react-icons/io5/index.js';

const EmailGrabber: React.FC = () => {
	return (
		<form className="space-y-3">
			<label htmlFor="coupon" className="text-zinc-800 flex items-center">
				<span className="mr-3">Get 25% off your next website</span>
				<IoArrowForward />
			</label>
			<div className="rounded-lg sm:border-2 border-zinc-900/20 flex sm:p-2 focus-within:border-zinc-900 transition flex-col sm:flex-row space-y-3 sm:space-y-0">
				<input
					type="email"
					id="coupon"
					className="flex-1 bg-transparent placeholder:text-zinc-900/50 text-zinc-900 focus:outline-none p-3 block border-2 border-zinc-900/20 focus:border-zinc-900 rounded-lg sm:border-0 max-w-none"
					placeholder="Email Address"
				/>
				<input
					type="submit"
					value="Get Coupon"
					className="font-bold text-cyan-500 bg-zinc-900 px-6 py-3 hover:bg-zinc-800 transition focus-visible:ring focus-visible:ring-zinc-900 focus-visible:ring-offset-2 focus-visible:ring-offset-cyan-500 rounded-lg cursor-pointer focus:outline-none"
				/>
			</div>
		</form>
	);
};

export default EmailGrabber;
