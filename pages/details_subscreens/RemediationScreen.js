import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper'

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'blue',
    width: Dimensions.get('window').width - 4,
    height: Dimensions.get('window').width - 4,
  },
  label:{

  },
  content: {
    backgroundColor: 'green',
  }
}) 

export default class RemediationScreen extends Component {
  render () {
        return (
            <View
            style={{
              backgroundColor: 'yellow',
              flex: 1,
            }}>
              <CardStack 
                style={styles.content} 
                disableTopSwipe={true}
                disableBottomSwipe={true}
                ref={swiper => { this.swiper = swiper }}>
                  <Card style={[styles.card]}>
                    <Text style={styles.label}>A</Text>
                  </Card>
                  <Card style={[styles.card]}>
                    <Text style={styles.label}>B</Text>
                  </Card>
                  <Card style={[styles.card]}>
                    <Text style={styles.label}>C</Text>
                  </Card>
                </CardStack>
          </View>
        );
    }

}