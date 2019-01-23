import React from 'react';
import { Image, StyleSheet } from 'react-native';

export class HeaderImage extends React.Component {
  render() {
    return (
      <Image
        source={this.props.source}
        style={styles.headerImage}
      />
    )
  }
}

const styles = StyleSheet.create({
  headerImage: {
    resizeMode: 'contain',
    width: 150
  }
});