import React from "react";
import { HashLink as Link } from "react-router-hash-link";
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
        <Link
          to={shopRoute}
          aria-describedby="ver todos los productos"
        >
          ver todos
        </Link>
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
