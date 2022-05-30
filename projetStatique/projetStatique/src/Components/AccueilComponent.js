import { Icon } from '@rneui/base';
import * as React from 'react';
import { StyleSheet, Text, Image, View, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core'





const AccueilComponents = () => {
    const navigation = useNavigation()
    
    
    return (


            < ImageBackground source = { require('../../assets/fond.jpg') } style = {{ height: '100%', width: '100%' }} >
                <View style={styles.myContainer}>
                    <View style={{ backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 10, height: 500, width: 320 }}>

                        <Text style={{ color: 'white', fontSize: 22, textAlign: 'center', margin: 15, marginTop: 40 }}>Votre meilleur restaurant Thai ! {"\n"} {"\n"}

                            Des nouilles au riz, de la crevette au poulet, votre bonheur se tient à portée de main ! {"\n"}{"\n"}

                            Nos cuisiniers qualifiés vous concoctent vos plat favoris</Text>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 40 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('menu')} style={{ backgroundColor: '#48BDFF', borderRadius: 20, width: 208, height: 45, flexDirection: 'row', justifyContent: 'center' }}>
                                <Icon name="restaurant" size={20} color="white" style={{ marginTop: 10, marginRight: 6 }} />
                                <Text style={{ marginTop: 10, color: 'white', fontSize: 16 }}>Commander</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('contact')}>
                            <Text style={{ marginTop: 10, color: 'white', fontSize: 16, textAlign: 'center', marginBottom: 30, color: '#48BDFF' }}>Nous contacter</Text>
                        </TouchableOpacity>

                    </View>
                </View>
    </ImageBackground >


)
    }


const styles = StyleSheet.create({
    myContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center'
    },
});

export default AccueilComponents
