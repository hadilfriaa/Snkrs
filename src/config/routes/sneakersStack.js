import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailsScreen from '../../screens/details/index'
import SneakersScreen from '../../screens/sneakers/index'


const Stack = createNativeStackNavigator()

const SneakersStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='En Stock' component={SneakersScreen} />
      <Stack.Screen name='Details' component={DetailsScreen} />
    </Stack.Navigator>
  )
}

export default SneakersStack