export const getDecks = () => ({
    type: 'GET_DECKS'
})

export const addDeck = (title) => ({
    type: "ADD_DECK",
    title
});

export const addQuestion = (title, question) => ({
    type: 'ADD_QUESTION',
    title,
    question
})