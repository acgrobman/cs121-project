import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class GraphsScreen extends Component {
    render () {
        return (
            <View
            style={{
              backgroundColor: 'blue',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 30 }}>
                Graphs {JSON.stringify(this.props.navigation.getParam('course', 'default course'))}
            </Text>
          </View>
        );
    }
}