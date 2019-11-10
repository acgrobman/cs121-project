//This is heavily based on example code from
//https://aboutreact.com/react-native-navigation-drawer/

import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { FlatList } from 'react-navigation'
import { ListItem } from 'react-native-elements'
 
export default class HomeScreen extends Component {
  renderItem = ({ index }) => (
    <ListItem 
      title={'Course ' + index}
      onPress={() => this.props.navigation.navigate('Details', { course: index })}
      bottomDivider
      chevron
    />
  )
  
  render() {
    const data = new Array(3).fill("Test")
    //TODO: data needs to be somehow gotten to be the class lists
    return (
      <View>
        {(data && data.constructor === Array && data.length === 0) ? <Text> Add a course to get started</Text> : <Text></Text>}
        <FlatList
          data={data}
          renderItem={this.renderItem}
          />
      </View>
    );
  }
}