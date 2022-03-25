import React, { useState } from 'react'
import { View, ActivityIndicator, Image, Text } from 'react-native'
import styled from 'styled-components'


const Loader = ({ navigation }) => {

    return (
        <View>
            <ActivityIndicator size="large" /> 
        </View>
            

    )
}

export default Loader