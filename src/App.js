import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ResponsiveNavBarT24 } from "./ui-components";
import AccountPage from "./pages/AccountPage";
import CatalogPage from "./pages/CatalogPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import PurchaseHistoryPage from "./pages/PurchaseHistoryPage";
import ManagePurchasesPage from "./pages/ManagePurchasesPage";

function App() {
	return (
		<Router>
			<ResponsiveNavBarT24 />
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
						path="/HomePage"
						element={<HomePage />}
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
				</Routes>
			</div>
		</Router>
	);
}
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<HomePage />);
export default App;
