import React, { useState } from 'react'
import { View, Button} from 'react-native'
import Input from '../../component/input'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import styled from 'styled-components'
import isLogged from '../../Utils/isLogged'


const LoginForm = ({ navigation }) => {
    const [UserName, setUserName] = useState({});
    const [Password, setPassword] = useState({});

    const handleSubmit = () => {
        axios.
            post(`https://easy-login-api.herokuapp.com/users/login`, {
            username: UserName,
            password: Password
        }).then( async (res) => {
            await AsyncStorage.setItem("token", res.headers['x-access-token']);
            const token = await AsyncStorage.getItem("token");
            if(isLogged){
                navigation.navigate('Sneakers');
            }
        })  
    }


    return (
        <View> 
            <Input StyledComponent placeholder='Pseudo'  onChangeText={text => setUserName(text)}/>
            <Input placeholder='Mot de passe' onChangeText={text => setPassword(text)} />

            <ButtonStyled
                onPress={handleSubmit}
            >
                <TextName>
                    Se connecter
                </TextName>
          </ButtonStyled>
        </View>
    )
}




const ButtonStyled = styled.TouchableOpacity`
  marginTop: 20px
  alignItems: center
  background: #8A8888,
  width: 150px
  height: 40px
  borderRadius: 40px
  marginLeft: 120px
`
const TextName = styled.Text`
  paddingTop: 10px
  color: #ffffff
`


export default LoginForm