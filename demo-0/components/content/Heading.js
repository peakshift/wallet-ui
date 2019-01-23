import React from 'react';
import {StyleSheet, Text } from 'react-native';

export class Heading extends React.Component {
  render() {
    return (
      <Text style={styles.heading}>{this.props.text}</Text>
    )
  }
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    padding: 10,
    marginTop: 10
  }
});