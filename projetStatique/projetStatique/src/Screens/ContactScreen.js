import { Icon } from '@rneui/themed';
import * as React from 'react';
import { StyleSheet, Text, Image, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Paragraph, Title } from 'react-native-paper';






const HomeScreen = () => {

    return (

        < ImageBackground source={require('../../assets/fond.jpg')} style={{ height: '100%', width: '100%' }} >
            <View style={styles.myContainer}>
                <TouchableOpacity>
                    <View style={{ backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 10, height: 500, width: 320 }}>

                        <Title style={{ color: '#48BDFF', fontSize: 35, textAlign: 'center', margin: 15, marginTop: 40 }}>
                            Wok up
                        </Title>
                        <Paragraph style={{ color: 'white', textAlign: 'center' }}>11h-15h et 18h-22h {"\n"}
                            Du mardi au samedi</Paragraph>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 60 }}>

                            <Icon name="place" size={20} color="white" style={{ marginTop: 10, marginRight: 6 }} />
                            <Text style={{ marginTop: 10, color: 'white', fontSize: 18, textAlign: 'center' }}>61 bis rue Maréchal Gallieni {"\n"}{"\n"} 76600 Le Havre</Text>

                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                            <Icon name="phone" size={20} color="white" style={{ marginRight: 6 }} />
                            <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>09 81 22 79 02</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('réalisations')} style={{ backgroundColor: '#48BDFF', borderRadius: 20, width: 208, height: 45, flexDirection: 'row', justifyContent: 'center' }}>
                                <Icon name="phone" size={20} color="white" style={{ marginTop: 10, marginRight: 6 }} />
                                <Text style={{ marginTop: 10, color: 'white', fontSize: 16 }}>Nous appeler</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </TouchableOpacity>
            </View>
        </ImageBackground >


    )
};

export default HomeScreen

const styles = StyleSheet.create({
    myContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center'
    },
});