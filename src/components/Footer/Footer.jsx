import React from "react";
import useStyles from './styles';

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h3>Footer</h3>
    </div>
  );
}

export default Footer;