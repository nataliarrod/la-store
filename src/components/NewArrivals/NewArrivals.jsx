import React from "react";
import useStyles from './styles';

const NewArrivals = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h3>New Arrivals</h3>
    </div>
  );
}

export default NewArrivals;