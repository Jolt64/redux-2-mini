import { createStore, applyMiddleware, combineReducers } from 'redux';
import hackerNewsReducer from './ducks/hackerNewsReducer';
import promiseMiddleware from 'redux-promise-middleware';
import mediumReducer from './ducks/mediumReducer';
import redditReducer from './ducks/redditReducer'

const rootReducer = combineReducers({ hackerNews: hackerNewsReducer, medium: mediumReducer, reddit: redditReducer})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))