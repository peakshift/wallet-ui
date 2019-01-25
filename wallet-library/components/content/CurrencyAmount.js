import React from 'react'
import styled from 'styled-components'
import { Text } from 'react-native'

const SummaryBalance = styled(Text)`
  color: white;
  font-size: 20px;
`

export class CurrencyAmount extends React.Component {
  render () {
    return (
      <SummaryBalance>
        {this.props.amount}
        {this.props.currencyCode.toUpperCase()}
      </SummaryBalance>
    )
  }
}