/** @format */
import { BiLockAlt, BiMoney } from "react-icons/bi";
import "./sendmoneybg.css";
const SendMoney = () => {
	return (
		<div className="custom-bg text-gray-200">
			<h1 className="text-4xl font-bold text-center font-mono my-2">
				Send Money
			</h1>
			<section className="border-t-4 border-b-2 drop-shadow shadow-neutral-800 bg-slate-600 bg-opacity-20 bg-transparent rounded-b-sm md:rounded-t-[120px] rounded-3xl py-5">
				<div className="max-w-xs mx-auto text-center space-y-2">
					<h3 className="font-bold text-xl ">Confirm Transfer</h3>
					<div className="relative text-gray-600">
						<span className="absolute start-0 bottom-3 dark:00">
							<BiMoney />
						</span>
						<input
							type="number"
							id="floating-phone-number"
							className="block py-2.5 ps-6 pe-0 w-full text-lg bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
							placeholder="Enter Your amount"
						/>
					</div>
					Amount
				</div>
				<section className="rounded-sm my-2 py-5">
					<form className="max-w-xs mx-auto text-center space-y-2 ">
						<div className="relative text-gray-600">
							<span className="absolute start-0 bottom-3 dark:00">
								<BiLockAlt />
							</span>
							<input
								type="password"
								id="floating-phone-number"
								className="block py-2.5 ps-6 pe-0 w-full text-lg bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
								pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
								placeholder="Enter Your pin"
							/>
						</div>
						<h5 className="font-bold ">Pin</h5>
						<button
							type="submit"
							className="font-semibold text-gray-900 px-12 hover:bg-emerald-500 py-2 rounded bg-emerald-300 transition"
						>
							Confirm
						</button>
					</form>
				</section>
			</section>
			<>
				<h2 className="text-xl font-bold">Transaction</h2>
				<section className="flex items-center gap-2 flex-wrap">
					<div class="w-fit px-6 py-6  text-center bg-gray-100 rounded-lg lg:mt-0 xl:px-10">
						<div class="space-y-4 xl:space-y-6">
							<img
								class="mx-auto rounded-full w-8"
								src="https://thispersondoesnotexist.com/images"
								alt="author avatar"
							/>
							<div class="space-y-2">
								<div class="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
									<h3 class="text-white">John Doe</h3>
								</div>
							</div>
						</div>
					</div>
					<div class="w-fit px-6 py-6  text-center bg-gray-100 rounded-lg lg:mt-0 xl:px-10">
						<div class="space-y-4 xl:space-y-6">
							<img
								class="mx-auto rounded-full w-8"
								src="https://thispersondoesnotexist.com/images"
								alt="author avatar"
							/>
							<div class="space-y-2">
								<div class="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
									<h3 class="text-white">John Doe</h3>
								</div>
							</div>
						</div>
					</div>
					<div class="w-fit px-6 py-6  text-center bg-gray-100 rounded-lg lg:mt-0 xl:px-10">
						<div class="space-y-4 xl:space-y-6">
							<img
								class="mx-auto rounded-full w-8"
								src="https://thispersondoesnotexist.com/images"
								alt="author avatar"
							/>
							<div class="space-y-2">
								<div class="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
									<h3 class="text-white">John Doe</h3>
								</div>
							</div>
						</div>
					</div>
				</section>
			</>
		</div>
	);
};

export default SendMoney;
