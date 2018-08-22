import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, Dimensions, Platform, StatusBar, TextInput, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { black, red, blue, lightgrey, white, orange } from '../utils/colors'
import { addQuestion } from '../actions/decks'
import { MaterialIcons } from "@expo/vector-icons";

class NewQuestionView extends Component {

    state = {
        question: '',
        answer: '',
        error: ''
    }

    handleQuestionSubmit = () => {
        if (this.state.question !== '' && this.state.answer !== '') {

            const questions = {question: this.state.question, answer: this.state.answer}
            this.props.dispatch(addQuestion(this.props.navigation.state.params.title, questions));
            //console.log(this.props.navigation.state.params.deck.title, questions);
            this.setState({ question: '', answer: '' });
            this.props.navigation.navigate('IndividualDeckView')
        } else {
            if (this.state.question === '' && this.state.answer === '') {
                this.setState({ error: 'Question and Answer can not be empty' });
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <ScrollView style={styles.view}>
                    <Text style={styles.title}>Add new question</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(question) => this.setState({ question })}
                        value={this.state.question}
                        maxLength={20}
                        autoFocus={true}
                        placeholder='Type your question'
                        placeholderTextColor={lightgrey}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(answer) => this.setState({ answer })}
                        value={this.state.answer}
                        maxLength={20}
                        placeholder='Type your answer'
                        placeholderTextColor={lightgrey}
                    />
                    <TouchableHighlight style={styles.button} onPress={this.handleQuestionSubmit} underlayColor={orange}>
                        <Text style={styles.buttonTitle}>SUBMIT QUESTION</Text>
                    </TouchableHighlight>
                    {this.state.error !== '' && <Text style={styles.error}><MaterialIcons style={styles.icon} name="error" size={30} color={white} /> {this.state.error}</Text>}
                </ScrollView>
            </View>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps)(NewQuestionView)


var width = Dimensions.get('window').width; //full width
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
  title: {
    fontSize: 40,
    color: blue,
    textAlign: "center",
    marginBottom: 20
  },
  input: {
    height: 60,
    borderBottomColor: lightgrey,
    borderBottomWidth: 1,
    fontSize: 20,
    color: white,
    marginBottom: 30
  },
  button: {
    backgroundColor: blue,
    height: 50,
    borderRadius: Platform.OS === "ios" ? 10 : 2,
    marginBottom: 30
  },
  buttonTitle: {
    textAlign: "center",
    color: white,
    fontSize: 20,
    lineHeight: 50,
    fontWeight: "bold"
  },
  error: {
    backgroundColor: red,
    color: white,
    fontSize: 14,
    textAlign: "center",
    height: 50,
    lineHeight: 50
  },
  icon: {
    lineHeight: 50,
    marginTop: 20,
  }
});