import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import ProductCard from "../../components/ProductCard";
import { shopRoute } from "../../utils/constants";
import featuredProductsMockup from "../../utils/constants";
import useStyles from "./styles";
import { featuredProductsConstants } from "./constants";

const FeaturedProducts = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.textContainer}>
        <h3>
          {featuredProductsConstants.tittle}
        </h3>
        <Link
          to={shopRoute}
          aria-describedby="ver todos los productos"
        >
          {featuredProductsConstants.link}
        </Link>
      </div>
      <div className={classes.productsContainer}>
        {featuredProductsMockup.map((product, index) => {
          return <ProductCard product={product} key={`feature-product-${index}`}/>;
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
