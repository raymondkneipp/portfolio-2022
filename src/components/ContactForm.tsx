import React from 'react';

const ContactForm: React.FC = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('hello');
	};
	return (
		<form
			className="space-y-3 max-w-lg flex flex-col mx-auto"
			onSubmit={handleSubmit}
		>
			<label htmlFor="email" className="text-cyan-500">
				Email
			</label>
			<input
				type="email"
				id="email"
				className="flex-1 bg-transparent placeholder:text-cyan-500/50 text-cyan-500 focus:outline-none p-3 block border-2 border-cyan-500/20 focus:border-cyan-500 rounded-lg max-w-none"
				placeholder="Email Address"
			/>
			<label htmlFor="message" className="text-cyan-500">
				Message
			</label>
			<textarea
				id="message"
				className="flex-1 bg-transparent placeholder:text-cyan-500/50 text-cyan-500 focus:outline-none p-3 block border-2 border-cyan-500/20 focus:border-cyan-500 rounded-lg max-w-none resize-none"
				rows="4"
				placeholder="Your message"
			></textarea>
			<input
				type="submit"
				value="Send Message"
				className="font-bold text-zinc-900 bg-cyan-500 px-6 py-3 hover:bg-cyan-400 transition rounded-lg cursor-pointer focus:outline-none focus-visible:ring focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
			/>
		</form>
	);
};

export default ContactForm;
