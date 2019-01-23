import React from 'react';
import { Image, StyleSheet } from 'react-native';

export class TransferItemAvatarImage extends React.Component {
  render() {
    return (
      <Image
        source={this.props.source}
        style={styles.transfersListItemImage}
      />
    )
  }
}

const styles = StyleSheet.create({
  transfersListItemImage: {
    backgroundColor: '#D6D6D6',
    width: 40,
    height: 40,
    resizeMode: 'cover',
    borderRadius: 20,
    marginRight: 10
  }
});