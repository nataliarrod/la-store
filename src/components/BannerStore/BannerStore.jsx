import React from "react";
import useStyles from "./styles";
import imageBanner from "../../assets/img/bannershop.png";

const BannerStore = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={imageBanner} alt="banner diana" />
      <div className={classes.textContainer}>
        <h2>tienda virtual</h2>
        <h3>un mundo por resolver</h3>
      </div>
    </div>
  );
};

export default BannerStore;
