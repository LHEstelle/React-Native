import { Icon } from '@rneui/themed';
import * as React from 'react';
import { StyleSheet, Text, Image, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';

import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';



const MenuScreen = () => {
    //Nous instancions une variable navigation au HOOK useNavigation de react-navigation

    
    return (
        <ScrollView>
            <ImageBackground source={require('../../assets/fond.jpg')} style={{ height: '100%', width: '100%' }} >


                <View style={styles.myContainer}>
                    <View style={{ borderRadius: 10, width: 350, marginTop: 60, flexDirection: 'row', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>

                        <Card style={{ backgroundColor: 'rgba(0,0,0,0.6)', marginBottom: 20 }}>
                            <Card.Content>
                                <Title style={{ textAlign: 'center', color: 'white' }}>1 ers au concours Thai de Paris !!</Title>

                            </Card.Content>
                            <Card.Cover source={require('../../assets/blog.jpg')} style={{ backgroundColor: 'rgba(0,0,0,0.1)' }} />
                            <Card.Cover source={require('../../assets/medaille.jpg')} style={{ backgroundColor: 'rgba(0,0,0,0.1)' }} />
                            <Paragraph style={{ color: 'white', textAlign: 'center', marginTop: 10 }}>Notre équipe se déplaçait ce week-end au Concours national de cuisine Thai à Paris.

                                Après de longues heures de préparation , nous voilà médaillé d’or !! C’est pour nous une grande fierté et bravo à toute l’équipe!!!</Paragraph>

                            <Paragraph style={{ color: 'white', textAlign: 'right', marginTop: 10 }}>23/05/2022</Paragraph>
                        </Card>



                    </View>
                </View>

            </ImageBackground>
        </ScrollView>
    )
};

export default MenuScreen

const styles = StyleSheet.create({
    myContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});