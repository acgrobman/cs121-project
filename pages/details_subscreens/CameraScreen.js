import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class CameraScreen extends Component {
    render () {
        return (
            <View
            style={{
              backgroundColor: 'red',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 30 }}>
              Camera 
              {JSON.stringify(this.props.navigation.getParam('course', 'default course'))}
            </Text>
          </View>
        );
    }
}