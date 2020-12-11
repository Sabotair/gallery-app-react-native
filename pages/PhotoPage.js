import React from 'react'
import {Image, View, StyleSheet} from 'react-native'
const PhotoPage = ({route}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: `${route.params.photo}`}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
})

export default PhotoPage
