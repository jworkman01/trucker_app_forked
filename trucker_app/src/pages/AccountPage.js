import React from "react";
import ReactDOM from "react-dom/client";
import { Heading, View, Card } from "@aws-amplify/ui-react";

const AccountPage = () => {
	return (
		<View className="AccountPage">
			<Card>
				<Heading level={1}>Account Page</Heading>
			</Card>
		</View>
	);
};
export default AccountPage;
