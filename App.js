import React from 'react'
import { StyleSheet, View, Image, StatusBar, Text } from 'react-native'
import { black } from './utils/colors'
import { setLocalNotification } from './utils/helpers'
//import { setDecks, getDecks, getDeck } from './utils/api'
import { decks } from './utils/_DATA'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import DeckListView from './components/DeckListView'
import { createBottomTabNavigator } from 'react-navigation'




const setDecks = () => ({
  type: 'SET_DECKS'
})


const store = createStore((state = [], action) => {
  switch (action.type) {
    case 'SET_DECKS':
      return state = decks
    default:
      return state
  }
})


store.subscribe(() => {
  console.log(store.getState())
})




export default class App extends React.Component {

  state = {
    loaded : false
  }



  componentDidMount () {

    console.log("%c UdaciCards", "font-size:14px;color:#02b3e4");
    setLocalNotification()

    store.dispatch(setDecks())

    setTimeout(function () {
      this.setState({ loaded: true });
    }.bind(this), 2000)
    
    /*
    const decks = getDecks()
    console.log('decks: ', decks)

    const res = getDeck('React')
    console.log('id: ', res.title)
    */

  }


  render() {

    if(this.state.loaded === false) {
      return <View style={styles.container}>
          <StatusBar barStyle="light-content" />
        <Image source={require("./img/udaci-cards-logo-200.png")} style={{ width: 200, height: 200 }} />
        </View>;
    } 


    return <Provider store={store}>
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <DeckListView />
      </View>
    </Provider> 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200
  }
});
