import IsLogged from './isLogged';

const Check = async ({ navigation }) =>{
    let verif = await IsLogged()
    console.log("je suis dans test ", verif);
    if (verif == false) {
        navigation.navigate('Login')
    }
}


export default Check