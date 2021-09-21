import React from "react";
import  { useHistory } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import { shopRoute } from "../../utils/constants";
import useStyles from "./styles";

const EmptyCart = (props) => {
  const classes = useStyles();
  const History = useHistory();

  const redirect = () => {
    History.push(shopRoute);
  };

  return (
    <div className={classes.root}>
      <h3>tu carrito está vacio</h3>
      <Button onClick={redirect} size="small" variant="contained">
          volver a la tienda
      </Button>
    </div>
  );
};

export default EmptyCart;
