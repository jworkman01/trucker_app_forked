import "./App.css";
import "@aws-amplify/ui-react/styles.css";

import {
	withAuthenticator,
	Button,
	Heading,
	View,
	Card,
	Link,
} from "@aws-amplify/ui-react";

//import { HomePage } from './ui-components';

function App() {
	return (
		<View className="App">
			<Card>
				<Heading level={1}>Page Links:</Heading>
			</Card>
		</View>
	);
}
export default App;
