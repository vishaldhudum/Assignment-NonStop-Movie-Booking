import { createStore, applyMiddleware } from 'redux';

import reducer from './Reducer'
import logger from 'redux-logger'

const middleware = applyMiddleware(logger);

const store = createStore(reducer, middleware);

export default store;