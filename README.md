# Udacity REACT NANODEGREE - Flash Cards

This is the final assessment project for Udacity's React Native course. This mobile app (both for Android and iOS) allows users to study collections of flashcards. The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

## Installation instructions

#### To run this project follow this steps:

- Clone the project with ```git clone https://github.com/balazimichal/reactnd-project-udaci-cards.git```
- CD into the project and install the dependencies with ```yarn install``` or ```npm i```
- Run the app with ```yarn start``` or ```npm start```
- Fastest way to deploy and test the app on your device is to use Expo - https://expo.io/tools. Install expo app on your iOS or android device and follow the instructions. For android all you need is to press letter 'q' in your terminal which will display the QR code. You can scan this code via Expo QR reader and your app will be available on your device instantly.

#### To install iPhone simulator follow this steps:

iOS apps can only be developed on a Mac unless you have a virtual machine set up on your machine. To set up the iPhone simulator on your Mac, follow these instructions:

1) Go to the App Store.

2) Download Xcode.

3) Follow the installation instructions.

4) Open Xcode and install additional software if prompted to do so.

If you already have Xcode installed, please make sure that you update it. Then, open it to make sure no further updates are needed. Most problems with setting up your React Native development environment can be solved this way.

5) Open Xcode and go to "Preferences."

6) Go to the "Locations" panel and select the most recent version in the "Command Line Tools" drop-down list.

7) That’s it!


## Requirements for the project

### Specific requirements
- Use create-react-native-app to build your project.
- Allow users to create a deck which can hold an unlimited number of cards.
- Allow users to add a card to a specific deck.
- The front of the card should display the question.
- The back of the card should display the answer.
- Users should be able to quiz themselves on a specific deck and receive a score once they're done.
- Users should receive a notification to remind themselves to study if they haven't already for that day.

### Technical requirements
- Code adheres to udacity HTML, CSS, JavaScript, and Git style guidelines.
- Project must pass following rubic: https://review.udacity.com/#!/rubrics/1021/view

## Testing
App was tested on Both iOS and Android emulators and on Nexus5 device. Styles were slightly adjusted to represent better each given platform.
