import React from 'react';
import {StyleSheet, Text } from 'react-native';

export class CurrencyAmount extends React.Component {
  render() {
    return (
      <Text style={styles.summaryBalance}>
        {this.props.amount}
        {this.props.currencyCode.toUpperCase()}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  summaryBalance: {
    color: 'white',
    fontSize: 20
  }
});