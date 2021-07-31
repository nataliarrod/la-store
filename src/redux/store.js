import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { storeProductsReducer } from './actions/ShoppingCart.actions';

const rootReducer = combineReducers({ storeProductsReducer });
const middlewares = applyMiddleware(thunk);

export const store = createStore(rootReducer, middlewares);
