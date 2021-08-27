import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import GeneralModal from "../../components/GeneralModal";
import { contactModal } from "../../utils/constants";
import useStyles from "./styles";
import { textContainerConstants, textFieldConstants, buttonConstants } from "./constants"

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
        <h2>{textContainerConstants.tittle}</h2>
        <p>{textContainerConstants.email}</p>
      </div>
          
      <form
        onSubmit={(e) => handleSubmit(e)}
        className={classes.formContainer}
        autoComplete="off"
      >
        <TextField
          type="text"
          name="contactName"
          placeholder={textFieldConstants.name}
          aria-label="name"
          aria-describedby={textFieldConstants.describedByName}
          required
        />
        <TextField
          type="email"
          name="contactEmail"
          placeholder={textFieldConstants.email}
          aria-label="email"
          aria-describedby={textFieldConstants.describedByEmail}
          required
        />
        <TextField
          type="text"
          name="contactSubject"
          placeholder={textFieldConstants.subject}
          aria-label="subject"
          aria-describedby={textFieldConstants.describedBySubject}
          required
        />
        <TextField
          type="text"
          name="contactMessage"
          placeholder={textFieldConstants.message}
          aria-label="message"
          aria-describedby={textFieldConstants.describedByMessage}
          required
        />
        <Button
          type="submit"
          aria-label="submit"
          aria-describedby={buttonConstants.describeBySubmit}
          className={classes.buttonGrad}
          classvariant="contained"
        >
          {buttonConstants.textButton}
        </Button>
      </form>
    </div>
  );
};

export default Contact;
