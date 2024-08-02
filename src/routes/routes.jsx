/** @format */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../components/Login";
import PrivateRoutes from "./PrivateRoutes";
import Services from "../pages/Services";
import SendMoney from "../pages/SendMoney";
import ConditionalLayout from "./ConditionalLayout";
import ConditionalRoutes from "./ConditionalRoutes";
import Cashout from "../pages/userDashboard/Cashout/Cashout";
import CashIn from "../pages/userDashboard/CashIn/CashIn";
import UserDashboard from "../pages/userDashboard/UserDashboard";
const routes = createBrowserRouter([
	{
		path: "/",
		element: <ConditionalLayout />,
		errorElement: <h1 className="text-9xl font-bold">Sorry , page not found</h1>,
		children: [
			{
				index: true,
				element: (
					<ConditionalRoutes>
						<Services />
					</ConditionalRoutes>
				),
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/services",
				element: (
					<PrivateRoutes>
						<Services />
					</PrivateRoutes>
				),
			},
			{
				path: "/send-money",
				element: (
					<PrivateRoutes>
						<SendMoney />
					</PrivateRoutes>
				),
			},
			{
				path: "/cash-out",
				element: (
					<PrivateRoutes>
						<Cashout />
					</PrivateRoutes>
				),
			},
			{
				path: "/cash-in",
				element: (
					<PrivateRoutes>
						<CashIn />
					</PrivateRoutes>
				),
			},
			{
				path: "/dashboard",
				element: (
					<PrivateRoutes>
						<UserDashboard />
					</PrivateRoutes>
				),
			},
		],
	},
]);
export default routes;
