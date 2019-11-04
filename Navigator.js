// Tutorial code from https://aboutreact.com/react-native-navigation-drawer/
import React, { Component } from 'react';
//import react in our code.
import { View, Image, TouchableOpacity, StyleSheet, Text, Linking } from 'react-native';
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
  
  // Dummy on press function that currently does nothing
  addCourse = () => {
    alert('Feature not implemented');
  }

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Icon name='plus' color='white' size={30} onPress={this.addCourse.bind(this)} />
      </View>
    );
  }
}

const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Home Screen will be indexed here
  First: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'PreSense',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerRight: <NavBarPlusSign navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
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

const CustomDrawerContentComponent = props => (
  
  <ScrollView contentContainerStyle={{justifyContent: 'space-between'}}>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <DrawerItems {...props} />
    </SafeAreaView>
    <SafeAreaView 
      style={styles.container}
      forceInset={{top: 'always', horizontal: 'never'}}
    >
      <Text style={{padding: 5}} onPress={()=>Linking.openURL('https://youtu.be/dQw4w9WgXcQ')}>
        Made with ❤️ by The BlunderCatz
      </Text>
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  HomeScreen: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: <Icon name='home' />
    },
  },
  AddCourseScreen: {
    //Title
    screen: AddCourse_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Add Course',
      drawerIcon: <Icon name='plus' />
    },
  },
  SettingsScreen: {
    //Title
    screen: Settings_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Settings',
      drawerIcon: <Icon name='cog' />
    },
  },
}, {
    contentComponent: CustomDrawerContentComponent,
});

export default createAppContainer(DrawerNavigatorExample);
