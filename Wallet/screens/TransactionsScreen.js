import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

export default class TransactionsScreen extends React.Component {
  static navigationOptions = {
    title: 'Transactions',
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text>Transactions</Text>
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