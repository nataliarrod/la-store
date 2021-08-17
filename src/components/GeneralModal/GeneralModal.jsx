import React from "react";
import { Modal, Backdrop, Fade, Button } from "@material-ui/core";
import useStyles from "./styles";
import  { useHistory } from "react-router-dom";
import { orderRoute } from "../../utils/constants";
import generalModalConstants from "./constants";

const GeneralModal = ({ openModal, setOpenModal, title, message }) => {
  const classes = useStyles();
  const History = useHistory();
  
  const redirectToOrder = () => {
    History.push(orderRoute);
  };
  
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
            <div className={classes.buttonsModal}>
              <Button
                className={classes.buttonGrad}
                classvariant="contained"
                type="button"
                onClick={redirectToOrder}
              >
                {generalModalConstants.buttonOrder}
              </Button>
              <Button
                className={classes.buttonGrad}
                classvariant="contained"
                type="button"
                onClick={() => setOpenModal(false)}
              >
                {generalModalConstants.buttonStore}
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default GeneralModal;
