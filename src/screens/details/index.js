import React, { useEffect, useState } from 'react'
import { Text, View, Button, Image } from 'react-native'
import axios from 'axios'
import styled from 'styled-components'
import { Title } from 'react-native-paper'


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
                setProduct(response.data.results)
            })
            .catch(error => {
            })
    }, [])


    return (
        <ViewDetails>

            <Title> {product[0]?.shoe} </Title>
            <ImageStyle source={{
                uri: `https:${product[0]?.media.smallImageUrl.split(':')[1]}`
            }}/>
            <TextWhite>{product[0]?.title}</TextWhite>
            <TextWhite>{product[0]?.retailPrice}</TextWhite>
            <TextWhite>{product[0]?.releaseDate}</TextWhite>
            

        </ViewDetails>
    )
}

const ViewDetails = styled.View`
    marginTop: 20px
    alignItems: center
`
const ImageStyle = styled.Image`
    marginTop: 20px
    width: 380px;
    height: 200px;
`
const TextWhite = styled.Text`
    paddingLeft: 30px
    paddingTop: 10px
    color: #8A8888
`

export default Details