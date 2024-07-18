/** @format */

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	const navLinks = (
		<div className="space-x-2">
			<NavLink to="/">
				<div class="inline-block rounded-lg px-2 py-1 border-b-2 font-semibold  text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 ">
					Home
				</div>
			</NavLink>
		</div>
	);
	return (
		<div className="h-16 mb-1 bg-slate-100">
			<header class="fixed inset-x-0 h-16 top-0 z-30 mx-auto max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg w-full md:rounded-3xl lg:max-w-screen-lg">
				<div class="px-4">
					<div class="flex items-center justify-between">
						<div class="flex shrink-0">
							<a aria-current="page" class="flex items-center" href="/">
								<img
									class="md:h-12 h-10 drop-shadow rounded w-auto"
									src="/logo.jpg"
									alt=""
								/>
								<p class="font-semibold mx-1 font-serif">PayPro</p>
							</a>
						</div>
						<div class="hidden md:flex md:items-center md:justify-center md:gap-5">
							{navLinks}
						</div>
						<div class="flex items-center justify-end gap-3">
							<Link
								to={"/login"}
								class="hidden lg:block items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50"
								href="/login"
							>
								Login
							</Link>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Navbar;
