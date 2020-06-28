import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Sellers, Appointments } from '../screens'

const Stack = createStackNavigator()

const AppNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName='Sellers'
    >
      <Stack.Screen name='Sellers' component={Sellers} />
      <Stack.Screen name='Appointments' component={Appointments} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default AppNavigation
