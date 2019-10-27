import React from 'react'
import { View, Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

// Some code based off of React Navigation tutorial
// https://reactnavigation.org/docs/en/hello-react-navigation.html

// Home page for the app
class HomeScreen extends React.Component {
    /*** Renders the home screen */
    render() {
        return (
            <View style={{ flex: 1,
                 alignItems: 'center',
                 justifyContent: 'center'}}>
                <Text>Home Screen</Text> 
                <Button 
                    title="Go To Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />   
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1,
                 alignItems: 'center',
                 justifyContent: 'center'}}>
                <Text>Details Screen</Text>
            </View>
        );
    }
}

// The navigation stack behaves like a history stack in a web browser
const AppNavigator = createStackNavigator(
    {
    Home: HomeScreen,
    Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home',
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}