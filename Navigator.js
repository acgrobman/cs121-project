// Tutorial code from https://aboutreact.com/react-native-navigation-drawer/
import React, { Component } from 'react';
//import react in our code.
import { View, Text, Linking } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { DrawerItems } from 'react-navigation-drawer';
import { ScrollView } from 'react-navigation'
import Icon from 'react-native-vector-icons/Entypo';
// import all basic components

//For React Navigation 4+
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './pages/HomeScreen';
import AddCourseScreen from './pages/AddCourseScreen';
import SettingsScreen from './pages/SettingsScreen';
import DetailsScreen from './pages/DetailsScreen';
import HelpScreen from './pages/HelpScreen.js';

class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Icon name='menu' color='white' size={30} onPress={this.toggleDrawer.bind(this)} />
      </View>
    );
  }
}

// Component for adding a course from HomeScreen
class NavBarPlusSign extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Icon name='plus' color='white' size={30} onPress={() => this.props.navigationProps.navigate("AddCourse")} />
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
    }),
  },
  AddCourse: {
    screen: AddCourseScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Add a Course',
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
      title: 'Add a Course',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#65bf90',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Help_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Page: {
    screen: HelpScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Help',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#65bf90',
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
        backgroundColor: '#65bf90',
      },
      headerTintColor: '#fff',
    }),
  },
});

const CustomDrawerContentComponent = props => (
    <SafeAreaView
      style={{flex: 1}}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <ScrollView contentContainerStyle={{justifyContent: 'space-between'}}>
        <DrawerItems {...props} />
      </ScrollView>
 
      <Text style={{padding: 20}} 
            onPress={()=>Linking.openURL('https://youtu.be/dQw4w9WgXcQ')}>
        Made with ❤️ by The BlunderCatz
      </Text>
    </SafeAreaView>
);

const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  HomeScreen: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: <Icon name='home' size={20}/>
    },
  },
  AddCourseScreen: {
    //Title
    screen: AddCourse_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Add Course',
      drawerIcon: <Icon name='plus' size={20}/>
    },
  },
  SettingsScreen: {
    //Title
    screen: Settings_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Settings',
      drawerIcon: <Icon name='cog' size={20}/>
    },
  },
  HelpScreen: {
    screen: Help_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Help',
      drawerIcon: <Icon name='help' size={20}/>
    }
  }
}, {
    contentComponent: CustomDrawerContentComponent,
});

export default createAppContainer(DrawerNavigatorExample);
