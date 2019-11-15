import React from "react"
import { ThemeProvider } from 'styled-components'
import { StyleSheet, YellowBox } from "react-native"
import Amplify from "aws-amplify"
import { withAuthenticator } from "aws-amplify-react-native"
import Navigator from "./Navigator"
import config from "./aws-exports"
import theme from "./assets/theme"

Amplify.configure(config);

class App extends React.Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<Navigator />
			</ThemeProvider>
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

export default withAuthenticator(App, false);