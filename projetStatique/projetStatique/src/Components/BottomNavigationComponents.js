import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import HomeScreen from '../Screens/HomeScreen';
import MenuScreen from '../Screens/MenuScreen';
import { BottomNavigation} from 'react-native-paper';
import StackNavigation from '../navigation/StackNavigation'
import StackNavigationHome from '../navigation/StackNavigationHome';

const HomeRoute = () => <StackNavigationHome/> 

const PanierRoute = () => <Text>Panier</Text>;

const MenuRoute = () => <MenuScreen/>;

const RéalisationsRoute = () => <StackNavigation/>;

const BottomNavigationComponents = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'accueil', title: 'Accueil', icon: 'home' },
    { key: 'panier', title: 'Panier', icon: 'basket' },
    { key: 'menu', title: 'Menu', icon: 'silverware-fork-knife' },
    { key: 'réalisations', title: 'Réalisations', icon: 'flare' }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    accueil: HomeRoute,
    panier: PanierRoute,
    menu: MenuRoute,
    réalisations: RéalisationsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{backgroundColor:'black'}}
    />

  );
};
export default BottomNavigationComponents