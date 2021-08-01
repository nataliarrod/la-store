import React, { useState } from "react";
import { useSelector } from 'react-redux';
import ShoppingCart from "../../components/ShoppingCart";
import Checkout from "../../components/Checkout";
import useStyles from "./styles";

const OrderContainer = () => {
  const classes = useStyles();
  const [step, setStep] = useState(1);
  const products = useSelector(state => state.shoppingCartReducer.products);

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
