import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { featuredProductsMockup } from "../../utils/constants";
import useStyles from "./styles";

const ShoppingCartTable = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table
        className={classes.table}
        size="small"
        aria-label="tabla con productos del carrito"
      >
        <TableHead>
          <TableRow>
            <TableCell align="center">producto</TableCell>
            <TableCell align="center">nombre</TableCell>
            <TableCell align="center">precio</TableCell>
            <TableCell align="center">cantidad</TableCell>
            <TableCell align="center">subtotal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {featuredProductsMockup.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center" component="th" scope="row">
                <img
                  src={row.url}
                  alt="foto del producto"
                  width="50px"
                  height="50px"
                />
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">${row.price}</TableCell>
              <TableCell align="center">{row.maxQuantity}</TableCell>
              <TableCell align="center">
                {Math.round(row.maxQuantity * row.price * 100) / 100}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ShoppingCartTable;
