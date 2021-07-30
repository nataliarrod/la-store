import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import useStyles from "./styles";

const Checkout = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.summaryContainer}>
        <h4>resumen de compra</h4>
        <span>subtotal: $2910</span>
        <span>cantidad de productos: 10</span>
        <span>total del pedido: $3000</span>
        <Button className={classes.buttonGrad} classvariant="contained">
          regresar al carrito
        </Button>
      </div>
      <form className={classes.formContainer} autoComplete="off">
        <h4>completa el formulario para finalizar tu compra</h4>
        <TextField
          type="text"
          name="checkoutName"
          placeholder="Nombre *"
          aria-describedby="escribir nombre"
          required
        />
        <TextField
          type="text"
          name="checkoutLastName"
          placeholder="Apellidos *"
          aria-describedby="escribir apellidos"
          required
        />
        <TextField
          type="email"
          name="checkoutEmail"
          placeholder="Email *"
          aria-describedby="escribir email"
          required
        />
        <TextField
          type="tel"
          name="checkoutCel"
          placeholder="Celular *"
          aria-describedby="escribir numero de celular"
          required
        />
        <TextField
          name="text"
          placeholder="Dirección *"
          aria-describedby="escribir direccion"
          required
        />
        <Button className={classes.buttonGrad} classvariant="contained">
          enviar
        </Button>
      </form>
    </div>
  );
};

export default Checkout;
