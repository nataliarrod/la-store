import React from "react";
import useStyles from "./styles";
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
          return (
            <div className={classes.productCard} key={product.id}>
              <img
                src={product.url}
                alt="featured product"
                width="150px"
                height="150px"
              />
              <h4>{product.name}</h4>
              <span>{product.price}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
