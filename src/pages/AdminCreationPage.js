import React from "react";
import { Heading, View, Card } from "@aws-amplify/ui-react";
import { AdminCreateForm } from "./../ui-components";
import { Router } from "react-router-dom";
import { NavBar } from "../components/index";

function AdminCreationPage() {
	return (
		<View className="AdminCreationPage">
			<Card>
				<AdminCreateForm />
			</Card>
		</View>
	);
}
export default AdminCreationPage;
