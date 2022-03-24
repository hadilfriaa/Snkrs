import React from 'react';
import { Text, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../../screens/home/index'
import SneakersStack from './sneakersStack'
import LoginScreen from '../../screens/login/index'
import CartScreen from '../../screens/cart/index'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


const Routes = () => {
    return (
        <>
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} options={{
                    tabBarIcon: () => (<Image source={{
                        uri: "https://cdn-icons-png.flaticon.com/512/88/88282.png"
                    }} style={{ width: 30, height: 30 }} />)
                }} />
                <Tab.Screen name="Sneakers" component={SneakersStack} options={{
                    tabBarIcon: () => (<Image source={{
                        uri: "https://cdn-icons.flaticon.com/png/512/2872/premium/2872507.png?token=exp=1647603798~hmac=fe829971ef63058e80e8f18ce798fabf"
                    }} style={{ width: 40, height: 40 }} />)
                }}
                />
                <Tab.Screen name="Cart" component={CartScreen} />
                <Tab.Screen name="Login" component={LoginScreen} options={{
                    tabBarIcon: () => (<Image source={{
                        uri: "https://cdn-icons-png.flaticon.com/512/929/929564.png"
                    }} style={{ width: 30, height: 30 }} />)
                }} />

            </Tab.Navigator>
          
        </NavigationContainer>
  
</>
    );
}

export default Routes;