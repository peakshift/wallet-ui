import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export class HeaderButton extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.action}>
        <Text style={styles.textButton}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  textButton: {
    textAlign: 'right',
    fontSize: 16,
    color: '#fff'
  }
});