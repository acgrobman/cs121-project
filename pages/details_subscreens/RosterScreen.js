import React, { Component } from 'react';
import gql from 'graphql-tag';
import { View} from 'react-native';
import { FlatList } from 'react-navigation'
import { ListItem, Overlay, Button, Text, Input } from 'react-native-elements'
import { client } from '../../App';
import { getStudentsByCourseId } from '../../src/graphql/queries'
import Icon from 'react-native-vector-icons/Entypo'

class PlusSign extends Component {
  _addStudent() {
    alert("not implemented")
  }

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Icon name='plus' color='white' size={30} onPress={this._addStudent.bind(this)} />
      </View>
    );
  }
}

export default class RosterScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerRight: () =>(<PlusSign navigationProps={navigation} />) ,
  })

  constructor(props) {
    super(props);

    this.state = {isOverlayVisible: false, newStudentName: "", students: []};

    this._startAddStudent = this._startAddStudent.bind(this);
    this._endAddStudent = this._endAddStudent.bind(this);
    this._handleName = this._handleName.bind(this);
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
  
  _startAddStudent() {
    this.setState({isOverlayVisible: true});
  }
  
  _endAddStudent() {
    this.setState({isOverlayVisible: false});
    //this.list.push({
    //  name: this.state.newStudentName,
    //  avatar_url: 'https://vignette.wikia.nocookie.net/spongebob/images/d/d7/SpongeBob_stock_art.png/revision/latest?cb=20190921125147',
    // })
  }

  _handleName = (name) => {
    this.setState({newStudentName: name})
  }

  render () {

    return (
      <View>
        <Button title="Add Student" onPress={this._startAddStudent}/>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.students}
          renderItem={this.renderItem}
        />
        <Overlay isVisible={this.state.isOverlayVisible}>
          <Text h2>Add a Student</Text>
          <View style={{flex: 1, flexDirection: "column",justifyContent:"space-between"}}>
          <View>
            <Input 
              label="Name"
              placeholder="Student Name"
              onChangeText={this._handleName}
              />
          </View>
          <View>
          <Button 
            title="Submit"
            icon={
              <Icon name="check" color="white" size={15}/>
            }
            onPress={this._endAddStudent}/>
          </View>
         </View>
        </Overlay>
      </View>
    )
  }
    
}