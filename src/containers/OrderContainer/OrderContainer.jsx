import React, { useState } from "react";
import ShoppingCart from "../../components/ShoppingCart";
import Checkout from "../../components/Checkout";
import { featuredProductsMockup } from "../../utils/constants";
import useStyles from "./styles";

const OrderContainer = () => {
  const classes = useStyles();
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(2);
  };
  return (
    <div className={classes.root}>
      {step === 1 && <ShoppingCart nextStep={nextStep} list={featuredProductsMockup} />}
      {step === 2 && <Checkout />}
    </div>
  );
};

export default OrderContainer;
