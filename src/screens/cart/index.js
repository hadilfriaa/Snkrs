import React, { useState, useEffect } from 'react'
import { Text, View, Button } from 'react-native'
import styled from 'styled-components'
import readCart from '../../Utils/readCart';
import removeFromCart from '../../Utils/removeFromCart'
import { useFocusEffect } from '@react-navigation/native'
import { FlatList } from 'react-native-gesture-handler';

const Cart = ({ navigation }) => {
  const [cart, setCart] = useState([])
  const [change, setChange] = useState(false);
  const addProductToState = async () => {
    readCart().then((result) => {
      setCart(result)

    }).catch((err) => {

    });
  }

  useFocusEffect(() => {
    addProductToState()
  })

  useEffect(() => {
    addProductToState()
  }, [])

  useEffect(() => {
    console.log(cart)
  }, [cart])



  const handleSubmit = () => {
    const clientRandom = Math.floor(Math.random() * 11);
    const winnerRandom = Math.floor(Math.random() * 11);

    if (clientRandom == winnerRandom) {
      navigation.navigate('Winner');
    } else {
      navigation.navigate('Loser');

    }

  }

  return (
    <View>
      <FlatList
        data={cart}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Container >
            <TextBlack>{item.name}</TextBlack>
            <TextBlack>{item.retailPrice} €</TextBlack>
            <ButtonStyled
              onPress={() => { removeFromCart(item) }}
            >
              <TextButton>
                Supprimer
              </TextButton>
            </ButtonStyled>

            <ButtonStyled
              onPress={() => { handleSubmit() + removeFromCart(item) }}
            >
              <TextButton>
                Acheter
              </TextButton>
            </ButtonStyled>

          </Container>
        )}
      />
    </View>
  )
}



const Container = styled.View`
  alignItems: center
  paddingTop: 10px
  color: #000000
  paddingBottom: 20px

`
const TextBlack = styled.Text`
  paddingTop: 10px
  color: #000000
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


export default Cart