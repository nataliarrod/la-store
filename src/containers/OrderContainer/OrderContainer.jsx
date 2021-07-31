import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchStoreProducts } from "../../redux/actions/ShoppingCart.actions";
import ShoppingCart from "../../components/ShoppingCart";
import Checkout from "../../components/Checkout";
import useStyles from "./styles";

const OrderContainer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const products = useSelector(state => state.storeProductsReducer.products);

  useEffect(() => {
    dispatch(fetchStoreProducts());
  }, [dispatch]);

  const nextStep = () => {
    setStep(2);
  };

  return (
    <div className={classes.root}>
      {step === 1 && <ShoppingCart nextStep={nextStep} list={products} />}
      {step === 2 && <Checkout />}
    </div>
  );
};

export default OrderContainer;
