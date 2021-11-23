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
    velas: false,
    oraculos: false,
    cursos: false,
    cuarzos: false,
    joyeria: false,
  });
  const [filteredStore, setFilteredStore] = useState([])
  const dispatch = useDispatch();

  useEffect(() => {
    if (!store.length) dispatch(fetchStoreProducts());
  }, [dispatch, store]);

  useEffect(() => {
    if (Object.values(state).every((item => item === false))) {
      setFilteredStore(store)
    } else {
      let getCategories = setGetCategories(state);
      let arrayFiltered = store.filter(item => {
        return getCategories.indexOf(item.category) > -1
      })
      setFilteredStore(arrayFiltered)
    }
  }, [state, store])

  const setGetCategories = (obj) => {
    let categoryArray = Object.keys(obj);
    let categoriesChecked = [];
    categoryArray.forEach(item => {
      if (obj[item]) {
        categoriesChecked.push(item)
      }
    }) 
    return categoriesChecked;
  }

  const handleChange = (event) => {
    const newState = { ...state };
    newState[event.target.name] = event.target.checked;
    setState(newState);
  };

  const takeOutStoreProduct = (product, quantity) => {
    const newStock = product.stock - quantity;
    const newStoreProduct = {
      ...product,
      stock: newStock,
    }
    dispatch(updateProduct(newStoreProduct));
  };
  
  const addProductToShoppingCart = (product, quantity) => {
    const newCartProduct = {
      ...product,
      quantity: quantity
    }
    delete newCartProduct.stock;
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
          list={filteredStore}
          takeProduct={takeProduct}
          className={classes.list}
        />
      </Grid>
    </Grid>
  );
};

export default StoreContainer;
