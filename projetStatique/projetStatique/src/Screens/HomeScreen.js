import * as React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import AccueilComponents from '../Components/AccueilComponent';



const HomeScreen = () => (
<View><AccueilComponents/></View>
);

export default HomeScreen

const styles = StyleSheet.create({
    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        flex: 1,
        justifyContent: 'space-around',
    },
    imageStyle: {
        width: 30,
        height: 40,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 40,
      }
});