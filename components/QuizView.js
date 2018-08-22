import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, Dimensions, Platform, StatusBar, TouchableHighlight, Button } from 'react-native'
import { connect } from 'react-redux'
import { black, blue, lightgrey, white, orange, red, green } from '../utils/colors'

class QuizView extends Component {

    state = {
        score: 0
    }


    handleCorrectAnswer = () => {
        console.log('correct')
    }

    handleIncorrectAnswer = () => {
        console.log('incorrect')
    }

    handleShowAnswer = () => {
        console.log('show answer')
    }

  render() {
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
            />
            <ScrollView style={styles.view}>
                <Text style={styles.helper}>1/2</Text>
                <Text style={styles.question}>Question?</Text>
                <Text style={styles.answer}>Answer</Text>
                <View style={styles.buttonShowAnswer}>
                    <Button
                        onPress={this.handleShowAnswer}
                        title="Show Answer"
                        color={lightgrey}
                    />
                </View>


                <TouchableHighlight style={styles.buttonOK} onPress={this.handleCorrectAnswer} underlayColor={orange}>
                    <Text style={styles.buttonTitle}>CORRECT</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.buttonError} onPress={this.handleIncorrectAnswer} underlayColor={orange}>
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
    width: width
  },
  question: {
    fontSize: 30,
    color: blue,
    textAlign: "center",
    marginBottom: 60
  },
    answer: {
        fontSize: 30,
        color: lightgrey,
        textAlign: "center",
        marginBottom: 60
    },
    buttonShowAnswer: {
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
  },
  helper: {
     color: lightgrey,
     fontSize: 16,
     marginBottom: 40, 
  }
});


