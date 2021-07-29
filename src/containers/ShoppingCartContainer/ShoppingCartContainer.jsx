import React from "react";
import ShoppingCartTable from "../../components/ShoppingCartTable";
import { Button, Grid } from "@material-ui/core";
import useStyles from "./styles";

const ShoppingCartContainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2>carrito de compras</h2>
      <ShoppingCartTable />
      <Grid container direction="row-reverse" className={classes.buttonContainer}>
        <Grid item xs={4} align="right">
          <span className={classes.totalCount}><strong>total:</strong> $ 200.000</span>
        </Grid>
        <Grid item xs={4}>
          <Button size="small" variant="contained">finalizar compra</Button>
          <Button size="small" variant="contained">vaciar carrito</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ShoppingCartContainer;
