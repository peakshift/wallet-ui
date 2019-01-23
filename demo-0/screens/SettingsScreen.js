import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text>Settings</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
});

