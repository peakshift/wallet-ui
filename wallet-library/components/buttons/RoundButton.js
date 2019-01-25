import React from 'react'
import styled from 'styled-components'
import { Text, TouchableOpacity } from 'react-native'

const ButtonContainer = styled(TouchableOpacity)`
  padding: 10px;
  padding-horizontal: 30px;
  background-color: white;
  border-radius: 20px;
  margin-right: 10px;
`

const ButtonText = styled(Text)`
  text-align: center;
  color: #398DCA;
  font-size: 16px;
`

export class RoundButton extends React.Component {
  render () {
    return (
      <ButtonContainer onPress={this.props.action}>
        <ButtonText>{this.props.text}</ButtonText>
      </ButtonContainer>
    )
  }
}