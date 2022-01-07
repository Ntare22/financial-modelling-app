import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import stocksReducer from '../redux/stocks/reducer';

const testStore = () => {
  const reducer = combineReducers({
    stocksReducer,
  });
  const store = createStore(
    reducer,
    applyMiddleware(logger, thunk),
  );
  return store;
};

export default testStore;
