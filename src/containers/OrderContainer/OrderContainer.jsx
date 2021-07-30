import React, {useState} from "react";
import ShoppingCartTable from "../../components/ShoppingCartTable";
import Checkout from "../../components/Checkout";
import { Button, Grid } from "@material-ui/core";
import useStyles from "./styles";

const OrderContainer = () => {
  const classes = useStyles();
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(2);
  };
  return (
    <div className={classes.root}>
      {
        step === 1 && (
          <>
            <h2>carrito de compras</h2>
            <ShoppingCartTable />
            <Grid container direction="row-reverse" className={classes.buttonContainer}>
              <Grid item xs={4} align="right">
                <span className={classes.totalCount}><strong>total:</strong> $ 200.000</span>
              </Grid>
              <Grid item xs={4}>
                <Button onClick={nextStep} size="small" variant="contained">finalizar compra</Button>
                <Button size="small" variant="contained">vaciar carrito</Button>
              </Grid>
            </Grid>
          </>
        )
      }
      {
        step === 2 && (
          <>
            <Checkout />
          </>
        )
      }
    </div>
  );
};

export default OrderContainer;
