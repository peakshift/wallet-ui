import React from 'react';
import { StyleSheet, View } from 'react-native';
import { HeaderImage } from "./images/HeaderImage";
import { HeaderButton } from "./buttons/HeaderButton";

export class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.headerItem}>
        </View>
        <View style={styles.headerCenterItem}>
          <HeaderImage source={this.props.imageSource} />
        </View>
        <View style={styles.headerItem}>
          <HeaderButton
            text={this.props.rightButtonText}
            action={this.props.rightButtonAction}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerItem: {
    flex: 1,
    paddingHorizontal: 10
  },
  headerCenterItem: {
    paddingHorizontal: 10
  }
});