import React from 'react'
import { setLocalNotification } from './utils/helpers'
//import { setDecks, getDecks, getDeck } from './utils/api'
import { decks } from './utils/_DATA'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import DeckListView from './components/DeckListView'
import NewDeckView from './components/NewDeckView'
import IndividualDeckView from './components/IndividualDeckView'
import Splash from './components/Splash'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { blue, black, darkgrey, lightgrey } from './utils/colors'
import { getDecks } from './actions/decks'






const store = createStore((state = [], action) => {
  switch (action.type) {
    case 'ADD_DECK':
      return state = state.concat({ title: action.title, questions: [] })
    case 'GET_DECKS':
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

    store.dispatch(getDecks())

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
      return <Splash />;
    } 


    return <Provider store={store}>
        <MainNavigator />
    </Provider> 
  }
}





const Tabs = createBottomTabNavigator({
  Decks: DeckListView,
  NewDeck: NewDeckView,
},
{
  tabBarOptions: {
    activeTintColor: blue,
    inactiveTintColor: lightgrey,
    labelStyle: {
      fontSize: 20,
    },
    style: {
      backgroundColor: darkgrey,
      borderTopWidth: 1,
      borderTopColor: '#000000',
    },
  },
});


const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  },
  IndividualDeckView: {
    screen: IndividualDeckView,
    navigationOptions: {
      headerTintColor: blue,
      headerStyle: {
        backgroundColor: darkgrey
      }
    }
  }
});

