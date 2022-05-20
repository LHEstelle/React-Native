import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const CustomDesc = (props) => {
  const { desc } = props
  return <Text>{desc}</Text>
}

export default CustomDesc
