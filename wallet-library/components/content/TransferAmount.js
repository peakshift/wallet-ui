import React from 'react'
import styled from 'styled-components'
import { Text, View } from 'react-native'

const AmountContainer = styled(View)`
  border-radius: 5px;
  padding: 5px;
`

const PositiveContainer = styled(AmountContainer)`
  background-color: #E9FDCB;
`

const NegativeContainer = styled(AmountContainer)`
  background-color: #FAE1E1;
`

const Amount = styled(Text)`
  font-weight: bold;
`

const PositiveText = styled(Amount)`
  color: #4C711C;
`

const NegativeText = styled(Amount)`
  color: #490203;
`

export class TransferAmount extends React.Component {

  _getPositiveOrNegativeStyles = (amount) => {
    return amount > 0 ? 'positive' : 'negative'
  }

  render () {
    return (
      this._getPositiveOrNegativeStyles(this.props.amount) === 'positive' ?
        <PositiveContainer>
          <PositiveText>+ {this.props.amount} {this.props.currencyCode}</PositiveText>
        </PositiveContainer> :
        <NegativeContainer>
          <NegativeText>{this.props.amount} {this.props.currencyCode}</NegativeText>
        </NegativeContainer>
    )
  }
}