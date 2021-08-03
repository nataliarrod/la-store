import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, deleteProductToCart } from "../../redux/actions/ShoppingCart.actions";
import ShoppingCart from "../../components/ShoppingCart";
import Checkout from "../../components/Checkout";
import { calculateSubtotal } from "../../utils/helpers/helpers";
import useStyles from "./styles";

const OrderContainer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [subtotal, setSubtotal] = useState();
  
  const products = useSelector(state => state.shoppingCartReducer.products);

  const nextStep = () => {
    setStep(2);
  };

  const previousStep = () => {
    setStep(1);
  };

  const cleanCart = () => {
    dispatch(emptyCart(products));
  };

  const deleteItemCart = (productId) => {
    dispatch(deleteProductToCart(productId));
  };

  useEffect(() => {
    const newSubtotal = calculateSubtotal(products);
    setSubtotal(newSubtotal);
  }, [products]);

  return (
    <div data-testid="order-container" className={classes.root}>
      {step === 1 && (
        <ShoppingCart
          nextStep={nextStep}
          list={products}
          cleanCart={cleanCart} 
          subtotal={subtotal}
          deleteItemCart={deleteItemCart}
        />
      )}
      {step === 2 && (
        <Checkout
          subtotal={subtotal}
          products={products}
          previousStep={previousStep}
        />
      )}
    </div>
  );
};

export default OrderContainer;
