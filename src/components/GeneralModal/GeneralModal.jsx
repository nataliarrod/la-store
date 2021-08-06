import React from "react";
import { Modal, Backdrop, Fade, Button } from "@material-ui/core";
import useStyles from "./styles";

const GeneralModal = ({ openModal, setOpenModal, title, message }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Modal
        aria-labelledby="modal de notificacion"
        aria-describedby="modal con informacion de envio"
        className={classes.modal}
        open={openModal}
        onClose={() => setOpenModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div className={classes.paper}>
            <h2>{title}</h2>
            <p>{message}</p>
            <Button
              className={classes.buttonGrad}
              classvariant="contained"
              type="button"
              onClick={() => setOpenModal(false)}
            >
              cerrar
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default GeneralModal;