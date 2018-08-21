import { AsyncStorage } from 'react-native'
import { decks } from './_DATA'

const DECKS_STORAGE_KEY = 'UdaciCards:decks'


export async function setDecks() {
    try {
        const value = await AsyncStorage.getItem(DECKS_STORAGE_KEY)
        if (value === null) {
            await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
        }
    } catch (error) {
        console.log("%c There was an issue setting the decks.", "font-size:14px;color:#02b3e4")
    }
}


export async function getDecks() {
    try {
        const value = await AsyncStorage.getItem(DECKS_STORAGE_KEY)
        if (value !== null) {
            console.log(JSON.parse(value));
            return JSON.parse(value)

        }
    } catch (error) {
        console.log("There was an issue retrieving the decks.")
    }
}


export async function getDeck(id) {
    try {
        const value = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
        if (value !== null) {
         //console.log(JSON.parse(value.key));
          return JSON.parse(value)
        }

    } catch (error) {
        console.log("%c There was an issue retrieving deck ID.", "font-size:14px;color:#02b3e4")
    }
}


export function saveDeckTitle({ title }) {}
export function addCardToDeck({ title, card }) {}



/*

async function removeData() {
  try {
    const removed = await AsyncStorage.removeItem(DECKS_STORAGE_KEY);
    if (removed !== null) {
      console.log(
        "%c Data were seccessfuly removed.",
        "font-size:14px;color:#02b3e4"
      );
    }
  } catch (error) {
    console.log(
      "%c There was an issue removing the data.",
      "font-size:14px;color:#02b3e4"
    );
  }
}


removeData()


*/












/*
const contacts = [
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
  }
]

const CONTACT_STORAGE_KEY = "Test:contacts";


async function storeData() {
    try {
        const stored = await AsyncStorage.setItem(CONTACT_STORAGE_KEY , JSON.stringify(contacts))
        if(stored) {
            console.log('%c Data stored successfuly', 'font-size:14px;color:#02b3e4')
        }
    } catch (error) {
        console.log('%c There was an issue saving the data.', 'font-size:14px;color:#02b3e4')
    }
}


async function getData() {
    try {
        const value = await AsyncStorage.getItem(CONTACT_STORAGE_KEY);
        if (value !== null) {
            console.log(JSON.parse(value));
        } else {
            console.log("%c There are no data.", "font-size:14px;color:#02b3e4");
            console.log(JSON.parse(contacts))
        }
    } catch (error) {
        console.log("%c There was an issue retrieving the data.", "font-size:14px;color:#02b3e4");
    }
}


async function removeData() {
    try {
        const removed = await AsyncStorage.removeItem(CONTACT_STORAGE_KEY);
        if (removed !== null) {
            console.log("%c Data were seccessfuly removed.", "font-size:14px;color:#02b3e4");
        }
    } catch (error) {
        console.log("%c There was an issue removing the data.", "font-size:14px;color:#02b3e4");
    }
}


getData()
*/
