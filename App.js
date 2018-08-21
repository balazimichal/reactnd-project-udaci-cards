import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return <View style={styles.container}>
        <Image source={require("./img/udaci-cards-logo-200.png")} />
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c262f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
