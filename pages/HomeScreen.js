//This is heavily based on example code from
//https://aboutreact.com/react-native-navigation-drawer/

import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { View, Text } from 'react-native';
import gql from 'graphql-tag';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import { FlatList } from 'react-navigation'
import { ListItem } from 'react-native-elements'
import config from "../aws-exports"
import { getCoursesByTeacherId } from '../src/graphql/queries'

const client = new AWSAppSyncClient({
  url: config.aws_appsync_graphqlEndpoint,
  region: config.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: config.aws_appsync_apiKey,
  }
});
 
export default class HomeScreen extends Component {

  state = {
    courses: []
  }

  componentWillMount() {
    Auth.currentAuthenticatedUser().then(user => {
      client.query({
        query: gql(getCoursesByTeacherId),
        variables: {
          teacherId: user.username
        }
      }).then((data) => {
        this.setState({
          courses: data.data.getCoursesByTeacherId.map(({id, name}) => ({id, name}))
        });
      }).catch((e) => {
        console.log(e);
      });
    });
    
  }

  renderItem = ({ item }) => (
    <ListItem 
      title={item.name}
      onPress={() => this.props.navigation.navigate('Details', { courseId: item.id })}
      bottomDivider
      chevron
    />
  )

  keyExtractor = (item, index) => index.toString()

  render() {
    const { courses } = this.state;

    return (
      <View>
        {(courses && courses.length === 0) ? <Text> Add a course to get started</Text> : <Text></Text>}
        <FlatList
          data={courses}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          />
      </View>
    );
  }
}