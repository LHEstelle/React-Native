import React from 'react'
//Nous importons NavigationContainer de react-navigation
import { NavigationContainer } from '@react-navigation/native'
//Nous importons createNativeStackNavigator de react-navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//Nous importons les écrans que nous voulons insérer dans notre stack navigation

import RealisationScreen from '../Screens/RealisationScreen'
import RealisationDetail from '../Screens/RealisationDetail'




const Stack = createNativeStackNavigator()
const NavigationStack = () => {
  return (
    //Nous englobons la navigation dans un NavigationContainer
    <NavigationContainer>
      {/* Nous créeons un Stack Navigator qui contiendra les deux écrans que nous voulons affiché en stack */}
      <Stack.Navigator
        //Nous lui passons une options pour cacher le header
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* Par défaut c'est le premier screen qui sera afficher */}
        <Stack.Screen name="Realisation" component={RealisationScreen} />
        <Stack.Screen name="detail" component={RealisationDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationStack
