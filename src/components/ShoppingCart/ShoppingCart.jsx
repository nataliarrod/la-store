import React from "react";
import { Button, Grid } from "@material-ui/core";
import GeneralTable from "../GeneralTable"
import useStyles from "./styles";

const ShoppingCart = ({nextStep, list}) => {
  const classes = useStyles();

  return (
    <>
      <h2>carrito de compras</h2>
      <GeneralTable list={list}/>
      <Grid
        container
        direction="row-reverse"
        className={classes.buttonContainer}
      >
        <Grid item xs={4} align="right">
          <span className={classes.totalCount}>
            <strong>total:</strong> $ 200.000
          </span>
        </Grid>
        <Grid item xs={4}>
          <Button onClick={nextStep} size="small" variant="contained">
            finalizar compra
          </Button>
          <Button size="small" variant="contained">
            vaciar carrito
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default ShoppingCart;
