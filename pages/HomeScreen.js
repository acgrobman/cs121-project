//This is heavily based on example code from
//https://aboutreact.com/react-native-navigation-drawer/

import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
// import all basic components

import { FlatList } from 'react-navigation'
import { TouchableOpacity } from 'react-native-gesture-handler';
 
export default class HomeScreen extends Component {
  renderItem = ({ index }) => {
    return (
      <View style={{ height: 50 }}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', { course: index })}>
          <Text>Item {index}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  render() {
    const data = new Array(3).fill("Test")
    //TODO: data needs to be somehow gotten to be the class lists
    return (
      <View>
        {(data && data.constructor === Array && data.length === 0) ? <Text> Add a course to get started</Text> : <Text></Text>}
        <FlatList
          data={data}
          renderItem={this.renderItem}
          contentContainerStyle={{padding: 10}}
          />
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