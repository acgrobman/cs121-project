// Tutorial code from https://aboutreact.com/react-native-navigation-drawer/
import React, { Component } from 'react';
//import react in our code.
import { View, Image, TouchableOpacity } from 'react-native';
// import all basic components

//For React Navigation 4+
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './pages/HomeScreen';
import AddCourseScreen from './pages/AddCourseScreen';
import SettingsScreen from './pages/SettingsScreen';
import DetailsScreen from './pages/DetailsScreen';

class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={require('./assets/drawer.png')}
            style={{ width: 25, height: 25, marginRight: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

// Component for adding a course from HomeScreen
class NavBarPlusSign extends Component {
  
  // Dummy on press function that currently does nothing
  addCourse = () => {
    alert('Feature not implemented');
  }

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.addCourse.bind(this)}>
          <Image
            source={require('./assets/add-plus-button.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Home Screen will be indexed here
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'PreSense',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerRight: <NavBarPlusSign navigationProps={navigation} />,
    }),
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Course Details',
      //headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
    }),
  },
},{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#65bf90',
    },
    headerTintColor: '#fff',
  }
});

const AddCourse_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: AddCourseScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Add Course',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Settings_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Settings',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  HomeScreen: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Home',
    },
  },
  AddCourseScreen: {
    //Title
    screen: AddCourse_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Add Course',
    },
  },
  SettingsScreen: {
    //Title
    screen: Settings_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Settings',
    },
  },
});

export default createAppContainer(DrawerNavigatorExample);
