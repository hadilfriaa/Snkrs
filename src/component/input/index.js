import React from "react";
import { StyleSheet, TextInput } from "react-native";
import styled from 'styled-components'


function Input(props) {

  return (
    <InputStyled
      onChangeText={props.onChangeText}
      placeholder={props.placeholder}
    />
  );
};

const InputStyled = styled.TextInput`
    height: 40px ;
    margin: 12px ;
    borderWidth: 1px ;
    borderRadius: 40px;
    padding: 10px ;
    background: #ffffff
`

export default Input;