/** @format */

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useRole = () => {
	const { user } = useAuth();
	const axios = useAxios();
	const { data, isPending } = useQuery({
		queryKey: ["user-role"],
		queryFn: async () => {
			const { data } = await axios.get(`/role/${user.phone}`);
			return data;
		},
	});
	return { role: data.role, isPending };
};

export default useRole;
