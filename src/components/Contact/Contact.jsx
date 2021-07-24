import React from "react";
import useStyles from "./styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Contact = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.textContainer}>
        <h2>contáctame</h2>
        <p>lineaancestral@gmail.com</p>
      </div>
      <form className={classes.formContainer} autoComplete="off">
        <TextField
          type="text"
          name="contactName"
          placeholder="Nombre *"
          aria-describedby="escribir-nombre-completo"
          required
        />
        <TextField
          type="email"
          name="contactEmail"
          placeholder="Email *"
          aria-describedby="escribir-email"
          required
        />
        <TextField
          type="subject"
          name="contactSubject"
          placeholder="Asunto"
          aria-describedby="escribir-asunto"
          required
        />
        <TextField
          type="message"
          name="contactMessage"
          placeholder="Mensaje"
          aria-describedby="escribir-mensaje"
          required
        />
        <Button className={classes.buttonGrad} classvariant="contained">
          enviar
        </Button>
      </form>
    </div>
  );
};

export default Contact;
