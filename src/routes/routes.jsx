/** @format */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../components/Login";
import PrivateRoutes from "./PrivateRoutes";
import Services from "../pages/Services";
import SendMoney from "../pages/SendMoney";
import ConditionalRender from "./ConditionalRender";
import ConditionalRoutes from "./ConditionalRoutes";
const routes = createBrowserRouter([
	{
		path: "/",
		element: <ConditionalRender />,
		children: [...(<ConditionalRoutes />)],
		
		//  [
		// 	{
		// 		index: true,
		// 		element: <Home />,
		// 	},
		// 	{
		// 		path: "/login",
		// 		element: <Login />,
		// 	},
		// 	{
		// 		path: "/services",
		// 		element: (
		// 			<PrivateRoutes>
		// 				<Services />
		// 			</PrivateRoutes>
		// 		),
		// 	},
		// 	{
		// 		path: "/send-money",
		// 		element: (
		// 			<PrivateRoutes>
		// 				<SendMoney />
		// 			</PrivateRoutes>
		// 		),
		// 	},
		// ],
	},
]);
export default routes;
