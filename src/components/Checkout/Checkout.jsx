import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import GeneralModal from "../../components/GeneralModal";
import { contactModal, taxes } from "../../utils/constants";
import { calculateTotal } from "../../utils/helpers/helpers";
import useStyles from "./styles";

const Checkout = ( {previousStep, products, subtotal} ) => {
  const classes = useStyles();

  const [openModal, setOpenModal] = useState(false);  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setOpenModal(true);
  };

  return (
    <div className={classes.root}>
      <GeneralModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        message={contactModal.message}
        title={contactModal.title}
      />
      <div className={classes.summaryContainer}>
        <h4>resumen de compra</h4>
        <span>subtotal: ${subtotal}</span>
        <span>cantidad de productos: {products.length}</span>
        <span>total del pedido: ${calculateTotal(subtotal, taxes)}</span>
        <Button onClick={previousStep} className={classes.buttonGrad} classvariant="contained">
          regresar al carrito
        </Button>
      </div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className={classes.formContainer}
        autoComplete="off"
      >
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
        <Button
          type="submit"
          className={classes.buttonGrad}
          classvariant="contained"
        >
          enviar
        </Button>
      </form>
    </div>
  );
};

export default Checkout;
