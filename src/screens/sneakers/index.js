import React, { useState, useEffect } from 'react'
import { Text, View, FlatList, Image } from 'react-native'
import styled from 'styled-components'
import axios from "axios";
import Card from '../../component/card';

const Sneakers = ({ navigation }) => {
    const [sneakers, setSneakers] = useState([])



    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://v1-sneakers.p.rapidapi.com/v1/sneakers',
            params: { limit: '30', brand: 'Nike' },
            headers: {
                'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com',
                'x-rapidapi-key': '3a078f25a8msha04eb6a3dc965dap19f9a7jsnc55a62d1eb0e'
            }
        }).then(response => {

            setSneakers([...sneakers, ...response.data.results])
            console.log("je suis la");

        })
            .catch(error => {
                console.log(error)
            })
    }, [])


    console.log("je suis la");


    return (
        <View>

            <FlatList

                data={sneakers}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Card item={item} navigation={navigation}/>

                )}

            />


        </View>


    )
}

const ViewStyle = styled.View`
    alignItems: center;
`

export default Sneakers