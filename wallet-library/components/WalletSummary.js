import React from 'react';
import styled from 'styled-components'
import { View} from 'react-native';
import { CircleAvatarImage } from "./images/CircleAvatarImage";
import { RoundButton } from "./buttons/RoundButton";
import { Label } from "./content/Label";
import { WalletAddress } from "./content/WalletAddress";
import { CurrencyAmount } from "./content/CurrencyAmount";


const SummaryContainer = styled(View)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 30px;
  margin-bottom: 10px;
`

const SummaryInfoItem = styled(View)`
  margin-bottom: 20px;
`

const SummaryInfoItemB = styled(View)`
  margin-bottom: 20px;
  flex-direction: row;
`


export class WalletSummary extends React.Component {

  constructor (props) {
    super(props);
  }

  async _onSend () {
    console.log('send')
  }

  async _onReceive () {
    console.log('receive')
  }

  render() {
    return (
      <SummaryContainer>
        <CircleAvatarImage
          source={this.props.user.avatar}
        />
        <View>
          <SummaryInfoItem>
            <Label text={'{Account Label}'} />
            <WalletAddress address={this.props.user.address} />
          </SummaryInfoItem>
          <SummaryInfoItem>
            <Label text='Balance' />
            <CurrencyAmount
              amount={this.props.user.balance}
              currencyCode={this.props.currency.code}
            />
          </SummaryInfoItem>
          <SummaryInfoItemB>
            <RoundButton
              text="Send"
              action={this._onSend}
            />
            <RoundButton
              text="Receive"
              action={this._onReceive}
            />
          </SummaryInfoItemB>
        </View>
      </SummaryContainer>
    )
  }
}