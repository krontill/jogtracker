import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import rootReducer from '../reducers';

const localStorageMiddleware = ({getState}) => next => action => {
  const result = next(action);
  localStorage.setItem('applicationState', JSON.stringify(getState()));
  return result;
};

const initialState = {};

const store = createStore(
  rootReducer,
  JSON.parse(localStorage.getItem('applicationState')) || initialState,
  composeWithDevTools(applyMiddleware(localStorageMiddleware))
);

export default store
