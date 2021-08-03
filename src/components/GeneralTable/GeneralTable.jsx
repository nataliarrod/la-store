import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "./styles";

const GeneralTable = ({ list, deleteItem }) => {
  const classes = useStyles();

  const calculateSubtotal = (quantity, price) => quantity * price;

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
            {list.map((row) => (
              <TableRow key={row._id}>
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
                <TableCell align="center">{row.quantity}</TableCell>
                <TableCell align="center">
                  {calculateSubtotal(row.quantity, row.price)}
                </TableCell>
                <IconButton
                  className={classes.deleteButton}
                  onClick={() => deleteItem(row._id)}
                  aria-label="borrar"
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
};

export default GeneralTable;
