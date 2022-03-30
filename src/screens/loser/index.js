import React from 'react'
import { Text, View, Image } from 'react-native'
import styled from 'styled-components'
import LogoVirgule from '../../assets/nike.png'
import LoserImage from '../../assets/loser.png'


const Loser = ({ navigation }) => {

    return (
        <ViewStyle>

            <LosersImage source={LoserImage}></LosersImage>
            <TextTitle> Oups ! Vous n'avez pas été selectionné </TextTitle>
            <Text> Tentez votre chance une prochaine fois </Text>
            <Text> À très bientôt ! </Text>
            <TextLeft> Incha'allah ♥ </TextLeft>
            <ImageFooter source={LogoVirgule}></ImageFooter>

        </ViewStyle>


    )
}
const ViewStyle = styled.View`
    alignItems: center;
    marginTop: 80px
    marginLeft: 20px
    marginRight: 20px

`
const TextTitle = styled.Text`
    fontSize: 20px
    marginBottom: 20px

`
const TextLeft = styled.Text`
    marginTop: 20px
    marginLeft: auto

`
const ImageFooter = styled.Image`
    marginTop: 100px
    width: 200px
    height: 100px
`
const LosersImage = styled.Image`
    marginTop: 10px
    width: 70px
    height: 70px
`

export default Loser