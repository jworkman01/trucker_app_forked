import React from "react";
import { View, Card } from "@aws-amplify/ui-react";
import { AccountSelection } from "../ui-components";

function AccountSelectionPage() {
	return (
		<View className="AccountSelectionPage">
			<Card>
				<AccountSelection />
			</Card>
		</View>
	);
}
export default AccountSelectionPage;
