import React from "react";
import { Grid, Paper } from "@material-ui/core";
import ProductCard from "../ProductCard";
import useStyles from "./styles";

const List = ({ list }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.root}>
      {list.map((product) => {
        return (
          <Grid item xs={3}>
            <Paper className={classes.productCard}>
              <ProductCard isListProduct product={product} />
            </Paper>
          </Grid>
        )
      })}
    </Grid>
  );
};

export default List;
