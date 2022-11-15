import React from "react";
import { View, Card } from "@aws-amplify/ui-react";
import { DriverCreation } from "./../ui-components";

function DriverCreationPage() {
	return (
		<View className="DriverCreationPage">
			<Card class="center">
				<DriverCreation />
			</Card>
		</View>
	);
}
export default DriverCreationPage;
