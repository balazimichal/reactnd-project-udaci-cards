import React from 'react'
import { setLocalNotification } from './utils/helpers'
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
//import { setDecks, getDecks, getDeck } from './utils/api'
import { decks } from './utils/_DATA'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import DeckListView from './components/DeckListView'
import NewDeckView from './components/NewDeckView'
import IndividualDeckView from './components/IndividualDeckView'
import Splash from './components/Splash'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { blue, specialgrey, darkgrey, lightgrey } from './utils/colors'
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





const Tabs = createBottomTabNavigator(
  {
    Decks: {
      screen: DeckListView,
      navigationOptions: {
        tabBarLabel: "Decks",
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="cards" size={30} color={tintColor} />
        )
      }
    },
    NewDeck: {
      screen: NewDeckView,
      navigationOptions: {
        tabBarLabel: "Add deck",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-add" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: blue,
      inactiveTintColor: lightgrey,
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: darkgrey,
        borderTopWidth: 1,
        borderTopColor: specialgrey,
        paddingTop:10,
        height:60
      }
    }
  }
);


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
      title: 'Back to Decks',
      headerTintColor: blue,
      headerStyle: {
        backgroundColor: darkgrey
      }
    }
  }
});

