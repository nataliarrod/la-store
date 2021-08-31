import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { HashLink as Link } from "react-router-hash-link";
import ProductCard from "../../components/ProductCard";
import { shopRoute } from "../../utils/constants";
import featuredProductsMockup from "../../utils/constants";
import useStyles from "./styles";
import { featuredProductsConstants } from "./constants";


const FeaturedProducts = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Grid className={classes.textContainer} container xs={12}>
        <Grid className={classes.tittle} item xs={9}>
          <h3>{featuredProductsConstants.tittle}</h3>
        </Grid>
        <Grid className={classes.goToProductCard} item xs={3}>
          <Link
            to={shopRoute}
            aria-describedby="ver todos los productos"
          >
            {featuredProductsConstants.link}
          </Link>
        </Grid>
      </Grid>
      <Grid className={classes.productsContainer} container xs={12}>
        {featuredProductsMockup.map((product, index) => {
          return (
            <Paper className={classes.productCard}>
              <ProductCard product={product} key={`feature-product-${index}`}/>
            </Paper>
          )
        })}
      </Grid>
    </Grid>
  );
};

export default FeaturedProducts;
