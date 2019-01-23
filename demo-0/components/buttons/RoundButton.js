import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export class RoundButton extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.buttonContainer} onPress={this.props.action}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    paddingHorizontal: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    marginRight: 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#398DCA',
    fontSize: 16
  }
});