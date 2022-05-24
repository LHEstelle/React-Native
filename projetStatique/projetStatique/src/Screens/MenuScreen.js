import { Icon } from '@rneui/themed';
import * as React from 'react';
import { StyleSheet, Text, Image, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/core'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';



const MenuScreen = () => (
    <ScrollView>
        <ImageBackground source={require('../../assets/fond.jpg')} style={{ height: '100%', width: '100%' }} >


            <View style={styles.myContainer}>
                <View style={{ backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 10, height: '100%', width: 350, marginTop: 60, flexDirection: 'row', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    <Card style={{ backgroundColor: 'rgba(0,0,0,0.1)', width: 150 }}>
                        <Card.Content>
                            <Title style={{ textAlign: 'center', color: 'white'}}>Pad Thai</Title>

                        </Card.Content>
                        <Card.Cover source={require('../../assets/menu.png')} style={{ backgroundColor: 'rgba(0,0,0,0.1)'  }} />

                        <Paragraph style={{ textAlign: 'center', color: 'white' }}>Nouilles de riz sautées - Poulet - Crevettes - Piment</Paragraph>
                        <Paragraph style={{ textAlign: 'center', color: 'white' }}>7€</Paragraph>

                        <Card.Actions>

                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                                <TouchableOpacity style={{ backgroundColor: '#48BDFF', borderRadius: 20, width: 110, height: 25, flexDirection: 'row', justifyContent: 'center' }}>
                                    <Icon name='shopping-cart' size={13} color="white" style={{ marginTop: 5, marginRight: 6 }} />
                                    <Text style={{ marginTop: 5, color: 'white', fontSize: 10 }}>Ajouter au panier</Text>
                                </TouchableOpacity>
                            </View>
                        </Card.Actions>
                    </Card>
                    <Card style={{ backgroundColor: 'rgba(0,0,0,0.1)', width: 150 }}>
                        <Card.Content>
                            <Title style={{ textAlign: 'center', color: 'white' }}>Pad Thai</Title>

                        </Card.Content>
                        <Card.Cover source={require('../../assets/menu.png')} style={{ backgroundColor: 'rgba(0,0,0,0.1)' }} />

                        <Paragraph style={{ textAlign: 'center', color: 'white' }}>Nouilles de riz sautées - Poulet - Crevettes - Piment</Paragraph>
                        <Paragraph style={{ textAlign: 'center', color: 'white' }}>7€</Paragraph>

                        <Card.Actions>

                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                                <TouchableOpacity style={{ backgroundColor: '#48BDFF', borderRadius: 20, width: 110, height: 25, flexDirection: 'row', justifyContent: 'center' }}>
                                    <Icon name='shopping-cart' size={13} color="white" style={{ marginTop: 5, marginRight: 6 }} />
                                    <Text style={{ marginTop: 5, color: 'white', fontSize: 10 }}>Ajouter au panier</Text>
                                </TouchableOpacity>
                            </View>
                        </Card.Actions>
                    </Card>
                    <Card style={{ backgroundColor: 'rgba(0,0,0,0.1)', width: 150 }}>
                        <Card.Content>
                            <Title style={{ textAlign: 'center', color: 'white' }}>Pad Thai</Title>

                        </Card.Content>
                        <Card.Cover source={require('../../assets/menu.png')} style={{ backgroundColor: 'rgba(0,0,0,0.1)' }} />

                        <Paragraph style={{ textAlign: 'center', color: 'white' }}>Nouilles de riz sautées - Poulet - Crevettes - Piment</Paragraph>
                        <Paragraph style={{ textAlign: 'center', color: 'white' }}>7€</Paragraph>

                        <Card.Actions>

                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                                <TouchableOpacity style={{ backgroundColor: '#48BDFF', borderRadius: 20, width: 110, height: 25, flexDirection: 'row', justifyContent: 'center' }}>
                                    <Icon name='shopping-cart' size={13} color="white" style={{ marginTop: 5, marginRight: 6 }} />
                                    <Text style={{ marginTop: 5, color: 'white', fontSize: 10 }}>Ajouter au panier</Text>
                                </TouchableOpacity>
                            </View>
                        </Card.Actions>
                    </Card>
                    <Card style={{ backgroundColor: 'rgba(0,0,0,0.1)', width: 150 }}>
                        <Card.Content>
                            <Title style={{ textAlign: 'center', color: 'white' }}>Pad Thai</Title>

                        </Card.Content>
                        <Card.Cover source={require('../../assets/menu.png')} style={{ backgroundColor: 'rgba(0,0,0,0.1)' }} />

                        <Paragraph style={{ textAlign: 'center', color: 'white' }}>Nouilles de riz sautées - Poulet - Crevettes - Piment</Paragraph>
                        <Paragraph style={{ textAlign: 'center', color: 'white' }}>7€</Paragraph>

                        <Card.Actions>

                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                                <TouchableOpacity style={{ backgroundColor: '#48BDFF', borderRadius: 20, width: 110, height: 25, flexDirection: 'row', justifyContent: 'center' }}>
                                    <Icon name='shopping-cart' size={13} color="white" style={{ marginTop: 5, marginRight: 6 }} />
                                    <Text style={{ marginTop: 5, color: 'white', fontSize: 10 }}>Ajouter au panier</Text>
                                </TouchableOpacity>
                            </View>
                        </Card.Actions>
                    </Card>
                </View>
            </View>

        </ImageBackground>
    </ScrollView>
);

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