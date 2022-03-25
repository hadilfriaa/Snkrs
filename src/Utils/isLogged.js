import AsyncStorage from '@react-native-async-storage/async-storage'

const IsLogged = async () => {
    let verifToken = false
    const token = await AsyncStorage.getItem("token");
    console.log("je suis token", token);

    if (token) {
      verifToken = true
    }
  return verifToken
}

export default IsLogged