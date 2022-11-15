import React from "react";
import { View, Card } from "@aws-amplify/ui-react";
import { ProfilePageComp } from "./../ui-components";

function ProfilePage() {
	return (
		<View className="ProfilePage">
			<Card>
				<ProfilePageComp />
			</Card>
		</View>
	);
}
export default ProfilePage;
