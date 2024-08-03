/** @format */

import App from "../App";
import useAuth from "../hooks/useAuth";
import MainLayout from "../layout/MainLayout";

const ConditionalLayout = () => {
	const { user } = useAuth();
	if (user) {
		return <MainLayout />;
	} else {
		return <App />;
	}
};

export default ConditionalLayout;
