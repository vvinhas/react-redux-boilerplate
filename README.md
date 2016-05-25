# React+Redux Boilerplate
Welcome to React+Redux Boilerplate.

This is a simple boilerplate to let you quickly put your React+Redux app up and running. 
It follows the a basic structure for Redux applications [as proposed by Dan Abramov](http://stackoverflow.com/questions/32634320/how-to-structure-redux-components-containers)

## Installation
1. Clone this repository: `git clone https://github.com/vvinhas/react-redux-boilerplate.git`
2. Run `npm install`
3. Start the Webpack Dev Server with `npm run dev`
5. Head to `http://lvh.me:8080`
6. That't it! :)

## Folder Structure
```
src/                         --> Hold the source files of the application
 |-- js/                     --> All your javascript files goes here
    |-- actions/             --> For all action creators, where file name corresponds to part of the app
    |-- components/          --> For “dumb” React components unaware of Redux
            |-- App.js       --> The main app component
    |-- containers/          --> For “smart” React components connected to Redux
    |-- reducers/            --> For all reducers, where file name corresponds to state key
    |       |-- index.js     --> Combine reducers entry file
    |-- store/               --> For store initialization
    +-- app.js               --> App bootstrap script
```

## Addons
This package comes with [Bulma.io](http://bulma.io/) and [FontAwesome](http://fontawesome.io/) CDN's out of the box. If you don't need or don't 
want to use them, open the `index.html` file and remove the `<link>` tags.
