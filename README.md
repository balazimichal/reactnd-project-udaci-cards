# Udacity REACT NANODEGREE - Flash Cards

This is the final assessment project for Udacity's React Native course. This mobile app (both for Android and iOS) allows users to study collections of flashcards. The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

## Features

- using Redux for state management
- using AsyncStorage to store all the data
- using LocalNotification to push notifications reminders

## Installation instructions

#### To run this project follow this steps:

- Clone the project with `git clone https://github.com/balazimichal/reactnd-project-udaci-cards.git`
- CD into the project and install the dependencies with `yarn install` or `npm i`
- Run the app with `yarn start` or `npm start`
- Fastest way to deploy and test the app on your device is to use Expo - https://expo.io/tools. Install expo app on your iOS or android device and follow the instructions. For android all you need is to press letter 'q' in your terminal which will display the QR code. You can scan this code via Expo QR reader and your app will be available on your device instantly.

#### To install iPhone simulator follow this steps:

iOS apps can only be developed on a Mac unless you have a virtual machine set up on your machine. To set up the iPhone simulator on your Mac, follow these instructions:

1. Go to the App Store.

2. Download Xcode.

3. Follow the installation instructions.

4. Open Xcode and install additional software if prompted to do so.

If you already have Xcode installed, please make sure that you update it. Then, open it to make sure no further updates are needed. Most problems with setting up your React Native development environment can be solved this way.

5. Open Xcode and go to "Preferences."

6. Go to the "Locations" panel and select the most recent version in the "Command Line Tools" drop-down list.

7. That’s it!

#### To install Android Simulator follow this steps:

The setup is kind of complicated, but we'll get through it together.

##### Part 1

1. Install a recent version of the Java SE Development Kit(JDK).

2. Install Android Studio Choose a "Custom" setup when prompted. Make sure the boxes next to all of the following are checked:

- Android SDK
- Android SDK Platform
- Performance (Intel ® HAXM)
- Android Virtual Device

3. Click "Next".

4. Launch Android Studio.

5. Click on "Configure" and select "SDK Manager".

6. Select the "SDK Platforms" tab.

7. Put a checkmark next to "Android API 28", "Android 8.0", "Android 6.0 (Marshmallow)," "Android 7.0," and "Android 7.1.1."

8. Go to the "SDK Tools" tab.

9. Put checkmarks next to :

- Android SDK Build-Tools
- Android SDK Platform-Tools
- Android SDK Tools
- Android Emulator
- Intel x86 Emulator Accelerator (HAXM installer)
- Under the Support Repository, put a checkmark at "Android Support Repository"

10. Click "OK".

11. Follow the on-screen directions to install the requested components.

12. If you are on a Windows machine, please install the Intel x86 Emulator Accelerator through the Android SDK Manager, if prompted.

13. If you are on a Windows or Linux machine, please make sure to enable Virtualization Technology in your BIOS settings.

14. If you are on a Windows machine:

a) Open Android Studio. Go to "File" and then click "Project Structure." Make sure this box is checked: "Use embedded JDK(recommended)." Please copy the Android SDK location (e.g. C:\User\userName\AppData\Local\Android\Sdk); we'll be using it shortly.

b) Open the System Control Panel. Click on "Advanced system settings." Click on "Environment Variables." Create a new variable ANDROID_HOME and set it to the Android SDK location you copied before.

Create a new variable JAVA_HOME and set it to the installation path for the Java Development Kit (e.g. C:\Program Files\Java\jdk1.8.0_171).

15. If you are on a macOS or Linux:

a) Open Android Studio. Click on "Configure" and select "SDK Manager" again. Go to Appearance & Behavior -> System Settings -> Android SDK.

b) Look at the path that’s filled in for the "Android SDK Location" section. It should be something like: /Users/yourName/Library/Android/sdk. If you are on macOS or Linux, add the Android SDK location to your PATH using ~/.bash_profile or ~/.bash_rc (e.g. echo 'export PATH=$PATH:~/Library/Android/sdk/'>>~/.bash_profile).

c) On macOS, you will also need to add platform-tools to your ~/.bash_profile or ~/.bash_rc (e.g. echo 'export PATH=$PATH:~/Library/Android/sdk/platform-tools' >>~/.bash_profile, source ~/.bash_profile).

d) Make sure that you can run adb from your terminal.

###### Part 2

You have a choice of either using the Android Studio Emulator or Genymotion as your simulator. You don't have to install both.

Directions for Setting up the Android Studio Emulator

1. Open Android Studio.

2. Click "Start a new Android Studio project". You don't need to change any of the settings; just click through to "Finish". Click "Finish".

3. Once a new project is created, look at the messages inside the Gradle Console.

If you see any error messages that prompt you to install additional software, please install it.

4. Select "Tools" --> "AVD Manager". Ensure that there's a checkmark next to "Enable ADB Integration".

5. Click "Create Virtual Device".

6. Select the system image you want and click "Download".

7. Once the download completes, click "Next" and "Finish".

8. Click the play button.

#### Directions for Setting up Genymotion

1. Download and install Genymotion(it is free for personal use).

2)Set up an Android emulator by selecting the type of phone you want to emulate and wait for the setup to complete.

3. Open Genymotion and navigate to "Settings" and then "ADB". Select "Use custom Android SDK tools," and update it with your Android SDK location (e.g. /Users/yourName/Library/Android/sdk).

4. Restart GenyMotion.

5. Got to "Settings". Go to "ADB" and make sure there is a checkmark next to "Android SDK successfully found".

6. Run npm install -g exp to install exp globally.

7. Run exp path. This will save your PATH environment variable so that XDE knows where to find your Android tools.

8. Close Android Studio if you still have it open. Check to make sure that Android Studio is no longer running.

9. Start the GenyMotion Emulator by clicking "Start".

10. The majority of these instructions are from the Genymotion documentation.

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

## Screen Capture

![ucacity cards app image](/img/screencapture-adddeck.jpeg)

![ucacity cards app image](/img/screencapture-addquestion.jpeg)

![ucacity cards app image](/img/screencapture-deck.jpeg)

![ucacity cards app image](/img/screencapture-main.jpeg)

![ucacity cards app image](/img/screencapture-quiz.jpeg)

![ucacity cards app image](/img/screencapture-score.jpeg)
