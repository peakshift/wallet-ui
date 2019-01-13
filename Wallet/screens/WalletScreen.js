import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

export default class WalletScreen extends React.Component {
  static navigationOptions = {
    title: 'Wallet',
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text>Wallet</Text>
        </ScrollView>
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
