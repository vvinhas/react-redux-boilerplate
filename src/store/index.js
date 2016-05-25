/**
 * This script creates the Redux Store.
 * Checkout README.md for production environments.
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { rootReducer } from '../reducers';

const logger = createLogger();

export const store = createStore(
	rootReducer, 
	applyMiddleware(thunk, logger)
);