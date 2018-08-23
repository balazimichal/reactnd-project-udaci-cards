import { AsyncStorage } from 'react-native'



const DECKS_STORAGE_KEY = "UdaciCards:decks";

export const decks = [
    {
        title: "React",
        questions: [
            {
                question: "What is React?",
                answer: "A library for managing user interfaces"
            },
            {
                question: "Where do you make Ajax requests in React?",
                answer: "The componentDidMount lifecycle event"
            }
        ]
    },
    {
        title: "JavaScript",
        questions: [
            {
                question: "What is a closure?",
                answer:
                    "The combination of a function and the lexical environment within which that function was declared."
            }
        ]
    },
    {
        title: "PHP",
        questions: [
            {
                question: "What is an Exception?",
                answer:
                    "Exception handling is used to change the normal flow of the code execution if a specified error (exceptional) condition occurs."
            }
        ]
    }
]



export async function saveDecksAPI(data) {
    try {
        const stored = await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
        if (stored) {
            console.log('Data stored successfuly')
        }
    } catch (error) {
        console.log('There was an issue saving the data.')
    }
}


export async function getDecksAPI() {
    try {
        const value = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
        if (value !== null) {
            console.log(JSON.parse(value));
            return JSON.parse(value);
        } 
    } catch (error) {
        console.log("There was an issue retrieving the data.");
    }
}


export async function saveDeckAPI(title) {
    try {

        const data = await AsyncStorage.getItem(DECKS_STORAGE_KEY)
        const state = JSON.parse(data)
        const newData = [...state, { title: title, questions: [] }];
        await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(newData));

    } catch (error) {
        console.log("There was an issue saving the title.");
    }
}


export async function addCardAPI(title, card) {
    try {
        const data = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
        const state = JSON.parse(data);
        const newData = state.map(deck => (deck.title === title ? { ...deck, questions: deck.questions.concat(card) } : deck));
        await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(newData));

    } catch (error) {
        console.log("There was an issue saving the title.");
    }
}



export async function removeDecksAPI() {
    try {
        const removed = await AsyncStorage.removeItem(DECKS_STORAGE_KEY);
        if (removed === null) {
            console.log("Data were seccessfuly removed.");
        }
    } catch (error) {
        console.log("There was an issue removing the data.");
    }
}
