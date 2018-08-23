import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, Dimensions, Platform, StatusBar, TouchableHighlight, Button } from 'react-native'
import { connect } from 'react-redux'
import { black, blue, lightgrey, white, orange, red, green } from '../utils/colors'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

class QuizView extends Component {



    state = {
        score: 0,
        questionsIndex: 0,
        totalQuestions: 0,
        questions: '',
        showAnswer: false,
        showScore: false,
    }


    handleCorrectAnswer = () => {
        if (this.state.questionsIndex +1 === this.state.totalQuestions) {
            this.setState((prevState) => ({
                score: prevState.score + 1,
                showScore: true
            }))

        } else {
            this.setState((prevState) => ({
                score: prevState.score + 1,
                questionsIndex: prevState.questionsIndex + 1,
                question: prevState.questions[0][prevState.questionsIndex + 1].question,
                answer: prevState.questions[0][prevState.questionsIndex + 1].answer,
                showAnswer: false
            }))
        }

    }

    handleIncorrectAnswer = () => {
        if (this.state.questionsIndex + 1 === this.state.totalQuestions) {
            this.setState({showScore: true})
        } else {
            this.setState((prevState) => ({
                questionsIndex: prevState.questionsIndex + 1,
                question: prevState.questions[0][prevState.questionsIndex + 1].question,
                answer: prevState.questions[0][prevState.questionsIndex + 1].answer,
                showAnswer: false
            }))
        }
    }

    handleShowAnswer = () => {
        this.setState({
            showAnswer: true
        })
    }

    handleBackToDeck = () => {
        this.props.navigation.navigate('IndividualDeckView')
    }

    handleStartQuiz = () => {
        const deck = this.props.state.filter((deck) => { return deck.title === this.props.navigation.state.params.title })

        const questions = deck.map((question) => {
            return question.questions
        })
        this.setState({
            score: 0,
            questionsIndex: 0,
            totalQuestions: parseInt(questions[0].length),
            questions: questions,
            question: questions[0][0].question,
            answer: questions[0][0].answer,
            showAnswer: false,
            showScore: false,
        }) 
    }

    componentDidMount() {

        clearLocalNotification().then(setLocalNotification)

        const deck = this.props.state.filter((deck) => { return deck.title === this.props.navigation.state.params.title })

        const questions = deck.map((question) => {
            return question.questions
        })

        this.setState({
            totalQuestions: parseInt(questions[0].length),
          questions: questions,
          question: questions[0][this.state.questionsIndex].question,
          answer: questions[0][this.state.questionsIndex].answer
        });

    }

  render() {

      if (this.state.showScore === true) {
          return (
              <View style={styles.container}>
                  <StatusBar
                      barStyle="light-content"
                  />
                  <ScrollView style={styles.view}>
                      <Text style={styles.question}>Your score is: {this.state.score}/{this.state.totalQuestions}</Text>

                      <TouchableHighlight style={styles.button} onPress={this.handleStartQuiz} underlayColor={orange}>
                          <Text style={styles.buttonTitle}>START QUIZ</Text>
                      </TouchableHighlight>
                    <TouchableHighlight style={styles.button} onPress={this.handleBackToDeck} underlayColor={orange}>
                        <Text style={styles.buttonTitle}>BACK TO DECK</Text>
                    </TouchableHighlight>


                  </ScrollView>
              </View>
          )
      }


    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
            />
            <ScrollView style={styles.view}>
                <Text style={styles.helper}>{this.state.questionsIndex + 1}/{this.state.totalQuestions}</Text>
                <Text>{this.state.deck}</Text>
                <Text style={styles.question}>{this.state.question}</Text>
                {this.state.showAnswer === true && 
                    <Text style={styles.answer}>{this.state.answer}</Text>
                }

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
    button: {
        backgroundColor: blue,
        height: 50,
        borderRadius: Platform.OS === 'ios' ? 10 : 2,
        marginBottom: 20,
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


