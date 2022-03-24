import React from 'react'
import styled from 'styled-components'
import { Text, Image, Button } from 'react-native'
import SneakersStack from '../../config/routes/sneakersStack'

const checkCart = async item => {
  const Cart = await readFavorite()

  const index = Cart.map(f => f.id).findIndex(itemId => itemId === item.id)
  if (index === -1) {
    addToCart(item)
  } else {
    removeFromCart(item)
  }
}

const Card = ({ item, navigation }) => {
  return (
    <Container>


      <ImageStyle source={{ uri: item.media.smallImageUrl }} />
      <TextDescription>{item.title}</TextDescription>
      <TextDescription> {item.name} </TextDescription>
      <TextDescription> {item.retailPrice} </TextDescription>
      <Button
        title="Découvrir"
        onPress={() => navigation.navigate('Details', { id: item.id })}
        />
      <Button
        title="Ajouter dans mon panier"
        onPress={() => checkCart(item)}
      />
    </Container>
  )
}

const Container = styled.View`
  padding: 12px;
  alignItems: center;

`
const ImageStyle = styled.Image`
    borderRadius: 5px
    width: 300px;
    height: 190px;
`
const TextDescription = styled.Text`
alignItems: center;
`

export default Card