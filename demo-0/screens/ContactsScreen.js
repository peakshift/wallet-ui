import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

export default class ContactsScreen extends React.Component {
  static navigationOptions = {
    title: 'Contacts'
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text>Contacts</Text>
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
