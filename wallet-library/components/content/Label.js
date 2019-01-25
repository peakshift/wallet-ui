import React from 'react'
import styled from 'styled-components'
import { Text } from 'react-native'

const SummaryLabel = styled(Text)`
  color: #6AB1DA;
  text-transform: uppercase;
  font-weight: 600
`

export class Label extends React.Component {
  render () {
    return (
      <SummaryLabel>{this.props.text}</SummaryLabel>
    )
  }
}