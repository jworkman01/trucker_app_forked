import React from "react";
import { Heading, View, Card } from "@aws-amplify/ui-react";

function HomePage() {
	return (
		<View className="HomePage">
			<Card>
				<Heading level={1}>Home Page</Heading>
			</Card>
		</View>
	);
}
export default HomePage;
