import React from 'react'
import { Text, View, Button} from 'react-native'
import LoginForm from '../../component/loginForm'

const Login = ({ navigation }) => {

    return (
        <View>

            <Text> Je suis dans la page login</Text>

            <LoginForm />
        </View>

        
    )
}

export default Login