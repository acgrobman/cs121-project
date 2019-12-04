import React, { Component } from 'react';
import { Camera } from 'expo-camera';
import { View, TouchableOpacity, Alert } from 'react-native';
import { Icon } from 'react-native-elements'
import { withNavigationFocus } from 'react-navigation'

class CameraScreen extends Component {

    state = {
        type: Camera.Constants.Type.back
    }

    snap = async () => {
        if (this.camera) {
            let photo = await this.camera.takePictureAsync();
            Alert.alert("Success!", "The photo was taken and is now being processed.");
        }
    };

    render () {

        const { isFocused } = this.props;

        if (!isFocused) return null;


        return (
            <View style={{ flex: 1 }}>
                <Camera style={{ flex: 1 }} type={this.state.type} ref={ref => { this.camera = ref; }} >
                    <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                    }}>
                        {/* TouchableOpacity necessary. onPress for an Icon makes the icon gross when pressed. */}
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                alignSelf: 'flex-end',
                                alignItems: 'center',
                                marginBottom: 25
                            }}
                            onPress={() => this.snap()}>
                            <Icon
                                name='ios-radio-button-off'
                                type='ionicon'
                                color='white'
                                size={75}
                                
                            />
                        </TouchableOpacity>
                    </View>
                </Camera>
            </View>
        );
    }
}


export default withNavigationFocus(CameraScreen);