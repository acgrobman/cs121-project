import React from "react"
import * as Permissions from 'expo-permissions';
import { View, Text, YellowBox } from "react-native"
import Amplify, { Hub, Analytics } from "aws-amplify"
import { withAuthenticator, AmplifyTheme } from "aws-amplify-react-native"
import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import Navigator from "./Navigator"
import config from "./aws-exports"

const MyButton = Object.assign({}, AmplifyTheme.button, { backgroundColor: '#65bf90' });
const MyTheme = Object.assign({}, AmplifyTheme, { button: MyButton });

Amplify.configure(config);
Analytics.disable();

export const client = new AWSAppSyncClient({
	url: config.aws_appsync_graphqlEndpoint,
	region: config.aws_appsync_region,
	auth: {
		type: AUTH_TYPE.API_KEY,
		apiKey: config.aws_appsync_apiKey,
	}
});

class App extends React.Component {
	state = {
		hasCameraPermission: null
	}

	async componentDidMount() {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasCameraPermission: status === 'granted' });

		Hub.listen('auth', (authData) => {
			if (authData.payload.event === 'signOut') {
			  this.props.onStateChange('signedOut', null);
			}
		});
	}

	render() {
		const { hasCameraPermission } = this.state;

		if (hasCameraPermission === null) {
			return <View />;
		} else if (hasCameraPermission === false) {
			return <Text>We need access to the camera to take attendance!</Text>;
		}

		return (
			<Navigator />
		);
	}
}

// Prevent warning caused by AWS Amplify analytics from displaying
YellowBox.ignoreWarnings(['Require cycle', 'Failed prop type']);

export default withAuthenticator(App, {includeGreetings: false, usernameAttributes: 'email'}, [], null, MyTheme, {});