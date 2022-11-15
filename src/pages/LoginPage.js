/* Import the Amplify Auth API */
import { Auth } from "aws-amplify";

function LoginPage() {
	/* Create the form state and form input state */
	let formState = "signUp";
	let formInputState = {
		username: "",
		password: "",
		email: "",
		verificationCode: "",
	};

	/* onChange handler for form inputs */
	function onChange(e) {
		formInputState = { ...formInputState, [e.target.name]: e.target.value };
	}
	/* Sign in function */
	async function signIn() {
		try {
			await Auth.signIn(formInputState.username, formInputState.password);
			/* Once the user successfully signs in, update the form state to show the signed in state */
			formState = "signedIn";
		} catch (err) {
			console.log({ err });
		}
	}
	/* If the form state is "signIn", show the sign in form */
	if (formState === "signIn") {
		return (
			<div>
				<input name="username" onChange={onChange} />
				<input name="password" onChange={onChange} />
				<button onClick={signIn}>Sign In</button>
			</div>
		);
	}

	/* If the form state is "signedIn", show the app */
	if (formState === "signedIn") {
		return (
			<div>
				<h1>Welcome to my app!</h1>
			</div>
		);
	}
}
export default LoginPage;
