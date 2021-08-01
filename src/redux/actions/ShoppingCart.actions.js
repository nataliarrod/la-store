import {
  ADD_PRODUCT, DELETE_PRODUCT, EMPTY_CART,
} from './types';

const initialState = {
  products: [],
};

export function shoppingCartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      const index = state.products.findIndex(
        product => product.id === action.payload.id
      );
      const newProducts = [...state.products];
      if (index === -1) {
      newProducts.push(action.payload);
      } else {
        const newProduct = {
          ...newProducts[index],
          quantity: newProducts[index].quantity + action.payload.quantity,
        };

        newProducts[index] = newProduct;
      }
      return {
        ...state,
        products: newProducts,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        ),
      }
    case EMPTY_CART:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}

export function addProductToCart(product) {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
}

export function deleteProductToCart(product) {
  return {
    type: DELETE_PRODUCT,
    payload: product,
  };
}