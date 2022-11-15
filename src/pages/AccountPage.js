import React from "react";
import { AccountPageComp } from "./../ui-components";

import Amplify from "aws-amplify";
import aws_exports from "../aws-exports";
Amplify.configure(aws_exports);

function AccountPage() {
	return (
		<div>
			<AccountPageComp />
		</div>
	);
}

export default AccountPage;
