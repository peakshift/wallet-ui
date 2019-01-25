import React from 'react'
import styled from 'styled-components'
import { Text, TouchableOpacity, View } from 'react-native'
import { TransferItemAvatarImage } from "../images/TransferItemAvatarImage"
import { TransferAmount } from "../content/TransferAmount"


const StyledTransferListItem = styled(TouchableOpacity)`
  padding: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #EFEFEF;
`

const LeftContainer = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

const PersonName = styled(Text)`
  font-size: 16px;
`

const RightContainer = styled(View)`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`


export class TransferListItem extends React.Component {
  render () {
    return (
      <StyledTransferListItem onPress={this.props.action}>
        <LeftContainer>
          <TransferItemAvatarImage source={this.props.image} />
          <PersonName>{this.props.name}</PersonName>
        </LeftContainer>
        <RightContainer>
          <TransferAmount
            amount={this.props.amount}
            currencyCode={this.props.currencyCode}
          />
        </RightContainer>
      </StyledTransferListItem>
    )
  }
}