import React from "react";
import { Button } from "@material-ui/core";
import useStyles from "./styles";

const EmptyCart = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3>tu carrito esta vacio</h3>
      <Button size="small" variant="contained">
        volver a la tienda
      </Button>
    </div>
  );
};

export default EmptyCart;
