import React, { useState } from "react";
import { TextField, Button, InputAdornment, IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useStyles from "./styles";

const ProductCard = (props) => {
  const { product, isListProduct = false } = props;
  const [quantity, setQuantity] = useState(0);
  const classes = useStyles();

  const addProduct = () => {
    const newQuantity = quantity < product.maxQuantity ? quantity + 1 : quantity;
    setQuantity(newQuantity);
  }

  const substractProduct = () => {
    const newQuantity = !quantity ? 0 : quantity - 1;
    setQuantity(newQuantity);
  }

  return (
    <div className={classes.productCard} key={product.id}>
      <img
        src={product.url}
        alt="foto del producto"
        width="150px"
        height="150px"
      />
      <h4>{product.name}</h4>
      <span>{`$ ${product.price}`}</span>
      {isListProduct ? (
        <>
          <TextField
            id="outlined-start-adornment"
            ariaDescribedby="cantidad de productos para agregar al carrito"
            type="number"
            size="small"
            className={classes.textField}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" className={classes.actions}>
                  <IconButton aria-label="icono remover productos" size="small" onClick={substractProduct}> 
                    <RemoveIcon />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end" className={classes.actions}>
                  <IconButton aria-label="icono agregar productos" size="small" onClick={addProduct}>
                    <AddIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
            variant="outlined"
          />
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            size="small"
            aria-label="agregar productos al carrito"
            endIcon={<ShoppingCartIcon aria-label="icono carrito de compras">send</ShoppingCartIcon>}
          >
            agregar al carrito
          </Button>
        </>
      ) : null}
    </div>
  );
};

export default ProductCard;
