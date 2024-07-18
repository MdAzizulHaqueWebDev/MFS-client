/** @format */

const Loader = () => {
	return (
		<div className="min-h-screen w-dvh">
			<div class="flex flex-row gap-2">
				<div class="w-8 h-8 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
				<div class="w-8 h-8 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
				<div class="w-8 h-8 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
			</div>
		</div>
	);
};

export default Loader;
