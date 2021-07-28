import React from "react";
import useStyles from "./styles";
import ProductCard from "../../components/ProductCard";
import { featuredProductsMockup } from "../../utils/constants";

const FeaturedProducts = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.textContainer}>
        <h3>productos destacados</h3>
        <span>ver todos</span>
      </div>
      <div className={classes.productsContainer}>
        {featuredProductsMockup.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
