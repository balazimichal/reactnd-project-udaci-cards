import { createStore } from 'redux'

export default store = createStore((state = [], action) => {
    switch (action.type) {
        case 'ADD_QUESTION':
            return state.map((deck) => deck.title === action.title ? { ...deck, questions: deck.questions.concat(action.question) } : deck)
        case 'ADD_DECK':
            return state = [...state, { title: action.title, questions: [] }]
        case 'GET_DECKS':
            return state
        case 'SET_DECKS':
            return state = action.decks
        default:
            return state
    }
})

/*
store.subscribe(() => {
    console.log(store.getState())
})
*/