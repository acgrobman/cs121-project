import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Amplify from "aws-amplify"
import { withAuthenticator } from "aws-amplify-react-native"
import Navigator from "./Navigator"
import config from "./aws-exports"

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

export default withAuthenticator(App, true);