import React from 'react';
import {StyleSheet, Text } from 'react-native';

export class WalletAddress extends React.Component {
  render() {
    return (
      <Text style={styles.summaryWalletAddress}>{this.props.address}</Text>
    )
  }
}

const styles = StyleSheet.create({
  summaryWalletAddress: {
    color: 'white',
    fontWeight: 'bold'
  }
});