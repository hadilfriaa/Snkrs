import React, { useState } from 'react'
import { View, Button} from 'react-native'
import Input from '../../component/input'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const LoginForm = ({ navigation }) => {
    const [UserName, setUserName] = useState({});
    const [Password, setPassword] = useState({});

    const handleSubmit = () => {
        console.log('user',UserName);
        console.log('Password',Password);
        axios.
            post(`https://easy-login-api.herokuapp.com/users/login`, {
            username: UserName,
            password: Password
        }).then( async (res) => {
            console.log(res),
            await AsyncStorage.setItem("token", res.headers['x-access-token']);
            const token = await AsyncStorage.getItem("token");
    if(token){
        navigation.navigate('Sneakers')
    }
        })

    
        
    }


    return (
        <View>
            <Input StyledComponent placeholder='UserName'  onChangeText={text => setUserName(text)}/>
            <Input placeholder='Password' onChangeText={text => setPassword(text)} 
             />

            <Button
                title="Login !"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
                onPress={handleSubmit}
            />
        </View>
    )
}

export default LoginForm