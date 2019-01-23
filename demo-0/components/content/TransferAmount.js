import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export class TransferAmount extends React.Component {

  _getPositiveOrNegativeStyles = (amount) => {
    return amount > 0 ? 'positive' : 'negative'
  };

  render() {
    return (
      <View style={Object.assign({}, styles.amountContainer, styles[this._getPositiveOrNegativeStyles(this.props.amount) + 'ContainerBackground'])}>
        <Text style={Object.assign({}, styles.amount, styles[this._getPositiveOrNegativeStyles(this.props.amount) + 'Text'])}>
          {this.props.amount > 0 ? '+' : ''}{this.props.amount} {this.props.currencyCode}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  amountContainer: {
    borderRadius: 5,
    padding: 5
  },
  amount: {
    fontWeight: 'bold'
  },
  positiveContainerBackground: {
    backgroundColor: '#E9FDCB'
  },
  positiveText: {
    color: '#4C711C',
  },
  negativeContainerBackground: {
    backgroundColor: '#FAE1E1'
  },
  negativeText: {
    color: '#490203',
  }
});