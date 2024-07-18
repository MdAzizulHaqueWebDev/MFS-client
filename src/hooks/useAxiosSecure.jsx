/** @format */

import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:3000",
});
const useAxiosSecure = () => {
	// Add a request interceptor
	instance.interceptors.request.use(
		function (config) {
			// Do something before request is sent
			config.access_token = localStorage.getItem("token");
			return config;
		},
		function (error) {
			// Do something with request error
			console.log(error, "interceptors requst errro");
			return Promise.reject(error);
		},
	);

	// Add a response interceptor
	instance.interceptors.response.use(
		function (response) {
			return response;
		},
		function (error) {
			console.log(error, "interceptors response errro");
			return Promise.reject(error);
		},
	);
};

export default useAxiosSecure;
