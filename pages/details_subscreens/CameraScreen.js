import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class CameraScreen extends Component {
    render () {
        return (
            <View
            style={{
              backgroundColor: 'red',
              flex: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              {/*this is less than ideal, i'm trying to do box-in-box, hopefully when we have the styled components that will help*/}
              <View style = {{
                backgroundColor: 'goldenrod',
                padding: 10,
                margin: 10,
                flex: 97,
                width: 300
              }}>
                <Text style={{ color: 'white', fontSize: 30 }}>
                  Camera 
                  {JSON.stringify(this.props.navigation.getParam('course', 'default course'))}
               </Text>
              </View>
          </View>
        );
    }
}