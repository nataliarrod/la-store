import React from "react";
import ProductCard from "../../components/ProductCard";
import { shopRoute } from "../../utils/constants";
import { featuredProductsMockup } from "../../utils/constants";
import useStyles from "./styles";

const FeaturedProducts = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.textContainer}>
        <h3>productos destacados</h3>
        <a href={shopRoute} aria-describedby="link para ver todos los productos">ver todos</a>
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
