import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, Dimensions, Platform, StatusBar, TextInput, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { black, darkgrey, blue, lightgrey, white, orange } from '../utils/colors'
import { getDeck } from "../actions/decks";

class IndividualDeckView extends Component {

    handleAddCard = () => {
        this.props.navigation.navigate('NewQuestionView')
    }

    handleStartQuiz = () => {
        console.log('start quiz')
    }


  render() {

      const { deck } = this.props.navigation.state.params

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
            />
            <ScrollView style={styles.view}>
                <Text style={styles.title}>{deck.title}</Text>
                <Text style={styles.subtitle}>{deck.questions.length} card{deck.questions.length !== 1 && 's'}</Text>
                <TouchableHighlight style={styles.button} onPress={this.handleAddCard} underlayColor={orange}>
                    <Text style={styles.buttonTitle}>ADD CARD</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button} onPress={this.handleStartQuiz} underlayColor={orange}>
                    <Text style={styles.buttonTitle}>START QUIZ</Text>
                </TouchableHighlight>
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

export default connect(mapStateToProps)(IndividualDeckView)

var width = Dimensions.get('window').width; //full width
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: black,
        alignItems: 'center',
        justifyContent: 'center',
    },
    view: {
        padding: 30,
        paddingTop: 60,
        width: width - 60,
    },
    title: {
        fontSize: 40,
        color: blue,
        textAlign: 'center',
        marginBottom: 20
    },
    subtitle: {
        fontSize: 20,
        color: lightgrey,
        textAlign: 'center',
        marginBottom: 40
    },
    button: {
        backgroundColor: blue,
        height: 50,
        borderRadius: Platform.OS === 'ios' ? 10 : 2,
        marginBottom: 20,
    },
    buttonTitle: {
        textAlign: 'center',
        color: white,
        fontSize: 20,
        lineHeight: 50,
        fontWeight: 'bold',
    }
});