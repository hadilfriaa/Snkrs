import React, { useState } from 'react'
import styled from 'styled-components'
import { Text, Image, Button } from 'react-native'
import readCart from '../../Utils/readCart'
import addToCart from '../../Utils/addToCart'
import removeFromCart from '../../Utils/removeFromCart'

const Card = ({ item, navigation }) => {
  const [Cart, setCart] = useState([]);

  const checkCart = item => {
    readCart().then((result) => {
      setCart(result);
      console.log(result);
    }).catch((err) => {

    });
    const index = Cart.map(f => f.id).findIndex(itemId => itemId === item.id)
    if (index === -1) {
      addToCart(item)
    } else {
      removeFromCart(item)
    }
  }

  return (
    <Container>
      <ImageStyle source={{ uri: item.media.smallImageUrl }} />
      <TextDescription>{item.title}</TextDescription>
      <TextDescription> {item.name} </TextDescription>
      <TextDescription> {item.retailPrice} €</TextDescription>
      <ButtonStyled
        onPress={() => navigation.navigate('Details', { id: item.id })}
      >
        <TextButton> Découvrir </TextButton>

      </ButtonStyled>
      <ButtonStyled
        onPress={() => checkCart(item)}
      >
        <TextButton> + </TextButton>

      </ButtonStyled>
    </Container>
  )
}

const Container = styled.View`
    paddingTop: 40px;
    paddingBottom: 40px;
    alignItems: center;

`
const ImageStyle = styled.Image`
    marginBottom: 40px;
    width: 300px;
    height: 190px;
`
const TextDescription = styled.Text`
  paddingTop: 4px
  alignItems: center;
  color: #8A8888

`
const TextButton = styled.Text`
  paddingTop: 10px
  alignItems: center;
  color: #ffffff

`
const ButtonStyled = styled.TouchableOpacity`
  marginTop: 20px
  alignItems: center
  background: #8A8888,
  width: 150px;
  height: 40px;
  borderRadius: 40px
`

export default Card