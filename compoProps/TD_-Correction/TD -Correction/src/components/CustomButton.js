import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const CustomButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Voir plus</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 5,
    width: '50%',
    alignSelf: 'flex-end',
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
  },
})
