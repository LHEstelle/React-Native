import { Icon } from '@rneui/themed';
import * as React from 'react';
import { StyleSheet, Text, Image, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/core'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';



const MenuScreen = () => {
    //Nous instancions une variable navigation au HOOK useNavigation de react-navigation
    const navigation = useNavigation()
    return (
    <ScrollView>
        <ImageBackground source={require('../../assets/fond.jpg')} style={{ height: '100%', width: '100%' }} >


            <View style={styles.myContainer}>
                <View style={{borderRadius: 10, height: '100%', width: 350, marginTop: 60, flexDirection: 'row', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                <TouchableOpacity onPress={() => navigation.navigate('detail')}>
                    <Card style={{ backgroundColor: 'rgba(0,0,0,0.6)', marginBottom: 20 }}>
                        <Card.Content>
                            <Title style={{ textAlign: 'center', color: 'white'}}>1 ers au concours Thai de Paris !!</Title>

                        </Card.Content>
                        <Card.Cover source={require('../../assets/blog.jpg')} style={{ backgroundColor: 'rgba(0,0,0,0.1)'  }} />
                 
                    </Card>
                    </TouchableOpacity>
                    <Card style={{ backgroundColor: 'rgba(0,0,0,0.6)', marginBottom: 20 }}>
                        <Card.Content>
                            <Title style={{ textAlign: 'center', color: 'white'}}>1 ers au concours Thai de Paris !!</Title>

                        </Card.Content>
                        <Card.Cover source={require('../../assets/blog.jpg')} style={{ backgroundColor: 'rgba(0,0,0,0.1)'  }} />
                 
                        <Card.Actions>

                        </Card.Actions>
                    </Card>
            
                    <Card style={{ backgroundColor: 'rgba(0,0,0,0.6)', marginBottom: 20 }}>
                        <Card.Content>
                            <Title style={{ textAlign: 'center', color: 'white'}}>1 ers au concours Thai de Paris !!</Title>

                        </Card.Content>
                        <Card.Cover source={require('../../assets/blog.jpg')} style={{ backgroundColor: 'rgba(0,0,0,0.1)'  }} />
                 
                        <Card.Actions>

                        </Card.Actions>
                    </Card>
                    <Card style={{ backgroundColor: 'rgba(0,0,0,0.6)', marginBottom: 20 }}>
                        <Card.Content>
                            <Title style={{ textAlign: 'center', color: 'white'}}>1 ers au concours Thai de Paris !!</Title>

                        </Card.Content>
                        <Card.Cover source={require('../../assets/blog.jpg')} style={{ backgroundColor: 'rgba(0,0,0,0.1)'  }} />
                 
                        <Card.Actions>

                        </Card.Actions>
                    </Card>
                    <Card style={{ backgroundColor: 'rgba(0,0,0,0.6)', marginBottom: 20 }}>
                        <Card.Content>
                            <Title style={{ textAlign: 'center', color: 'white'}}>1 ers au concours Thai de Paris !!</Title>

                        </Card.Content>
                        <Card.Cover source={require('../../assets/blog.jpg')} style={{ backgroundColor: 'rgba(0,0,0,0.1)'  }} />
                 
                        <Card.Actions>

                        </Card.Actions>
                    </Card>
               
            
                </View>
            </View>

        </ImageBackground>
    </ScrollView>
)};

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