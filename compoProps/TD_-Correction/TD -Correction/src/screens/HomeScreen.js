import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import ListComponent from '../components/ListComponent'
import data from '../../assets/tp.json'
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ListComponent data={data} />
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})
