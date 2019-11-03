// This is based on example code from 
// https://aboutreact.com/react-native-view-pager/
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import {IndicatorViewPager,  PagerDotIndicator} from 'rn-viewpager';

export default class DetailsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        {/*Example of Dot Indicator*/}
        <IndicatorViewPager
          style={{ flex: 1 }}
          indicator={this._renderDotIndicator()}>
          {/*_renderDotIndicator() will return the PagerDotIndicator*/}
          <View
            style={{
              backgroundColor: '#C70039',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 30 }}>One {JSON.stringify(this.props.navigation.getParam('course', 'default course'))}</Text>
          </View>
          <View
            style={{
              backgroundColor: '#FF5733',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 30 }}>Two</Text>
          </View>
          <View
            style={{
              backgroundColor: '#FFC300',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 30 }}>Three</Text>
          </View>
        </IndicatorViewPager>
      </View>
    );
  }

  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={3} />;
  }
}
