import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import { WalletTransfers } from "../components/WalletTransfers";

export default class TransactionsScreen extends React.Component {
  static navigationOptions = {
    title: 'Transactions',
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
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
});