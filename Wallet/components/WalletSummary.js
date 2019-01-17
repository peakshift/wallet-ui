import React from 'react';
import { StyleSheet, View} from 'react-native';
import { CircleAvatarImage } from "./images/CircleAvatarImage";
import { RoundButton } from "./buttons/RoundButton";
import { Label } from "./content/Label";
import { WalletAddress } from "./content/WalletAddress";
import { CurrencyAmount } from "./content/CurrencyAmount";

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
      <View style={styles.summaryContainer}>
        <CircleAvatarImage
          source={this.props.user.avatar}
        />
        <View>
          <View style={styles.summaryInfoItem}>
            <Label text={'{Account Label}'} />
            <WalletAddress address={this.props.user.address} />
          </View>
          <View style={styles.summaryInfoItem}>
            <Label text='Balance' />
            <CurrencyAmount
              amount={this.props.user.balance}
              currencyCode={this.props.currency.code}
            />
          </View>
          <View style={Object.assign({}, styles.summaryInfoItem, styles.summaryButtonsContainer)}>
            <RoundButton
              text="Send"
              action={this._onSend}
            />
            <RoundButton
              text="Receive"
              action={this._onReceive}
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 30,
    marginBottom: 10
  },
  summaryInfoItem: {
    marginBottom: 20
  },
  summaryButtonsContainer: {
    flexDirection: 'row'
  },
});