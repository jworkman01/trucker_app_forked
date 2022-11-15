import React from "react";
import { View, Card } from "@aws-amplify/ui-react";
import { UserHomepageFigma } from "./../ui-components";

function UserHomepage() {
	return (
		<View className="UserHomepage">
			<Card>
				<UserHomepageFigma />
			</Card>
		</View>
	);
}
export default UserHomepage;
