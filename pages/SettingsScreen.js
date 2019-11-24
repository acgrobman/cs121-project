//This is based on example code from 
// https://aboutreact.com/react-native-navigation-drawer/

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Auth } from 'aws-amplify';
import { Button } from 'react-native-elements';
 
export default class Settings extends Component {
  //Screen3 Component
  render() {
    return (
      <View style={styles.MainContainer}>
        <Button title="Sign out" onPress={() => Auth.signOut()} />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});