import React from "react";
import { Amplify } from "aws-amplify";
import { withAuthenticator, Button, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function App({ signOut, user }) {
	// ...
	return (
		<div className="App">
			<Heading level={1}>Hello {user.username}</Heading>
			<Button onClick={signOut}>Sign out</Button>
			<h2>Amplify Todos</h2>
		</div>
	);
}

export default withAuthenticator(App);
