import React from 'react'
import styled from 'styled-components'
import { Text } from 'react-native'

const StyledText = styled(Text)`
  font-size: 20px;
  padding: 10px;
  margin-top: 10px;
`

export class Heading extends React.Component {
  render () {
    return (
      <StyledText>{this.props.text}</StyledText>
    )
  }
}