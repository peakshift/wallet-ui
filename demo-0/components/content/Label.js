import React from 'react';
import {StyleSheet, Text } from 'react-native';

export class Label extends React.Component {
  render() {
    return (
      <Text style={styles.summaryLabel}>{this.props.text}</Text>
    )
  }
}

const styles = StyleSheet.create({
  summaryLabel: {
    color: '#6AB1DA',
    textTransform: 'uppercase',
    fontWeight: '600'
  }
});