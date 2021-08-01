import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from "@material-ui/core";
import { fetchStoreProducts, updateProduct } from "../../redux/actions/store.actions";
import { addProductToCart } from "../../redux/actions/ShoppingCart.actions";
import BannerStore from "../../components/BannerStore";
import FilterStore from "../../components/FilterStore";
import List from "../../components/List";
import useStyles from "./styles";

const StoreContainer = () => {
  const classes = useStyles();
  const store = useSelector(state => state.storeReducer.store);
  const [state, setState] = useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStoreProducts());
  }, [dispatch]);

  const handleChange = (event) => {
    const newState = { ...state };
    newState[event.target.name] = event.target.checked;
    setState(newState);
  };

  const takeOutStoreProduct = (product, quantity) => {
    const newMaxQuantity = product.maxQuantity - quantity;
    const newStoreProduct = {
      ...product,
      maxQuantity: newMaxQuantity,
    }
    dispatch(updateProduct(newStoreProduct));
  };
  
  const addProductToShoppingCart = (product, quantity) => {
    const newCartProduct = {
      ...product,
      quantity: quantity
    }
    delete newCartProduct.maxQuantity;
    dispatch(addProductToCart(newCartProduct));
  };

  const takeProduct = (product, quantity) => {
    takeOutStoreProduct(product, quantity);
    addProductToShoppingCart(product, quantity);
  }

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <BannerStore className={classes.banner}/>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <FilterStore state={state} handleChange={handleChange} className={classes.filter}/>
      </Grid>
      <Grid item xs={12} md={8} lg={9}>
        <List
          list={store}
          takeProduct={takeProduct}
          className={classes.list}
        />
      </Grid>
    </Grid>
  );
};

export default StoreContainer;
