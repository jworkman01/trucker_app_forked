import React from "react";
import { View, Card, withAuthenticator } from "@aws-amplify/ui-react";
import { HomepageFigma } from "../ui-components";

function HomePage({ signOut, user }) {
	return (
		<View className="HomePage">
			<Card>
				<HomepageFigma />
				<button onClick={signOut}>Sign out</button>
			</Card>
		</View>
	);
}
export default withAuthenticator(HomePage);
