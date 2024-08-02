/** @format */

import App from "../App";
import useAuth from "../hooks/useAuth";
import Dashboard from "../layout/Dashboard";

const ConditionalLayout = () => {
	const { user } = useAuth();
	if (user) {
		return <Dashboard />;
	} else {
		return <App />;
	}
};

export default ConditionalLayout;
