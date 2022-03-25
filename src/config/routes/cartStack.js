import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DrawScreen from '../../screens/cart/index'
import WinnerScreen from '../../screens/winner/index'
import LoserScreen from '../../screens/loser/index'


const Stack = createNativeStackNavigator()

const CartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Draw' component={DrawScreen} />
      <Stack.Screen name='Winner' component={WinnerScreen} />
      <Stack.Screen name='Loser' component={LoserScreen} />
    </Stack.Navigator>
  )
}

export default CartStack