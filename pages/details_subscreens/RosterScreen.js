import React, { Component } from 'react';
import gql from 'graphql-tag';
import { FlatList } from 'react-navigation'
import { ListItem } from 'react-native-elements'
import { client } from '../../App';
import { getStudentsByCourseId } from '../../src/graphql/queries'

export default class RosterScreen extends Component {

  state = {
    students: []
  }

  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      leftAvatar={{ source: { uri: item.picture } }}
      onPress={() => alert('student details not yet implemented')}
      bottomDivider
      chevron
    />
  )

  componentWillMount() {
    this.fetchRoster(this.props.navigation.state.params.courseId);
  }

  componentDidUpdate(prevProps) {
    const courseId = this.props.navigation.state.params.courseId;
    if (courseId != prevProps.navigation.state.params.courseId) {
      this.fetchRoster(courseId);
    }
  }

  fetchRoster(id) {
    client.query({
      query: gql(getStudentsByCourseId),
      variables: {
        courseId: id
      }
    }).then((data) => {
      this.setState({
        students: data.data.getStudentsByCourseId.map(({id, name, picture}) => ({id, name, picture}))
      });
    }).catch((e) => {
      console.log(e);
    });
  }

    
  keyExtractor = (item, index) => index.toString()

  list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    },
  ]
  
  
  render () {

    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.state.students}
        renderItem={this.renderItem}
      />
    )
  }
    
}