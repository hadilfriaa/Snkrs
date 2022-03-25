import React from 'react';
import { Text, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../../screens/home/index'
import SneakersStack from './sneakersStack'
import LoginScreen from '../../screens/login/index'
import CartStack from '../routes/cartStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FlashMessage from 'react-native-flash-message'

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
                        uri: "https://cdn-icons-png.flaticon.com/512/1692/1692699.png"
                    }} style={{ width: 30, height: 30 }} />)
                }}
                />
                <Tab.Screen name="Cart" component={CartStack} options={{
                    tabBarIcon: () => (<Image source={{
                        uri: "https://cdn-icons-png.flaticon.com/512/34/34568.png"
                    }} style={{ width: 30, height: 30 }} />)
                }} />
                <Tab.Screen name="Login" component={LoginScreen} options={{
                    tabBarIcon: () => (<Image source={{
                        uri: "https://cdn-icons-png.flaticon.com/512/929/929564.png"
                    }} style={{ width: 30, height: 30 }} />)
                }} />

            </Tab.Navigator>
            <FlashMessage position='top' />
        </NavigationContainer>
  
</>
    );
}

export default Routes;