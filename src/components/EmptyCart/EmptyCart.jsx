import React from "react";
import  { useHistory } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import { shopRoute } from "../../utils/constants";
import useStyles from "./styles";
import { typeWriterConstants } from "./constants"

const EmptyCart = (props) => {
  const classes = useStyles();
  const History = useHistory();

  const redirect = () => {
    History.push(shopRoute);
  };

  return (
    <div className={classes.root}>
      <h3>{typeWriterConstants.title}</h3>
      <Button onClick={redirect} size="small" variant="contained">
          {typeWriterConstants.button}
      </Button>
    </div>
  );
};

export default EmptyCart;
