import React from 'react'
import { Text, View } from 'react-native'
import { Title } from 'react-native-paper';
import styled from 'styled-components'



const Loser = ({ navigation }) => {

    return (
        <ViewStyle>
            <Title> T'as perdu loser à la prochaine inchaallah</Title>
        </ViewStyle>


    )
}
const ViewStyle = styled.View`
    alignItems: center;
`

export default Loser