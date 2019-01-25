import React from 'react'
import styled from 'styled-components'
import { Text } from 'react-native'

const SummaryWalletAddress = styled(Text)`
  color: white;
  font-weight: bold;
`
export class WalletAddress extends React.Component {
  render () {
    return (
     <SummaryWalletAddress>{this.props.address}</SummaryWalletAddress>
    )
  }
}