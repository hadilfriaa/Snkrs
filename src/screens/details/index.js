import React, { useEffect, useState } from 'react'
import { Text, View, Button, Image } from 'react-native'
import axios from 'axios'
import styled from 'styled-components'


const Details = ({ route }) => {
    const [product, setProduct] = useState({})
    const {
        params: { id }
    } = route


    useEffect(() => {
        
        axios({
            method: 'GET',
            url: `https://v1-sneakers.p.rapidapi.com/v1/sneakers/${id}`,
            headers: {
                'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com',
                'x-rapidapi-key': '3a078f25a8msha04eb6a3dc965dap19f9a7jsnc55a62d1eb0e'
            }
        })
            .then(response => {
                console.log(response);
                setProduct(response.data.results)
            })
            .catch(error => {
                console.log("je suis erreur",error)
            })
    }, [])

    console.log("product",product);

    return (
        <View>

            <Text>{product[0]?.name}</Text>
        </View>
    )
}

const ImageStyle = styled.Image`
    borderRadius: 5px
    width: 300px;
    height: 190px;
`

export default Details