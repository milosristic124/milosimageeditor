import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';

import {NativeModules} from 'react-native';
var ReactNativeImageCropping = NativeModules.ReactNativeImageCropping;

import Panel from './Panel';
import styles from '../styles/Accordion';
const {width, height} = Dimensions.get('window');

class Accordion extends Component {
    onEdit = () => {
        console.log('clicked-->');
        const originalImage = 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Wiki-black.png';
        ReactNativeImageCropping
            .cropImageWithUrl(originalImage)
            .then(image => {
                console.log('Image saved to-->', image);
                //Image is saved in NSTemporaryDirectory!
                //image = {uri, width, height}	
            },
            err => console.log(b));
    };

    render() {
        return (
            <TouchableOpacity style = {{width: 100, height: 50, backgroundColor: 'blue'}} onPress={this.onEdit}>Edit</TouchableOpacity>                
        );
    }
}

export default Accordion;

