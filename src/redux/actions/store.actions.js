import { getStoreProducts } from '../requests/ShoppingCart.request';
import {
  SET_STORE, SET_ERROR, TOGGLE_LOADING,
  UPDATE_PRODUCT,
 } from './types';
import { featuredProductsMockup } from "../../utils/constants";

const initialState = {
  store: featuredProductsMockup,
  error: null,
  loading: false,
};

export function storeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STORE:
      return {
        ...state,
        store: action.payload,
      };
    case UPDATE_PRODUCT:
      const index = state.store.findIndex(
        product => product.id === action.payload.id
      );
      const newStore = [...state.store];
      newStore[index] = action.payload;
      return {
        ...state,
        store: newStore,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case TOGGLE_LOADING:
      return {
        ...state,
        loading: !state.loading,
      }
    default:
      return state;
  }
}

export const fetchStoreProducts = () => async (dispatch) => {
  dispatch({ type: TOGGLE_LOADING });
  const [error, data] = await getStoreProducts();
  if (error) {
    dispatch({
      type: SET_ERROR,
      payload: error,
    });
    return { status: 'error', resp: error };
  }
  dispatch({
    type: SET_STORE,
    payload: data,
  });
  dispatch({ type: TOGGLE_LOADING });
  return { status: 'success', resp: data };
};

export function updateProduct(product) {
  return {
    type: UPDATE_PRODUCT,
    payload: product,
  };
}