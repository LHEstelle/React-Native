import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomTitle from './CustomTitle'
import CustomImage from './CustomImage'
import CustomButton from './CustomButton'
import CustomDesc from './CustomDesc'

const ListComponent = (props) => {
  const { data } = props
  return data.map((item, index) => {
    return (
      <View style={styles.container}>
        <View style={styles.bloc}>
          <View style={styles.leftBloc}>
            <CustomImage source={item.img} />
          </View>
          <View style={styles.rightBloc}>
            <CustomTitle title={item.title} />
            <CustomDesc desc={item.desc} />
            <CustomButton />
          </View>
        </View>
      </View>
    )
  })
}

export default ListComponent

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    width: '100%',
    marginVertical: 5,
  },
  bloc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftBloc: {
    flex: 1,
  },
  rightBloc: {
    flex: 1,
    padding: 10,
  },
})
