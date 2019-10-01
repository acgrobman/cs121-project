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

type State = {
  className: string,
  currentName: string
}
export default class App extends Component {

  public readonly state: State = {
    currentName: null,
    className: null
  }

  /* 
    grabs the value stored in '@Attendance:className, and changes our state
    value so that our text components have the correct name
  */
  async getKey() {
    try {
      const value = await AsyncStorage.getItem('@Attendance:className');
      this.setState({className: value});
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  }

  /*
    saves the 'currentName' state value in our AsyncStorage under
    '@Attendance:className'
  */
  async saveKey() {
    const value = this.state.currentName
    console.log(value)
    try {
      await AsyncStorage.setItem('@Attendance:className', value);
    } catch (error) {
      console.log("Error saving data" + error);
    }
  }

  /*
    Reset the value of both our local state and the stored state for the class
    name
  */
  async resetKey() {
    try {
      await AsyncStorage.removeItem('@Attendance:className');
      const value = await AsyncStorage.getItem('@Attendance:className');
      this.setState({className: value});
    } catch (error) {
      console.log("Error resetting data" + error);
    }
  }

  /*
    renders out our button interactions and text views
  */
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Attendance
        </Text>

        <TextInput
          onChangeText={(value) => this.setState({currentName: value})}
          style={styles.formInput}
          placeholder="Enter class name you want to save!"
          />

        <Button
          onPress={this.saveKey.bind(this)}
          title="Save Class Name"
          color="#2196f3"
          accessibilityLabel="Save Class Name"
        />

        <Text
          style={styles.header}
          >
          Class name: {this.state.className}
        </Text>

        <Button
          onPress={this.getKey.bind(this)}
          title="Get Class Name"
          color="#2196f3"
          accessibilityLabel="Get Class Name"
        />

        <Button
          onPress={this.resetKey.bind(this)}
          title="Reset"
          color="#f44336"
          accessibilityLabel="Reset"
        />

        <Text style={styles.instructions}>
          Stored class name is = {this.state.className}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  formInput: {
    paddingLeft: 5,
    height: 50,
    borderWidth: 1,
    borderColor: "#555555",
  },
  formButton: {
    borderWidth: 1,
    borderColor: "#555555",
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginTop: 5,
  },
  header: {
    marginBottom: 20,
    marginTop: 20,
    fontSize: 20
  }
});

AppRegistry.registerComponent('App', () => App);