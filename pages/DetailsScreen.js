// This is based on example code from 
// https://aboutreact.com/react-native-view-pager/
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import {IndicatorViewPager,  PagerDotIndicator} from 'rn-viewpager';

import CameraScreen from './details_subscreens/CameraScreen';
import RosterScreen from './details_subscreens/RosterScreen';
import GraphScreen from './details_subscreens/GraphsScreen';
import RemediationScreen from './details_subscreens/RemediationScreen';


export default class DetailsScreen extends Component {
  // Note: this.props.navigation.getParam('course', 'default course') has our course number

  render() {
    return (
      <View style={{ flex: 1}}>
        {/*Example of Dot Indicator*/}
        <IndicatorViewPager
          style={{ flex: 1 }}
          indicator={this._renderDotIndicator()}
          initialPage={1}>
          {/*_renderDotIndicator() will return the PagerDotIndicator*/}
          <View>          
            <CameraScreen navigation={this.props.navigation}/>
          </View>

          <View>          
            <RosterScreen navigation={this.props.navigation}/>
          </View>
          <View>          
            <GraphScreen navigation={this.props.navigation}/>
          </View>
          <View>          
            <RemediationScreen navigation={this.props.navigation}/>
          </View>
        </IndicatorViewPager>
      </View>
    );
  }

  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={4} />;
  }
}
