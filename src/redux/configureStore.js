import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import stocksReducer from './stocks/reducer';

const reducer = combineReducers({
  stocksReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;