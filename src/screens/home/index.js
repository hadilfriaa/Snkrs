import React, { useState, useEffect } from 'react'
import { ActivityIndicator, Text, View, FlatList, Image } from 'react-native'
import styled from 'styled-components'
import axios from "axios";
import Card from '../../component/card';
import { Title } from 'react-native-paper';
import Loader from '../../component/loader';


const Home = ({ navigation }) => {
    const [sneakersAv, setSneakersAv] = useState([])

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://v1-sneakers.p.rapidapi.com/v1/sneakers',
            params: { limit: '10', brand: 'Nike', name: 'sacai' },
            headers: {
                'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com',
                'x-rapidapi-key': '3a078f25a8msha04eb6a3dc965dap19f9a7jsnc55a62d1eb0e'
            }
        }).then(response => {

            setSneakersAv([...sneakersAv, ...response.data.results])
        })
            .catch(error => {
                console.log(error)
            })
    }, [])



    return (
        <ViewStyle>

            <Title> À venir </Title>

            {sneakersAv.length == 0 ?
                <Loader />
                : <FlatList

                data={sneakersAv}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Card item={item} navigation={navigation} />

                )}


            />

            }


        </ViewStyle>


    )
}

const ViewStyle = styled.View`
    alignItems: center;
`



export default Home