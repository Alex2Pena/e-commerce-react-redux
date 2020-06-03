import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import cart from './cart.js'
import category from './category'
import products from './products';

let reducers = combineReducers({ category, products, cart });

/*
"reducer" function
[ 1, 2, 3, 4 ].reduce((acc, val) => {

}, {})
*/

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store();