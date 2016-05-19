import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import appStore from './reducers'

//Components
import App from './components/App'

//The Store
let store = createStore(appStore)

//React DOM Render
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
)
