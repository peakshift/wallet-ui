import React from 'react';
import { SafeAreaView, ScrollView, View, FlatList, StyleSheet, Text, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default class WalletScreen extends React.Component {
  static navigationOptions = {
    title: 'Wallet',
    header: null
  };

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
  }

  async _fetchTransfers () {
    setTimeout(() => {
      this.setState({
        loading: false,
        refreshing: false,
        transfers: [
          {
            id: 1,
            image: 'img',
            name: 'Jag McJagface',
            amount: -37
          },
          {
            id: 2,
            image: 'img',
            name: 'Jane Wales',
            amount: 98
          },
          {
            id: 3,
            image: 'img',
            name: 'Johns Beharry',
            amount: 351
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
    })
  };

  _getPositiveOrNegativeStyles = (amount) => {
    return amount > 0 ? 'positive' : 'negative'
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.summaryContainer}>
          <Text style={styles.whiteText}>Wallet summary</Text>
        </View>
        <View style={styles.transfersContainer}>
          <Text style={styles.heading}>Transfers</Text>
          <FlatList
            style={styles.transfersList}
            data={this.state.transfers}
            renderItem={({item}) => (
              <View style={styles.transfersListItem}>
                <View style={styles.leftContainer}>
                  <View style={styles.transfersListItemImage}>
                  </View>
                  <Text style={styles.personName}>{item.name}</Text>
                </View>
                <View style={styles.rightContainer}>
                  <View style={Object.assign({}, styles.amountContainer, styles[this._getPositiveOrNegativeStyles(item.amount) + 'ContainerBackground'])}>
                    <Text style={Object.assign({}, styles.amount, styles[this._getPositiveOrNegativeStyles(item.amount) + 'Text'])}>
                      {item.amount.toString()} SYS
                    </Text>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            refreshing={this.state.refreshing}
            onRefresh={this._handleRefresh}
            ListEmptyComponent={<Text>You don't have any transfers yet.</Text>}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#398DCA'
  },
  whiteText: {
    color: '#fff'
  },
  heading: {
    fontSize: 20,
    padding: 10,
    marginTop: 10
  },
  summaryContainer: {
    marginTop: 100,
    padding: 50,
    marginBottom: 100,
  },
  transfersContainer: {
    backgroundColor: '#fff',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  transfersList: {
    marginTop: 10,
    width: windowWidth,
  },
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
  transfersListItemImage: {
    backgroundColor: '#D6D6D6',
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  },
  personName: {
    fontSize: 16
  },
  rightContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
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
