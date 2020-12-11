import React from 'react'
import {Text, Image, View} from 'react-native'
import {StyleSheet} from 'react-native'

const PhotoCard = ({photo}) => {
  return (
    <View>
      <View style={styles.card}>
        <Image style={styles.logo} source={{uri: `${photo.urls.small}`}} />
        <Text style={styles.text}> Username: {photo.user.username}</Text>
        <Text style={styles.text}> Name: {photo.user.name} </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 200,
  },
  card: {
    flex: 1,
    marginVertical: 10,
    alignItems: 'center',

    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2,
    backgroundColor: 'white',

    padding: 10,
    margin: 10,
  },
  text: {
    marginVertical: 5,
    fontSize: 20,
  },
})

export default PhotoCard
