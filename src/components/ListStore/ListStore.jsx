import React from "react";
import useStyles from "./styles";

const BannerStore = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h4> desde explorer</h4>
    </div>
  );
};

export default BannerStore;
