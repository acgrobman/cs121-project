import React, { Component } from 'react';
import { View, Text } from 'react-native';

/*** Placeholder component for a type of graph */
export default class Graph2 extends Component {
    render() {
        return (
            <View style={{backgroundColor: 'lime', flex: 1}}>
                <Text>Column Graph</Text>
            </View>
        );
    }
}