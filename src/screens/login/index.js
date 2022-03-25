import React from 'react'
import { Text, View, Button } from 'react-native'
import LoginForm from '../../component/loginForm'
import { Title } from 'react-native-paper';
import styled from 'styled-components'



const Login = ({ navigation }) => {

    return (
        <ViewStyle>
            <Title> POUR REJOINDRE NIKE  </Title>
            <LoginForm navigation={navigation} />
        </ViewStyle>


    )
}
const ViewStyle = styled.View`
    alignItems: center;
`

export default Login