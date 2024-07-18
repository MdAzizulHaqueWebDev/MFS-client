/** @format */

import App from "../App";
import useAuth from "../hooks/useAuth";
import Dashboard from "../layout/Dashboard";

const ConditionalRender = ({ children }) => {
	const { user } = useAuth();
	if (user) {
		return <Dashboard />;
	} else {
		return <App />;
	}
};

export default ConditionalRender;
