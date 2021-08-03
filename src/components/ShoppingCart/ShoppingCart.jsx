import React, { useState } from "react";
import { Button, Grid } from "@material-ui/core";
import GeneralTable from "../GeneralTable";
import EmptyCart from "../EmptyCart";
import GeneralModal from "../../components/GeneralModal";
import { deleteModal } from "../../utils/constants";
import useStyles from "./styles";

const ShoppingCart = ({
  nextStep,
  list,
  cleanCart,
  subtotal,
  deleteItemCart,
}) => {
  const classes = useStyles();
  const isEmpty = !!list.length;
  const [openModal, setOpenModal] = useState(false);

  const deleteItem = (itemId) => {
    deleteItemCart(itemId);
    setOpenModal(true);
  };

  return (
    <div className={classes.root}>
      <GeneralModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        message={deleteModal.message}
        title={deleteModal.title}
      />
      {isEmpty ? (
        <>
          <h2>carrito de compras</h2>
          <GeneralTable list={list} deleteItem={deleteItem} />
          <Grid
            container
            direction="row-reverse"
            className={classes.buttonContainer}
          >
            <Grid item xs={4} align="right">
              <span className={classes.totalCount}>
                <strong>total:</strong> {subtotal}
              </span>
            </Grid>
            <Grid item xs={4}>
              <Button onClick={nextStep} size="small" variant="contained">
                finalizar compra
              </Button>
              <Button onClick={cleanCart} size="small" variant="contained">
                vaciar carrito
              </Button>
            </Grid>
          </Grid>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default ShoppingCart;
