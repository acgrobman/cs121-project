import React, { Component } from 'react';
import { View } from "react-native";
import { Text } from 'react-native-elements';
import { PieChart, BarChart, Grid } from 'react-native-svg-charts';

/** Displays details on a specific student. */
export default class StudentDetailsScreen extends Component {

    /** Render component on screen */
    render() {
      let pieData = this._pieChartOfAttendanceTypesData();
      let barData = this._barChartOfAbsencesByMonthData();
        return (
            <View>
                <Text>Placeholder</Text>
                <Text h5>Proportional Attendance</Text>
                <PieChart style={{ height: 200 }} data={pieData} />
                <Text h5>Total Absences By Month</Text>
                <BarChart style={{ height: 200 }} data={barData} svg={this._randomColor()} contentInset={{ top: 30, bottom: 30 }}>
                    <Grid />
                </BarChart>
            </View>
        )
    }

    /**
     * Generate a random hex color
     * 
     * Borrowed from https://github.com/JesperLekland/react-native-svg-charts#Prerequisites
     */
    _randomColor()  {
        return ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7);
    }

    /** Generates absences by month of year data for a bar chart */
    _barChartOfAbsencesByMonthData() {
        // Placeholder for query to database
        let attendanceData = JSON.parse(testAttendanceRecords);
        
        let absencesByMonth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (const record of attendanceData) {
            if(record.status.toUpperCase() !== "PRESENT") {
                // Dates are in YEAR-MONTH-DAY format
                month = record.date.split("-")[1];
                // Account for zero indexing
                absencesByMonth[month - 1]++;
            }
        }

        return absencesByMonth;
    }

    /** Converts attendace data to pie chart format */
    _pieChartOfAttendanceTypesData() {
        // Placeholder for query to database
        let attendanceData = JSON.parse(testAttendanceRecords);

        // This is an attempt at mapping
        // I tried using the Map class, but it kept being undefined
        // When we replace data with real AWS data, we should refactor this!
        let occurances = [0, 0, 0]
        for (const record of attendanceData) {
            if (record.status.toUpperCase() === "PRESENT"){
                occurances[0]++;
            }
            else if (record.status.toUpperCase() === "EXCUSED"){
                occurances[1]++;
            }
            else if (record.status.toUpperCase() === "UNEXCUSED"){
                occurances[2]++;
            }
        }

        return occurances.map((value, index) => ({
            value,
            svg: {
                fill: this._randomColor(),
                onPress: () => console.log("press", index),
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
