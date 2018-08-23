import React from 'react'
import { saveDecksAPI, getDecksAPI, removeDecksAPI, decks } from './utils/api'
import { Provider } from 'react-redux'
import store from './redux/deck'
import { getDecks, setDecks } from './actions/decks'
import DeckListView from './components/DeckListView'
import NewDeckView from './components/NewDeckView'
import IndividualDeckView from './components/IndividualDeckView'
import NewQuestionView from './components/NewQuestionView'
import QuizView from './components/QuizView'
import Splash from './components/Splash'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { blue, specialgrey, darkgrey, lightgrey } from './utils/colors'
import { setLocalNotification } from './utils/helpers'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'




export default class App extends React.Component {

  state = {
    loaded : false
  }



  componentDidMount () {

    /*
    setTimeout(function () {
      this.setState({ loaded: true });
    }.bind(this), 2000)
    */

    console.log("UdaciCards");
    setLocalNotification()


    getDecksAPI()
      .then((data) => {
        if(data !== undefined) {
          store.dispatch(setDecks(data))
          console.log('setting the deck with data from async storage')
        } else {
          saveDecksAPI()
          store.dispatch(setDecks(decks))
          console.log("populating async storage with default data");
        }

        store.dispatch(getDecks())
        this.setState({ loaded: true });
      });

    //removeDecksAPI()

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
      title: 'Deck',
      headerTintColor: blue,
      headerStyle: {
        backgroundColor: darkgrey
      }
    }
  },
  NewQuestionView: {
    screen: NewQuestionView,
    navigationOptions: {
      title: 'New Question',
      headerTintColor: blue,
      headerStyle: {
        backgroundColor: darkgrey
      }
    }
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: {
      title: 'Quiz',
      headerTintColor: blue,
      headerStyle: {
        backgroundColor: darkgrey
      }
    }
  }
});

