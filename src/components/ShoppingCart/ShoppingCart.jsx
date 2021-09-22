import React, { useState } from "react";
import { Button, Grid } from "@material-ui/core";
import GeneralTable from "../GeneralTable";
import EmptyCart from "../EmptyCart";
import GeneralModal from "../../components/GeneralModal";
import { deleteModal } from "../../utils/constants";
import useStyles from "./styles";
import { shoppingConstants } from "./constants";

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
          <h2>{shoppingConstants.title}</h2>
          <GeneralTable list={list} deleteItem={deleteItem} />
          <Grid
            container
            className={classes.buttonTotalContainer}
          >
            <Grid item xs={12}>
              <span className={classes.totalCount}>
                <strong>{shoppingConstants.total}</strong> {subtotal}
              </span>
            </Grid>
            <Grid className={classes.buttons} item xs={12}>
              <Button onClick={nextStep} size="small" variant="contained">
                {shoppingConstants.buttonFinalize}
              </Button>
              <Button onClick={cleanCart} size="small" variant="contained">
                {shoppingConstants.buttonEmpty}
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
