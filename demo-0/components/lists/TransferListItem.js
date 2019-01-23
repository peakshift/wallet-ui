import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { TransferItemAvatarImage } from "../images/TransferItemAvatarImage";
import { TransferAmount } from "../content/TransferAmount";

export class TransferListItem extends React.Component {

  render() {
    return (
      <TouchableOpacity style={styles.transfersListItem} onPress={this.props.action}>
        <View style={styles.leftContainer}>
          <TransferItemAvatarImage source={this.props.image} />
          <Text style={styles.personName}>{this.props.name}</Text>
        </View>
        <View style={styles.rightContainer}>
          <TransferAmount
            amount={this.props.amount}
            currencyCode={this.props.currencyCode}
          />
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  transfersListItem: {
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF'
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  personName: {
    fontSize: 16
  },
  rightContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});