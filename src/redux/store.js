import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { storeReducer } from './actions/store.actions';
import { shoppingCartReducer } from './actions/ShoppingCart.actions';

const rootReducer = combineReducers({ shoppingCartReducer, storeReducer });
const middlewares = applyMiddleware(thunk);

export const store = createStore(
  rootReducer,
  middlewares,
);
