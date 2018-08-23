import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, Dimensions, Platform, StatusBar, TouchableOpacity, Animated } from 'react-native'
import { connect } from 'react-redux'
import { black, darkgrey, blue, lightgrey } from '../utils/colors'

class DeckListView extends Component {

    state = {
        opacity: new Animated.Value(0),
        height: new Animated.Value(0)
    }

    componentDidMount() {
        Animated.timing(this.state.opacity, {toValue: 1, duration: 1000}).start()
        Animated.spring(this.state.height, {toValue: 150, speed:5}).start()
    }



  render() {
      const { state } = this.props
      const { opacity, height } = this.state

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
            />
            <ScrollView style={styles.view}>
                {state.map((deck) => (
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('IndividualDeckView', { title: deck.title })} 
                        key={deck.title}
                    >
                        <Animated.View style={[styles.deck, {opacity, height }]}>
                            <Text style={styles.title}>{deck.title}</Text>
                            <Text style={styles.subtitle}>{deck.questions.length} card{deck.questions.length !== 1 && 's'}</Text>
                        </Animated.View>
                    </TouchableOpacity>
                ))}
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

export default connect(mapStateToProps)(DeckListView)


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
        width: width,
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
        shadowColor: black,

    },
    title: {
        fontSize: 40,
        color: blue,
    },
    subtitle:{
        fontSize: 20,
        color: lightgrey,     
    }

});