import React from 'react';
import { Image, StyleSheet } from 'react-native';

export class CircleAvatarImage extends React.Component {
  render() {
    return (
      <Image
        source={this.props.source}
        style={styles.summaryImageContainer}
      />
    )
  }
}

const styles = StyleSheet.create({
  summaryImageContainer: {
    backgroundColor: 'gray',
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
    borderWidth: 2,
    borderColor: 'white'
  }
});