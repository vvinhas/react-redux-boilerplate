# React+Redux Boilerplate
Welcome to React+Redux Boilerplate.

This is a simple boilerplate to let you quickly put your React+Redux app up and running. 
It follows the a basic structure for Redux applications [as proposed by Dan Abramov](http://stackoverflow.com/questions/32634320/how-to-structure-redux-components-containers)

## Dependencies
You will need [NodeJS](http://nodejs.org) installed in your machine to be able to run `npm` commands. 
Also, you will need WebPack as a global dependency. To do this, simply run `npm install -g webpack`.

## Installation
1. Clone this repository: `git clone https://github.com/vvinhas/react-redux-boilerplate.git`
2. Run `npm install`
3. Start the Webpack Dev Server with `npm run dev`
5. Head to `http://lvh.me:8080`
6. That't it! :)

## Logger
This boilerplate provides logging funcionality by default, using the package `react-logger`. 
For production environments you're suposed to remove this functionality. To do so, follow these simple steps:

1. Go to `src/store/index.js` 
2. Remove the lines `import createLogger from 'redux-logger';` and `const logger = createLogger();`
3. Remove the logger instance from the middleware by changing the line from `applyMiddleware(thunk, logger)` to `applyMiddleware(thunk)`

## Folder Structure
```
src/                      --> Hold the source files of the application
 |-- actions/             --> For all action creators, where file name corresponds to part of the app
 |-- components/          --> For “dumb” React components unaware of Redux
         |-- App.js       --> The main app component
 |-- containers/          --> For “smart” React components connected to Redux
 |-- reducers/            --> For all reducers, where file name corresponds to state key
 |       |-- index.js     --> Combine reducers entry file
 |-- store/               --> For store initialization
 +-- app.js               --> App bootstrap script
```

## Extra Packages
- *[ImmutableJS](https://facebook.github.io/immutable-js):* Perfect to use with Redux. Checkout [their docs](https://facebook.github.io/immutable-js/docs) for more information.
Although not necessary, you're encouraged to use Immutable within your store reducers.
- *[Classnames](https://github.com/JedWatson/classnames):* A neat utility to handle CSS classe changes programmatically.
- *[Axios](https://github.com/mzabriskie/axios):* Cool Promise based HTTP client for the browser and node.js. Very handy.

## Addons
This package comes with [Bulma.io](http://bulma.io/) and [FontAwesome](http://fontawesome.io/) CDN's out of the box. 
If you don't need or don't want to use them, open the `index.html` file and remove the `<link>` tags.
