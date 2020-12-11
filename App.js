import React from 'react'
import {Provider} from 'react-redux'
import {store} from './store/store'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import {StyleSheet} from 'react-native'
import MainPage from './pages/MainPage'
import PhotoPage from './pages/PhotoPage'

const Stack = createStackNavigator()

const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={MainPage}
              options={{title: 'Gallery App'}}
            />
            <Stack.Screen name="Photo" component={PhotoPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  )
}

const styles = StyleSheet.create({})

export default App
