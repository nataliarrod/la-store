import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import GeneralModal from "../../components/GeneralModal";
import { contactModal } from "../../utils/constants";
import useStyles from "./styles";

const Contact = () => {
  const classes = useStyles();

  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpenModal(true)
  };

  return (
    <div id="contacto" className={classes.root}>
      <GeneralModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        message={contactModal.message}
        title={contactModal.title}
      />
      <div className={classes.textContainer}>
        <h2>contáctame</h2>
        <p>lineaancestral@hotmail.com</p>
      </div>
          
      <form
        onSubmit={(e) => handleSubmit(e)}
        className={classes.formContainer}
        autoComplete="off"
      >
        <TextField
          type="text"
          name="contactName"
          placeholder="Nombre *"
          aria-describedby="escribir nombre completo"
          required
        />
        <TextField
          type="email"
          name="contactEmail"
          placeholder="Email *"
          aria-describedby="escribir email"
          required
        />
        <TextField
          type="text"
          name="contactSubject"
          placeholder="Asunto *"
          aria-describedby="escribir asunto"
          required
        />
        <TextField
          type="text"
          name="contactMessage"
          placeholder="Mensaje *"
          aria-describedby="escribir mensaje"
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

export default Contact;
