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
        product => product._id === action.payload._id
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
          (product) => product._id !== action.payload
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

export function deleteProductToCart(productId) {
  return {
    type: DELETE_PRODUCT,
    payload: productId,
  };
}

export function emptyCart(product) {
  return {
    type: EMPTY_CART,
    payload: product,
  };
}