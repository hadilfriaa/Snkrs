import AsyncStorage from '@react-native-async-storage/async-storage'

const readCart = async () => {
  try {
    const item = await AsyncStorage.getItem('Cart')

    return item !== null ? JSON.parse(item) : []
  } catch (e) {}
}

export default readCart