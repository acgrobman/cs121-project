// This is based on example code from 
// https://aboutreact.com/react-native-view-pager/
import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';

import CameraScreen from './details_subscreens/CameraScreen';
import RosterScreen from './details_subscreens/RosterScreen';
import GraphScreen from './details_subscreens/GraphsScreen';
import RemediationScreen from './details_subscreens/RemediationScreen';

const TabNavigator = createBottomTabNavigator({
  Camera: CameraScreen,
  Roster: RosterScreen,
  Graphs: GraphScreen,
  Remediation: RemediationScreen,
},
{
  defaultNavigationOptions:({ navigation }) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const { routeName } = navigation.state;
        let iconName;
        if(routeName === 'Camera') {
          iconName = 'camera';
        } else if(routeName === 'Roster') {
          iconName = 'graduation-cap';
        } else if(routeName === 'Graphs') {
          iconName = 'line-graph';
        } else if (routeName === 'Remediation') {
          iconName = 'images';
        }

        return <Icon name={iconName} size ={25} color={tintColor} />
      }
    }
  ),
  tabBarOptions: {
    activeTintColor: '#4d43e0',
  }
});

const AndroidTabNavigator = createMaterialBottomTabNavigator({
  Camera: CameraScreen,
  Roster: RosterScreen,
  Graphs: GraphScreen,
  Remediation: RemediationScreen,
},
{
  defaultNavigationOptions:({ navigation }) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const { routeName } = navigation.state;
        let iconName;
        if(routeName === 'Camera') {
          iconName = 'camera';
        } else if(routeName === 'Roster') {
          iconName = 'graduation-cap';
        } else if(routeName === 'Graphs') {
          iconName = 'line-graph';
        } else if (routeName === 'Remediation') {
          iconName = 'images';
        }

        return <Icon name={iconName} size ={25} color={tintColor} />
      }
    }
  ),
  tabBarOptions: {
    activeTintColor: '#4d43e0',
  }
});


export default createAppContainer(Platform.OS==='ios'?TabNavigator:AndroidTabNavigator);