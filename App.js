import React from 'react';
import { StyleSheet, View, Image, StatusBar } from 'react-native';
import { black } from './utils/colors'
import { setLocalNotification } from './utils/helpers'

export default class App extends React.Component {

  componentDidMount () {
    setLocalNotification()

    let tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(20)
    tomorrow.setMinutes(0)

    console.log('tomorrow: ',tomorrow)
  }

  render() {
    return <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
      />
        <Image source={require("./img/udaci-cards-logo-200.png")} />
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: black,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
