import React from "react"
import * as Permissions from 'expo-permissions';
import { View, Text, YellowBox } from "react-native"
import Amplify from "aws-amplify"
import { withAuthenticator } from "aws-amplify-react-native"
import Navigator from "./Navigator"
import config from "./aws-exports"

Amplify.configure(config);

class App extends React.Component {
	state = {
		hasCameraPermission: null
	}

	async componentDidMount() {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasCameraPermission: status === 'granted' });
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
YellowBox.ignoreWarnings(['Unhandled Promise']);

export default App;//withAuthenticator(App, false);