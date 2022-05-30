import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import AppbarComponents from './src/Components/AppbarComponents';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AccueilComponents from './src/Components/AccueilComponent';
import BottomNavigationComponents from './src/Components/BottomNavigationComponents';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppbarComponents/>
      <BottomNavigationComponents/>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
