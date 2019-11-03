import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class RosterScreen extends Component {
    render () {
        return (
            <View
            style={{
              backgroundColor: 'green',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 30 }}>
                Roster {JSON.stringify(this.props.navigation.getParam('course', 'default course'))}
            </Text>
          </View>
        );
    }
}