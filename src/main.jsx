/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./Auth/AuthProvider.jsx";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={routes} />
		</AuthProvider>
		<Toaster position="top-right" reverseOrder={true} />
	</React.StrictMode>,
);
