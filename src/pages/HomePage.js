import React from "react";
import { View, Card } from "@aws-amplify/ui-react";
import { HomepageFigma } from "./../ui-components";

function HomePage() {
	return (
		<View className="HomePage">
			<Card>
				<HomepageFigma />
			</Card>
		</View>
	);
}
export default HomePage;
