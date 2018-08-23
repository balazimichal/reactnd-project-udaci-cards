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



export async function saveDecksAPI() {
    try {
        const stored = await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
        if (stored) {
            console.log('%c Data stored successfuly', 'font-size:14px;color:#02b3e4')
        }
    } catch (error) {
        console.log('%c There was an issue saving the data.', 'font-size:14px;color:#02b3e4')
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
        console.log("%c There was an issue retrieving the data.", "font-size:14px;color:#02b3e4");
    }
}


export async function removeDecksAPI() {
    try {
        const removed = await AsyncStorage.removeItem(DECKS_STORAGE_KEY);
        if (removed === null) {
            console.log("%c Data were seccessfuly removed.", "font-size:14px;color:#02b3e4");
        }
    } catch (error) {
        console.log("%c There was an issue removing the data.", "font-size:14px;color:#02b3e4");
    }
}
