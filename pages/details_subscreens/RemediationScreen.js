// Based on example code from 
//https://github.com/lhandel/react-native-card-stack-swiper/blob/master/Example/App.js

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import { responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';

/** Screen for providing feedback to the facial recognition algorithm */
export default class RemediationScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CardStack
          style={styles.content}
          renderNoMoreCards={this._outOfCards}
          ref={swiper => {
            this.swiper = swiper
          }}
          onSwipedLeft={() => alert("Incorrect match")}
        >
          <Card style={[styles.card, styles.card1]}>
            <Text style={styles.label}>A</Text>
          </Card>
          <Card style={[styles.card, styles.card2]}>
            <Text style={styles.label}>B</Text>
          </Card>
          <Card style={[styles.card, styles.card1]}>
            <Text style={styles.label}>C</Text>
          </Card>
          <Card style={[styles.card, styles.card2]}>
            <Text style={styles.label}>D</Text>
          </Card>
          <Card style={[styles.card, styles.card1]}>
            <Text style={styles.label}>E</Text>
          </Card>
        </CardStack>
  
        {this._renderFooter()}
        </View>
    
    );
  }

  _renderFooter() {
    return(
      <View style={styles.footer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.red]}
            onPress={() => {this.swiper.swipeLeft();}}>
              <Image 
                source={require('./assets/red.png')}
                resizeMode={'contain'}
                style={{ height: 62, width: 62 }} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.button, styles.orange]} 
            onPress={() => {this.swiper.goBackFromLeft();}}>
              <Image 
              source={require('./assets/back.png')} 
              resizeMode={'contain'} 
              style={{ height: 32, width: 32, borderRadius: 5 }} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.button, styles.green]}
            onPress={() => {this.swiper.swipeRight();}}>
              <Image 
                source={require('./assets/green.png')} 
                resizeMode={'contain'} 
                style={{ height: 62, width: 62 }} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _outOfCards() {
    return (
    <Text style={{ fontWeight: '700', fontSize: 18, color: 'gray' }}>
      No more unmatched students! 🎉
    </Text>);
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
  },
  content:{
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    height: responsiveHeight(50),
    width: responsiveWidth(95),
    backgroundColor: '#FE474C',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
  },
  card1: {
    backgroundColor: '#FE474C',
  },
  card2: {
    backgroundColor: '#FEB12C',
  },
  label: {
    lineHeight: 400,
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  footer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonContainer:{
    width:220,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  button:{
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    zIndex: 0,
  },
  orange:{
    width:55,
    height:55,
    borderWidth:6,
    borderColor:'rgb(246,190,66)',
    borderRadius:55,
    marginTop:-15
  },
  green:{
    width:75,
    height:75,
    backgroundColor:'#fff',
    borderRadius:75,
    borderWidth:6,
    borderColor:'#01df8a',
  },
  red:{
    width:75,
    height:75,
    backgroundColor:'#fff',
    borderRadius:75,
    borderWidth:6,
    borderColor:'#fd267d',
  }
});