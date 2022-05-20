import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const CustomImage = (props) => {
  const { source } = props
  return <Image style={styles.image} source={{ uri: source }} />
}

export default CustomImage

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
})
