import React from 'react'
import { Text, View, Image } from 'react-native'
import styled from 'styled-components'
import LogoVirgule from '../../assets/nike.png'
import Trophy from '../../assets/trophy.png'


const Winner = ({ navigation }) => {

    return (
        <ViewStyle>

            <ImageTrophy source={Trophy}></ImageTrophy>

            <TextTitle>  Gagné  </TextTitle>
            <Text> Félicitation vous venez d'être selectionné </Text>
            <Text> Prochaine étape : paiement + adresse de livraison ! </Text>
            <TextLeft> En esperant que vous avez de quoi payer..♥ </TextLeft>
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
const ImageTrophy = styled.Image`
    marginTop: 10px
    width: 70px
    height: 70px
`

export default Winner