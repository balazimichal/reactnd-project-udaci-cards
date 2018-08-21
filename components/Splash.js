import React, { Component } from 'react'
import { View, Image, StyleSheet, StatusBar } from 'react-native'
import { black } from "../utils/colors";

export default class Splash extends Component {
  render() {
    return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Image source={require("../img/udaci-cards-logo-200.png")} style={{ width: 200, height: 200 }} />
        </View>
    )
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