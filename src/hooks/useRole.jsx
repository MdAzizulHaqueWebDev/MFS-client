/** @format */

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useRole = () => {
	const { user, loading } = useAuth();
	const axios = useAxios();
	if (loading) return {};
	const { data, isPending } = useQuery({
		queryKey: ["user-role"],
		queryFn: async () => {
			const { data } = await axios.get(`/role/${user?.phone}`);
			return data;
		},
	});
	return { role: data, isPending };
};

export default useRole;
