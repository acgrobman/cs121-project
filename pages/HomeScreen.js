//This is heavily based on example code from
//https://aboutreact.com/react-native-navigation-drawer/

import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
// import all basic components
 
export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text> Home  Screen </Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});