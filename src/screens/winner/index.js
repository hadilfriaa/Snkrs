import React from 'react'
import { Text, View } from 'react-native'
import { Title } from 'react-native-paper';
import styled from 'styled-components'



const Winner = ({ navigation }) => {

    return (
        <ViewStyle>
            <Title> Gagné psahtek </Title>
        </ViewStyle>


    )
}
const ViewStyle = styled.View`
    alignItems: center;
`

export default Winner