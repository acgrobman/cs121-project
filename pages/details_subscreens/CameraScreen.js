import React, { Component } from 'react';
import { ScreenOrientation } from 'expo';
import { Camera } from 'expo-camera';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-elements'

export default class CameraScreen extends Component {

    state = {
        type: Camera.Constants.Type.back,
    }

    snap = async () => {
        if (this.camera) {
            let photo = await this.camera.takePictureAsync();
            console.log(photo)
        }
    };

    render () {
        return (
            <Card title="Take Attendance" containerStyle={{ flex: 1 }}>
                <Button onPress={this.snap} title="Capture" />
                <Camera style={{ height: '100%', width: '100%' }} type={this.state.type} ref={ref => { this.camera = ref; }} />
            </Card>
        );
    }
}