import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-elements';

/**
 * Component for the help screen.
 */
export default class HelpScreen extends Component{
    /** Renders the screen */
    render() {
        return (
            <ScrollView>
                <Text h1>PreSense</Text>
                <Text h2>By The BlunderCatz</Text>
                <Text h3>Mission</Text>
                <Text>
                    We aim to simplify attendance taking through the use of
                     photo recognition.
                </Text>
                <Text h3>Setup</Text>
                <Text h4>Course Creation</Text>
                <Text>
                    We're glad to have you! To create a course, navigate to the
                     'Add Course' screen either in the sidebar or by tapping 
                     the plus sign on the home screen. Provide a course name 
                     and description and you're done. Refresh your course list 
                     by dragging down on the list.
                </Text>
                <Text h4>Roster Creation</Text>
                <Text>
                    Now that you have a course, it's time to add your students! 
                    You can do this in two ways:{'\n'}
                    • Single Student Addition - Add a single student by typing 
                    in their name. Don't forget to add a photo later!{'\n'}
                    • Roster Upload - Have a roster from your course management 
                    software? You can upload a comma-separated values file to 
                    the app to automatically add all your students. Make sure 
                    it has one student's name per line, and add a photo later 
                    for each student!
                </Text>
                <Text h3>Use</Text>
                <Text h4>Add/Drop</Text>
                <Text>
                    We know that students can join and leave courses at various 
                    times throught a course. You can always add new students 
                    using the 'Add Student' feature. To remove a student, press 
                    and hold on their name. 
                </Text>
                <Text h4>Facial Recognition</Text>
                <Text>
                    This service is powered by Amazon's Rekognition Web 
                    Service. Amazon is FERPA compliant. Additional details on 
                    this function are available by contacting the team. See 
                    below for details.
                </Text>
                <Text h3>Contact Us</Text>
                <Text>
                    We'd love to hear your feedback. Contact us be email at 
                    presense-l@g.hmc.edu!
                </Text>
            </ScrollView>
        );
    }
}
