import React, {useEffect} from 'react'
import {View, FlatList, TouchableOpacity} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {getAllPhotos} from '../store/galery/action'
import PhotoCard from '../components/PhotoCard'
import {StyleSheet} from 'react-native'

const MainPage = ({navigation}) => {
  const photos = useSelector((state) => state.galery.photos)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllPhotos())
  }, [dispatch])

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.photo}
        data={photos}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Photo', {photo: item.urls.regular})
            }
          >
            <PhotoCard photo={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default MainPage
