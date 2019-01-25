import React from 'react'
import styled from 'styled-components'
import { Text, TouchableOpacity } from 'react-native'


const TextButton = styled(Text)`
  text-align: right;
  font-size: 16px;
  color: #fff;
`


export class HeaderButton extends React.Component {
  render () {
    return (
      <TouchableOpacity onPress={this.props.action}>
        <TextButton>{this.props.text}</TextButton>
      </TouchableOpacity>
    )
  }
}