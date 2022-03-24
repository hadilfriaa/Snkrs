import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components'
import { useFocusEffect } from '@react-navigation/native'

const Cart = () => {
  const [cart, setCart] = useState([])

  const addFavToState = async () => {
    const allFav = await readFavorite()
    setCart(allFav)
  }

  useFocusEffect(() => {
    addFavToState()
  })

  useEffect(() => {
    addFavToState()
  }, [])

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <>
      {cart.map(f => (
        <Text>{f.name}</Text>
      ))}
    </>
  )
}

export default Cart