import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AccountPage from "./pages/AccountPage";
import CatalogPage from "./pages/CatalogPage";
import ProfilePage from "./pages/ProfilePage";
import reportWebVitals from "./reportWebVitals";
import { Amplify } from "aws-amplify";
import config from "./aws-exports";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";

Amplify.configure(config);

<BrowserRouter>
	<Routes>
		<Route path="/" element={<Layout />}>
			<Route index element={<App />} />
			<Route path="account-page" element={<AccountPage />} />
			<Route path="catalog-page" element={<CatalogPage />} />
			<Route path="profile-page" element={<ProfilePage />} />
		</Route>
	</Routes>
</BrowserRouter>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
