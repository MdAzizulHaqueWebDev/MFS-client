/** @format */

import React from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
	return (
		<div className="flex gap-2">
			<div className="text-3xl">sidebar</div>
			<Outlet />
		</div>
	);
};

export default Dashboard;
