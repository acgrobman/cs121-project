import React, { Component } from 'react';
import { View, Text } from 'react-native';

/*** Placeholder component for a type of graph */
export default class Graph3 extends Component {
    render() {
        return (
            <View style={{backgroundColor: 'pink', flex: 1}}>
                <Text>Line Graph</Text>
            </View>
        );
    }
}