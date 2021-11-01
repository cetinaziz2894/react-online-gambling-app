# Getting Started with React Online Gambling App


<img src="https://raw.githubusercontent.com/cetinaziz2894/react-online-gambling-app/master/public/images/readme/image_1.PNG" alt="screenshot-1" style="width:200px;" >
<img src="https://raw.githubusercontent.com/cetinaziz2894/react-online-gambling-app/master/public/images/readme/image_2.PNG" alt="screenshot-2" style="width:200px;" >
<img src="https://raw.githubusercontent.com/cetinaziz2894/react-online-gambling-app/master/public/images/readme/image_3.PNG" alt="screenshot-3" style="width:200px;" >
<img src="https://raw.githubusercontent.com/cetinaziz2894/react-online-gambling-app/master/public/images/readme/image_4.PNG" alt="screenshot-4" style="width:200px;" >
<img src="https://raw.githubusercontent.com/cetinaziz2894/react-online-gambling-app/master/public/images/readme/image_5.PNG" alt="screenshot-5" style="width:200px;" >

This is a demo project for online casino. In this app you can play games. 

The app link : https://zen-snyder-9f35dd.netlify.app/

## Available Scripts

First clone the app then, in the project directory, you can run:

### Clone the app
```bash
git clone https://github.com/cetinaziz2894/react-online-gambling-app.git
```

### Install packages
```bash
cd react-online-gambling-app
npm install
```

### Start the app
```bash
npm run start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Test the app
```bash
npm run test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### Build the app
```bash
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Project Overview

## Used Tecknologies

- ReactJs
- Redux
- React Router
- Semantic UI React
- Styled-Components
- JSON Server (https://casino-json-server.herokuapp.com)

## About JSON Server
This server deployed in the Heroku and ready to use.

Available Apis
GET Users:
https://casino-json-server.herokuapp.com/users

GET Games:
https://casino-json-server.herokuapp.com/games

GET Categories:
https://casino-json-server.herokuapp.com/categories

### Login functionality

* On valid username/password
Login test user info:
```
username: test
password: 1q2w3e
```

* Login info sets in the localstorage as user and username

### Log out functionality

* After logout function called localstorage values are deleted.

### Games list screen

* Requires user to be logged in
* List all games from the /games ajax call.
* List categories from /categories ajax call.
* Provide functionality for filtering by typing.
* Provide functionality to filter by category.
* Make it possible to start a game by clicking on the play icon.

### Game play screen

* Requires user to be logged in
* Load the selected game via the provided API
* Provide a way to go back to the Games list screen


## Loading a game

We have written an API for loading the games. Here's a simple example of how to load a game through our API:

```javascript
comeon.game.launch('starburst');
```

It basically takes a game code as an in parameter.
The div with id game-launch will be replaced with an object tag that loads the game.

