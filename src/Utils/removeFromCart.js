import AsyncStorage from '@react-native-async-storage/async-storage'
import { showMessage } from 'react-native-flash-message'
import readCart from './readCart'

const removeFromCart = async item => {
  console.log('je suis item remove', item);
  const formerCart = await readCart()
  const filteredCart = formerCart.filter(fav => fav.id !== item.id)
  try {
    const jsonValue = JSON.stringify(filteredCart)
    await AsyncStorage.setItem('Cart', jsonValue)
    showMessage({
      message: `${item.name} à bien été supprimé de votre panier`,
      type: 'info'
    })
  } catch (e) {
    showMessage({
      message: `une erreur est survenue`,
      descriptions: e.message,
      type: 'danger'
    })
  }
}

export default removeFromCart