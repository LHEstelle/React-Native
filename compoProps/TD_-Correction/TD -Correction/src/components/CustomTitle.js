import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CustomTitle = (props) => {
  const { title } = props
  return <Text style={styles.title}>{title}</Text>
}

export default CustomTitle

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
