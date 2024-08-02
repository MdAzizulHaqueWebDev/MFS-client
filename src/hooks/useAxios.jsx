/** @format */

import axios from "axios";
const instance = axios.create({
	baseURL: "https://mfs-server-delta.vercel.app",
});
const useAxios = () => {
	return instance;
};

export default useAxios;
