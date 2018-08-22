import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, Dimensions, Platform, StatusBar, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { black, blue, lightgrey, white, orange, red, green } from '../utils/colors'

class QuizView extends Component {
  render() {
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
            />
            <ScrollView style={styles.view}>

                <Text style={styles.title}>Quiz View</Text>
                <Text style={styles.subtitle}>Answer</Text>

                <TouchableHighlight style={styles.buttonOK} onPress={this.handleAddCard} underlayColor={orange}>
                    <Text style={styles.buttonTitle}>CORRECT</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.buttonError} onPress={this.handleStartQuiz} underlayColor={orange}>
                    <Text style={styles.buttonTitle}>INCORRECT</Text>
                </TouchableHighlight>
            </ScrollView>
        </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps)(QuizView);

var width = Dimensions.get("window").width; //full width
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: black,
    alignItems: "center",
    justifyContent: "center"
  },
  view: {
    padding: 30,
    paddingTop: 60,
    width: width - 60
  },
  title: {
    fontSize: 40,
    color: blue,
    textAlign: "center",
    marginBottom: 80
  },
  subtitle: {
    fontSize: 20,
    color: lightgrey,
    textAlign: "center",
    marginBottom: 40
  },
  buttonError: {
    backgroundColor: red,
    height: 50,
    borderRadius: Platform.OS === "ios" ? 10 : 2,
    marginBottom: 20
  },
    buttonOK: {
        backgroundColor: green,
        height: 50,
        borderRadius: Platform.OS === "ios" ? 10 : 2,
        marginBottom: 20
    },
  buttonTitle: {
    textAlign: "center",
    color: white,
    fontSize: 20,
    lineHeight: 50,
    fontWeight: "bold"
  }
});


