import { getStoreProducts } from '../requests/ShoppingCart.request';
import { SET_PRODUCTS, SET_ERROR, TOGGLE_LOADING } from '../../utils/actions';

const initialState = {
  products: [],
  error: null,
  loading: false,
};

export function storeProductsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
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
    type: SET_PRODUCTS,
    payload: data,
  });
  dispatch({ type: TOGGLE_LOADING });
  return { status: 'success', resp: data };
};