import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, Dimensions, Platform, StatusBar, TextInput, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { black, red, blue, lightgrey, white, orange } from '../utils/colors'
import { addDeck } from '../actions/decks'
import { saveDeckAPI } from '../utils/api'
import { MaterialIcons } from "@expo/vector-icons";

class NewDeckView extends Component {

    state = {
        text: '',
        error: ''
    }

    onDeckSubmit = () => {
        const match = this.props.state.filter((deck) => {
            return deck.title === this.state.text
        })
        if (this.state.text !== '' && match.length === 0) {
            this.props.dispatch(addDeck(this.state.text))
            saveDeckAPI(this.state.text)
            this.props.navigation.navigate('Decks')
            this.setState({ text: '' })
        } else {

            if (this.state.text === '') {
                const errorMsg = 'Title can not be empty'
                this.setState({ error: errorMsg });
            }
            if (match.length !== 0) {
                const errorMsg = 'There is already such title in your deck'
                this.setState({ error: errorMsg });
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
                <Text style={styles.title}>What is the title of your new deck?</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    maxLength={20}
                    autoFocus={true}
                    placeholder='Type your title'
                    placeholderTextColor={lightgrey}
                />
                <TouchableHighlight style={styles.button} onPress={this.onDeckSubmit} underlayColor={orange}>
                    <Text style={styles.buttonTitle}>CREATE DECK</Text>
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

export default connect(mapStateToProps)(NewDeckView)


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
    },
    title: {
        fontSize: 40,
        color: blue,
        textAlign: 'center',
        marginBottom: 60
    },
    input: { 
        height: 60, 
        borderBottomColor: lightgrey, 
        borderBottomWidth: 1,
        fontSize: 20,
        color: white,
        marginBottom: 30,
    },
    button: {
        backgroundColor: blue,
        height:50,
        borderRadius: Platform.OS === 'ios' ? 10 : 2,
        marginBottom: 30
    },
    buttonTitle: {
        textAlign: 'center',
        color: white,
        fontSize: 20,
        lineHeight: 50,
        fontWeight: 'bold'
    },
    error: {
        backgroundColor: red,
        color: white,
        fontSize: 14,
        textAlign: 'center',
        height: 50,
        lineHeight: 50,
        marginBottom: 20,
    },
    icon: {
        lineHeight: 50,
        marginTop: 20,
        /* this is the one that does not work - I have tried marginBottom too, also with negative values */
    }

});