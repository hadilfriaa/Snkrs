import AsyncStorage from '@react-native-async-storage/async-storage'
import { showMessage } from 'react-native-flash-message'
import readCart from './readCart'

const addToCart = async item => {
  const formerCart = await readCart()

  const arrayOfProducts = formerCart || []

  try {
    const jsonValue = JSON.stringify([
      ...arrayOfProducts,
      { name: item.name, id: item.id }
    ])
    await AsyncStorage.setItem('Cart', jsonValue)
    showMessage({
      message: `${item.name} à bien été ajouté au panier`,
      type: 'success'
    })
  } catch (e) {
    showMessage({
      message: `une erreur est survenue`,
      descriptions: e.message,
      type: 'danger'
    })
  }
}

export default addToCart