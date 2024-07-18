/** @format */
import { ImSpinner9 } from "react-icons/im";
import { useContext, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Register = () => {
	const { createUser } = useContext(AuthContext);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const handleSubmit = async (event) => {
		event.preventDefault();
		setLoading(true);
		const form = event.target;
		const name = form.name.value;
		const phone = form.phone.value;
		const pin = form.pin.value;
		try {
			const { insertedId, acknowledged } = await createUser(name, phone, pin);
			if (insertedId && acknowledged) {
				setLoading(false);
				toast.success("Account created successfully");
				form.reset();
				navigate("/login")
			} else {
				toast.error("Sorry Account not created");
			}
		} catch (error) {
			if (error.response.status === 400 || error) {
				toast.error(error.response.data?.message || error.message);
				setLoading(false);
			}
		}
	};

	return (
		<>
			<div className="h-scree p-4 dark:bg-gray-900">
				<div className="flex justify-center items-center justify-items-center my-auto ">
					<div className="w-full mx-auto lg:w-2/4 bg-gray-50 bg-opacity-65 backdrop-blur-sm backdrop-saturate-200 border border-gray-300 border-opacity-30   dark:bg-gray-700 p-5 rounded-lg">
						<h3 className="py-2 text-2xl text-center text-gray-800 dark:text-white">
							Create an Account!
						</h3>
						<form
							onSubmit={handleSubmit}
							className="px-8 pt-6 pb-8 dark:bg-gray-800 rounded"
						>
							<div className="mb-4 md:flex md:justify-around">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label
										className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
										htmlFor="phone"
									>
										Phone Number
									</label>
									<input
										required
										name="number"
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="phone"
										type="number"
										placeholder="Your Phone Number"
									/>
								</div>
								<div className="md:ml-2">
									<label
										className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
										htmlFor="lastName"
									>
										User Name
									</label>
									<input
										required
										name="name"
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="UserName"
										type="text"
										placeholder="Your Name"
									/>
								</div>
							</div>
							<div className="mb-4 md:flex md:justify-around">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label
										className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
										htmlFor="pin"
									>
										Pin
									</label>
									<input
										required
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="pin"
										type="password"
										name="pin"
										// pattern="\d*"
										title="Please enter a numeric value"
										inputMode="numeric"
										pattern="[0-9]*"
										placeholder="******************"
									/>
								</div>
							</div>
							{/* <div className="mb-4 lg:ml-5 md:ml-[90px]">
								<div className="p-1 bg-white">
									<div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
										<div className="md:flex">
											<div className="w-full p-3">
												<div className="relative border-dotted h-12 rounded-lg  border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
													<div className="absolute">
														<div className="flex flex-col items-center">
															<MdFolder />
															<p className="block text-gray-400 font-normal">
																Attach you image here
															</p>
														</div>
													</div>

													<input
														required
														type="file"
														className="h-full w-full opacity-0"
														name="image"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div> */}
							<div className="mb-6 text-center">
								<button
									disabled={loading}
									type="submit"
									className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
								>
									{loading ? (
										<div className="flex justify-center">
											<ImSpinner9 className="animate-spin text-center" />
										</div>
									) : (
										"Create Account"
									)}
								</button>
							</div>
							<hr className="mb-1 border-t" />
						</form>
						<div className="text-center">
							{/* <Link
								className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
								// to={"/login"}
							>
								Already have an account? Login!
							</Link> */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
