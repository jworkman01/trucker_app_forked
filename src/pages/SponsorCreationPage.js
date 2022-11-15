import React from "react";
import { Heading, View, Card } from "@aws-amplify/ui-react";
import { SponsorCreateForm } from "./../ui-components";
import { Router } from "react-router-dom";
import { NavBar } from "../components/index";

function SponsorCreationPage() {
	return (
		<View className="SponsorCreationPage">
			<Card>
				<SponsorCreateForm />
			</Card>
		</View>
	);
}
export default SponsorCreationPage;
