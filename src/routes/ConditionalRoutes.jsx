/** @format */

import Login from "../components/Login";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";

const ConditionalRoutes = () => {
	const { user } = useAuth();
	if (!user) {
		return [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/login",
				element: <Login />,
			},
		];
	}
};

export default ConditionalRoutes;
