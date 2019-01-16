import React from 'react';
import { SafeAreaView, TouchableOpacity, View, Image, FlatList, StyleSheet, Text, Dimensions } from 'react-native';

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
        <View style={styles.header}>
          <View>
            <Image
              source={require('../assets/images/logo-syscoin.png')}
              style={styles.headerImage}
            />
          </View>
        </View>
        <View style={styles.summaryContainer}>
          <Image
            source={require('../assets/images/avatar.png')}
            style={styles.summaryImageContainer}
          />
          <View style={styles.summaryInfoContainer}>
            <View style={styles.summaryInfoItem}>
              <Text style={styles.summaryLabel}>{'{Account Label}'}</Text>
              <Text style={styles.summaryWalletAddress}>SRhwEU1aQk2DPJSC6NTySTdCEtGpS7UF4Y</Text>
            </View>
            <View style={styles.summaryInfoItem}>
              <Text style={styles.summaryLabel}>Balance</Text>
              <Text style={styles.summaryBalance}>10,456.13 SYS</Text>
            </View>
            <View style={Object.assign({}, styles.summaryInfoItem, styles.summaryButtonsContainer)}>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => console.log('send')}>
                <Text style={styles.buttonText}>Send</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => console.log('receive')}>
                <Text style={styles.buttonText}>Receive</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.transfersContainer}>
          <Text style={styles.heading}>Transfers</Text>
          <FlatList
            style={styles.transfersList}
            data={this.state.transfers}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.transfersListItem} onPress={() => console.log('clicked item with id:' + item.id)}>
                  <View style={styles.leftContainer}>
                    <View style={styles.transfersListItemImage}>
                    </View>
                    <Text style={styles.personName}>{item.name}</Text>
                  </View>
                  <View style={styles.rightContainer}>
                    <View style={Object.assign({}, styles.amountContainer, styles[this._getPositiveOrNegativeStyles(item.amount) + 'ContainerBackground'])}>
                      <Text style={Object.assign({}, styles.amount, styles[this._getPositiveOrNegativeStyles(item.amount) + 'Text'])}>
                        {item.amount > 0 ? '+' : ''}{item.amount} SYS
                      </Text>
                    </View>
                  </View>
              </TouchableOpacity>
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
    justifyContent: 'flex-start',
    backgroundColor: '#398DCA'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerImage: {
    resizeMode: 'contain',
    width: 150
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
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 30,
    marginBottom: 10
  },
  summaryImageContainer: {
    backgroundColor: 'gray',
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
    borderWidth: 2,
    borderColor: 'white'
  },
  summaryInfoContainer: {

  },
  summaryInfoItem: {
    marginBottom: 20
  },
  summaryLabel: {
    color: '#6AB1DA',
    textTransform: 'uppercase',
    fontWeight: '600'
  },
  summaryBalance: {
    color: 'white',
    fontSize: 20
  },
  summaryWalletAddress: {
    color: 'white',
    fontWeight: 'bold'
  },
  summaryButtonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    padding: 10,
    paddingHorizontal: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    marginRight: 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#398DCA',
    fontSize: 16
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
