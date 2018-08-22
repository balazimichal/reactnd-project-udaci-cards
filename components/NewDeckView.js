import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, Dimensions, Platform, StatusBar, TextInput, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { black, darkgrey, blue, lightgrey, white, orange } from '../utils/colors'
import { addDeck } from '../actions/decks'

class NewDeckView extends Component {

    state = {
        text: ''
    }

    onDeckSubmit = () => {
        this.props.dispatch(addDeck(this.state.text))
        this.props.navigation.navigate('Decks')
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
                    <Text style={styles.buttonTitle}>SUBMIT</Text>
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
    deck: {
        backgroundColor: darkgrey,
        alignItems: "center",
        justifyContent: "center",
        padding: 30,
        width: width - 60,
        marginBottom: 30,
        borderRadius: Platform.OS === 'ios' ? 10 : 2,
        borderWidth: 1,
        borderColor: lightgrey,
    },
    title: {
        fontSize: 40,
        color: blue,
        textAlign: 'center',
        marginBottom: 60
    },
    subtitle: {
        fontSize: 20,
        color: lightgrey,
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
    },
    buttonTitle: {
        textAlign: 'center',
        color: white,
        fontSize: 20,
        lineHeight: 50,
        fontWeight: 'bold'
    }

});