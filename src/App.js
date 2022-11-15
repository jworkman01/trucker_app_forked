import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import AccountPage from "./pages/AccountPage";
import CatalogPage from "./pages/CatalogPage";
import UserHomePage from "./pages/UserHomePage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import AccountSelectionPage from "./pages/AccountSelectionPage";
import LoginPage from "./pages/LoginPage";
import DriverCreationPage from "./pages/DriverCreationPage";
import ReactDOM from "react-dom/client";

import PurchaseHistoryPage from "./pages/PurchaseHistoryPage";
import ManagePurchasesPage from "./pages/ManagePurchasesPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NavBar } from "./ui-components";

function App() {
	return (
		<Router>
			<NavBar />
			<div className="App">
				<Routes>
					<Route exact path="/" element={<HomePage />}></Route>
					<Route
						exact
						path="/AccountPage"
						element={<AccountPage />}
					></Route>
					<Route
						exact
						path="/CatalogPage"
						element={<CatalogPage />}
					></Route>
					<Route
						exact
						path="/ProfilePage"
						element={<ProfilePage />}
					></Route>
					<Route
						exact
						path="/UserHomePage"
						element={<UserHomePage />}
					></Route>
					<Route
						exact
						path="/PurchaseHistoryPage"
						element={<PurchaseHistoryPage />}
					></Route>
					<Route
						exact
						path="/ManagePurchasesPage"
						element={<ManagePurchasesPage />}
					></Route>
					<Route
						exact
						path="/AccountSelectionPage"
						element={<AccountSelectionPage />}
					></Route>
					<Route
						exact
						path="/LoginPage"
						element={<LoginPage />}
					></Route>
					<Route
						exact
						path="/DriverCreationPage"
						element={<DriverCreationPage />}
					></Route>
				</Routes>
			</div>
		</Router>
	);
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HomePage />);
export default App;
