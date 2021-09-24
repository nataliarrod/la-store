import React from "react";
import  { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { shopRoute } from "../../utils/constants";
import useStyles from "./styles";
import { emptyConstants } from "./constants"

const EmptyCart = (props) => {
  const classes = useStyles();
  const History = useHistory();

  const redirect = () => {
    History.push(shopRoute);
  };

  return (
    <div className={classes.root}>
      <h3>{emptyConstants.title}</h3>
      <Button onClick={redirect} size="small" variant="contained">
          {emptyConstants.button}
      </Button>
    </div>
  );
};

export default EmptyCart;
