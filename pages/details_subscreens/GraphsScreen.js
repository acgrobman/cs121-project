import React, { Component } from 'react';
import { View } from 'react-native';
import { IndicatorViewPager, PagerDotIndicator } from 'rn-viewpager';
import Graph1 from './graphs/Graph1';
import Graph2 from './graphs/Graph2';
import Graph3 from './graphs/Graph3';

/** Screen component for page containing all graphs */
export default class GraphScreen extends Component {

  /** Renders the page */
  render() {
    return (
      <View style={{ flex: 1}}>
        <IndicatorViewPager
          style={{ flex: 1 }}
          indicator={this._renderDotIndicator()}>
          {/* All ViewPager children must be wrapped in Views 
          even if they themselves return a view */}
          <View><Graph1 /></View>
          <View><Graph2 /></View>
          <View><Graph3 /></View>
        </IndicatorViewPager>
      </View>
    );
  }

  /** Render the ViewPager indicator */
  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={3} />;
  }
}