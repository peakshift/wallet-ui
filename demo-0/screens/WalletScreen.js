import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Header } from "../components/Header";
import { WalletSummary } from "../components/WalletSummary";
import { WalletTransfers } from "../components/WalletTransfers";

export default class WalletScreen extends React.Component {
  static navigationOptions = {
    title: 'Wallet',
    header: null
  };

  constructor (props) {
    super(props);

    this.state = {
      currency: {
        code: 'SYS',
        name: 'Syscoin',
        logo: require('../assets/images/logo-syscoin.png')
      },
      user: {
        avatar: require('../assets/images/avatar.png'),
        address: 'SRhwEU1aQk2DPJSC6NTySTdCE...',
        balance: '10,456.13',
      }
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          imageSource={this.state.currency.logo}
          rightButtonText={'Proposals'}
          rightButtonAction={() => console.log('clicked proposals')}
        />
        <WalletSummary
          currency={this.state.currency}
          user={this.state.user}
        />
        <WalletTransfers
          currency={this.state.currency}
          user={this.state.user}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#398DCA'
  }
});
