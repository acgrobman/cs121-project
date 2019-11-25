import React, { Component } from 'react';
import { View } from "react-native";
import { Text } from 'react-native-elements';
import { PieChart } from 'react-native-svg-charts';

/** Displays details on a specific student. */
export default class StudentDetailsScreen extends Component {

    /** Render component on screen */
    render() {
      let data = this._pieChartData()
        return (
            <View>
                <Text>Placeholder</Text>
                <PieChart style={{ height: 200 }} data={data} />
            </View>
        )
    }

    /**
     * Generate a random hex color
     * 
     * Borrowed from https://github.com/JesperLekland/react-native-svg-charts#Prerequisites
     */
    _randomColor = () => {
        return ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7);
    }

    /** Converts data to pie chart format */
    _pieChartData() {
        // Placeholder for query to database
        let attendanceData = JSON.parse(testAttendanceRecords);

        // This is an attempt at mapping
        // I tried using the Map class, but it kept being undefined
        // When we replace data with real AWS data, we should refactor this!
        let occurances = [0, 0, 0]
        for (const record of attendanceData) {
            if (record.status.toLowerCase() === 'present'){
                occurances[0]++;
            }
            else if (record.status.toLowerCase() === 'excused'){
                occurances[1]++;
            }
            else if (record.status.toLowerCase() === 'unexcused'){
                occurances[2]++;
            }
        }

        return occurances.map((value, index) => ({
            value,
            svg: {
                fill: this._randomColor(),
                onPress: () => console.log('press', index),
            },
            key: `pie-${index}`,
        }));
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
