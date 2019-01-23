import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { TransferListItem } from "./lists/TransferListItem";
import { Heading } from "./content/Heading";
import Layout from '../constants/Layout'

export class WalletTransfers extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      loading: true,
      refreshing: false,
      error: null,
      transfers: []
    }
  }

  componentDidMount () {
    this._fetchTransfers()
      .then(() => {
        console.log('transfers fetched')
      })
  }

  async _fetchTransfers () {
    setTimeout(() => {
      this.setState({
        loading: false,
        refreshing: false,
        transfers: [
          {
            id: 1,
            image: require('../assets/images/robot-dev.png'),
            name: 'Jag McJagface',
            amount: -37
          },
          {
            id: 2,
            image: require('../assets/images/robot-dev.png'),
            name: 'Jane Wales',
            amount: 98
          },
          {
            id: 3,
            image: require('../assets/images/robot-dev.png'),
            name: 'Kenroy George',
            amount: -351
          },
          {
            id: 4,
            image: require('../assets/images/robot-dev.png'),
            name: 'Arvinda R.',
            amount: 13.4
          },
          {
            id: 5,
            image: require('../assets/images/robot-dev.png'),
            name: 'Massy Supermarket',
            amount: -5
          },
          {
            id: 6,
            image: require('../assets/images/robot-dev.png'),
            name: 'Office Shop',
            amount: -21.99
          },
          {
            id: 7,
            image: require('../assets/images/robot-dev.png'),
            name: 'IGA',
            amount: -59.23
          },
          {
            id: 8,
            image: require('../assets/images/robot-dev.png'),
            name: 'Food Land Ltd.',
            amount: -67.75
          }
        ]
      })
    }, 1000)
  }

  _handleRefresh = () => {
    this.setState({
      loading: true,
      refreshing: true,
    }, () => {
      this._fetchTransfers()
        .then(() => {
          console.log('transfers fetched')
        })
    })
  };

  _onTransferClick (id) {
    console.log(`clicked on transfer with id: ${id}`)
  }

  render() {
    return (
      <View style={styles.transfersContainer}>
        <Heading text='Transfers' />
        <FlatList
          style={styles.transfersList}
          data={this.state.transfers}
          renderItem={({item}) => (
            <TransferListItem
              id={item.id}
              name={item.name}
              image={item.image}
              amount={item.amount}
              currencyCode={this.props.currency.code}
              action={() => this._onTransferClick(item.id)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          refreshing={this.state.refreshing}
          onRefresh={this._handleRefresh}
          ListEmptyComponent={(
            <Text style={{ padding: 10 }}>
              You don't have any transfers yet.
            </Text>
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  transfersContainer: {
    backgroundColor: '#fff',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  transfersList: {
    marginTop: 10,
    width: Layout.window.width,
  }
});