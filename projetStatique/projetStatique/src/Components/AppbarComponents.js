import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider, Provider } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Text, Image, View } from 'react-native';
import { Avatar } from 'react-native-paper';


const AppbarComponents = () => (

    <Appbar style={{ backgroundColor: 'black' }}>
        <Appbar.Action
            icon="magnify" />

        <Appbar.Content title="Wok up" color='#48BDFF'  titleStyle={{ textAlign:'center', fontSize:30 }} />
        <Appbar.Action
            icon="account" />
            <Appbar.Action
            icon="dots-vertical" />
 
    </Appbar>

);

export default AppbarComponents

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