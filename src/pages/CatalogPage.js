import React from "react";
import ReactDOM from "react-dom/client";
import { Heading, View, Card } from "@aws-amplify/ui-react";
const CatalogPage = () => {
	return (
		<View className="CatalogPage">
			<Card>
				<Heading level={1}>Catalog Page</Heading>
			</Card>
		</View>
	);
};
export default CatalogPage;
