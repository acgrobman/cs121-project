import React from "react"
import { StyleSheet, YellowBox } from "react-native"
import Amplify from "aws-amplify"
import { withAuthenticator, AmplifyTheme } from "aws-amplify-react-native"
import Navigator from "./Navigator"
import config from "./aws-exports"

const MyButton = Object.assign({}, AmplifyTheme.button, { backgroundColor: '#65bf90' });
const MyTheme = Object.assign({}, AmplifyTheme, { button: MyButton });

Amplify.configure(config);

class App extends React.Component {
	render() {
		return (
			<Navigator />
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});

// Prevent warning caused by AWS Amplify analytics from displaying
YellowBox.ignoreWarnings(['Unhandled Promise']);

export default withAuthenticator(App, {includeGreetings: false, usernameAttributes: 'email'}, [], null, MyTheme, {});

//Does neither
/*export default withAuthenticator(App, {
	includeGreetings: false,
	authenticatorComponents: [],
	federated: null,
	theme: {MyTheme},
	signUpConfig: {usernameAttributes: 'email' }
});*/
	
//Does theme
//export default withAuthenticator(App, false,[],null,MyTheme, {usernameAttributes: 'email' });

//Does theme
//export default withAuthenticator(App, false, [], null, MyTheme);

//Does username
//export default withAuthenticator(App, {usernameAttributes: 'email' })

// Does username
//export default withAuthenticator(App, {usernameAttributes: 'email'}, MyTheme);