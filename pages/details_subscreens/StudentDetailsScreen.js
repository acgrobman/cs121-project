import React, { Component } from 'react';
import { View } from "react-native";
import { Text } from 'react-native-elements'

/** Displays details on a specific student. */
export default class StudentDetailsScreen extends Component {

    /** Render component on screen */
    render() {
        return (
            <View>
                <Text>Placeholder</Text>
            </View>
        )
    }
}

// Eventually, we will get our attendance records from AWS
// Until then, here is a test JSON String of attendance records
// Note that in this data, we only support one class per day
// We could eventually make it so the date stored is the UTC time
// that the photo was taken at. 
let testAttendanceRecords = JSON.stringify([
    {
        date: "2019-09-14",
        status: "Present",
    },
    {
        date: "2019-09-16",
        status: "Unexcused",
    },
    {
        date: "2019-09-18",
        status: "Present",
    },
    {
        date: "2019-09-20",
        status: "Present",
    },
    {
        date: "2019-09-22",
        status: "Excused",
    },
    {
        date: "2019-10-05",
        status: "Present",
    },
    {
        date: "2019-10-24",
        status: "Present",
    },
]);
