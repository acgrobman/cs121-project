import React, { Component } from 'react';
import gql from 'graphql-tag';
import { View, RefreshControl } from 'react-native';
import { FlatList } from 'react-navigation'
import { ListItem, Overlay, Button, Text, Input } from 'react-native-elements'
import { client } from '../../App';
import { getStudentsByCourseId } from '../../src/graphql/queries'
import { createStudent } from '../../src/graphql/mutations'
import Icon from 'react-native-vector-icons/Entypo'
import * as DocumentPicker from 'expo-document-picker'
import * as FileSystem from 'expo-file-system'

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

    this.state = {isOverlayVisible: false, newStudentName: "", students: [], refreshing: false};

    this._startAddStudent = this._startAddStudent.bind(this);
    this._endAddStudent = this._endAddStudent.bind(this);
    this._handleName = this._handleName.bind(this);
    this._uploadRoster = this._uploadRoster.bind(this);
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
    this.fetchRoster();
  }

  componentDidUpdate(prevProps) {
    if (this.props.navigation.state.params.courseId != prevProps.navigation.state.params.courseId) {
      this.fetchRoster();
    }
  }

  fetchRoster(cache = "cache-first") {
    const id = this.props.navigation.state.params.courseId;
    client.query({
      query: gql(getStudentsByCourseId),
      variables: {
        courseId: id
      },
      fetchPolicy: cache
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

   /** Generate course id, borrowed from https://www.w3resource.com/javascript-exercises/javascript-function-exercise-20.php */
   _generateId() {
    var text = "";
    var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i=0; i < 64; i++ ) {  
      text += char_list.charAt(Math.floor(Math.random() * char_list.length));
    }
    return text;
  }
  _endAddStudent() {
    this.setState({isOverlayVisible: false});
    const courseId = this.props.navigation.state.params.courseId;
    generatedId = this._generateId();
    client.mutate({
      mutation: gql(createStudent),
      variables: {
        input: {
          courseId: courseId,
          id: generatedId,
          name: this.state.newStudentName,
          picture: 'http://www.cartoonbucket.com/wp-content/uploads/2015/08/Spongebob-Running.jpg',
          attendanceRecords: [],
        },
      }
    });
  }

  _handleName = (name) => {
    this.setState({newStudentName: name})
  }

  /** Event listener for user's to upload a course roster */
  _uploadRoster() {
    DocumentPicker.getDocumentAsync({type: 'text/csv'}).then( (res) =>{
      if (res.type === 'success'){
        FileSystem.readAsStringAsync(res.uri).then((contents) => {
          let arr = contents.replace("\r", "").split('\n');
          arr.forEach(element => {
            if(element.toUpperCase().trim() !== "NAME") {
              const courseId = this.props.navigation.state.params.courseId;
              generatedId = this._generateId();
              client.mutate({
                mutation: gql(createStudent),
                variables: {
                  input: {
                    courseId: courseId,
                    id: generatedId,
                    name: element,
                    picture: 'http://www.cartoonbucket.com/wp-content/uploads/2015/08/Spongebob-Running.jpg',
                    attendanceRecords: [],
                  },
                }
              });
            }
          });
        })
      }
    }).catch();
  }

  render () {

    return (
      <View>
        <Button title="Add Student" onPress={this._startAddStudent} />
        <Button title="Import Roster" onPress={this._uploadRoster}/>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.students}
          renderItem={this.renderItem}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => this.fetchRoster("network-only")}
            />
          }
        />
        <Overlay isVisible={this.state.isOverlayVisible}  onBackdropPress={() => this.setState({ isOverlayVisible: false })}>
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