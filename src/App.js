import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import AccountPage from "./pages/AccountPage";
import CatalogPage from "./pages/CatalogPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//import { HomePage } from './ui-components';

function App() {
	return (
		<Router>
			<div className="App">
				<ul className="App-header">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/AccountPage">Account</Link>
					</li>
					<li>
						<Link to="/CatalogPage">Catalog</Link>
					</li>
				</ul>
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
				</Routes>
			</div>
		</Router>
	);
}
export default App;
