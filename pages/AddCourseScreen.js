// This is based on  example code from 
// https://aboutreact.com/react-native-navigation-drawer/

import React, { Component } from 'react';
import {View} from 'react-native'
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo'
 
/** Screen component for adding courses */
export default class AddCourseScreen extends Component {
  /** Initializes state and binds helper functions to the object */
  constructor(props) {
    super(props)
    this.state = {
      CourseName: "",
      CourseDescription: "",
    };

    // Makes it so this.setState functions as expected
    this._handleDescription = this._handleDescription.bind(this);
    this._handleName = this._handleName.bind(this);
    this._processSubmit = this._processSubmit.bind(this);
  }

  /** Handles changes to Name input field */
  _handleName = (text) => {
    this.setState({CourseName: text});
  }

  /** Handles changes to Description input field */
  _handleDescription = (text) => {
    this.setState({CourseDescription: text});
  }

  /** Processes submission of the add course form */
  _processSubmit() {
    console.log(this.state);
  }

  /** Renders the display elements */
  render() {
    return (
      <View style={{flex: 1, flexDirection: "column",justifyContent:"space-between"}}>
        <View>
          <Input 
            label="Course Name"
            returnKeyType="next"
            placeholder="Please enter a course name/section info..."
            onChangeText={this._handleName}
            />
          <Input 
            label="Course Description"
            returnKeyType="done"
            placeholder="Please enter a course desciption..."
            onChangeText={this._handleDescription}/>
        </View>
        <View>
        <Button 
          title="Submit"
          icon={
            <Icon name="check" color="white" size={15}/>
          }
          onPress={this._processSubmit}/>
        </View>
      </View>
    );
  }
}
