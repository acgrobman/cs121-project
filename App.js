import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  AsyncStorage
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Courses: {screen: CourseScreen},
});

const App = createAppContainer(MainNavigator);

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to course registration"
        onPress={() => navigate('Courses', {name: 'Courses Page'})}
      />
    );
  }
}

class CourseScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to course registration"
        onPress={() => navigate('Courses', {name: 'Courses Page'})}
      />
    );
  }
};

AppRegistry.registerComponent('App', () => App);