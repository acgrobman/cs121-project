import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { FlatList } from 'react-navigation'

export default class RosterScreen extends Component {
  renderItem = ({ index }) => {
    return (
      <View style={{ height: 50 }}>
          <Text onPress={() => alert('Details of students nyi')}>
            Student {index}
          </Text>
      </View>
    );
  };
  
  render () {
    const data = new Array(150).fill("Test Student");
    //TODO: data needs to be somehow gotten to be the class lists
        return (
            <View
            style={{
              backgroundColor: 'green',
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            {/* Can get course id that was passed in though {JSON.stringify(this.props.navigation.getParam('course', 'default course'))}*/}
            <Text style={{ color: 'white', fontSize: 18 }}>Roster</Text>
            <View>
              {(data && data.constructor === Array && data.length === 0) ? <Text> Add a roster to get started</Text> : <Text></Text>}
              <FlatList
                data={data}
                renderItem={this.renderItem}
                contentContainerStyle={{flex: 1}}
                />
            </View>
          </View>
        );
    }
}