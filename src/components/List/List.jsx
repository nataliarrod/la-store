import React from "react";
import { Grid, Paper } from "@material-ui/core";
import ProductCard from "../ProductCard";
import useStyles from "./styles";

const List = (props) => {
  const {
    list,
    takeProduct,
  } = props;
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.root}>
      {list.map((product, index) => {
        return (
          <Grid item key={`product-${index}`} xs={3}>
            <Paper className={classes.productCard}>
              <ProductCard
                isListProduct
                takeProduct={takeProduct}
                product={product}
              />
            </Paper>
          </Grid>
        )
      })}
    </Grid>
  );
};

export default List;
