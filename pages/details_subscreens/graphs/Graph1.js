import React, { Component } from 'react';
import { View, Text } from 'react-native';

/*** Placeholder component for a type of graph */
export default class Graph1 extends Component {
    render() {
        return (
            <View style={{backgroundColor: 'blue', flex: 1}}>
                <Text>Bar Graph</Text>
            </View>
        );
    }
}