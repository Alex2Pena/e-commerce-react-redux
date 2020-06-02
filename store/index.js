import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// import votes from './votes.js';

let reducers = combineReducers({ votes });

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store();