import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { FlatList } from 'react-navigation'
import { ListItem } from 'react-native-elements'

export default class RosterScreen extends Component {

  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={item.subtitle}
      leftAvatar={{ source: { uri: item.avatar_url } }}
      onPress={() => alert('student details not yet implemented')}
      bottomDivider
      chevron
    />
  )

    
  keyExtractor = (item, index) => index.toString()

  list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    },
  ]
  
  
  render () {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.list}
        renderItem={this.renderItem}
      />
    )
  }
    
}