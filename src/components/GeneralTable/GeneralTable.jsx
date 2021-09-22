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
import { tableTitle } from "./constants";
import { moneyFormatter } from "../../utils/helpers/helpers";

const GeneralTable = ({ list, deleteItem }) => {
  const classes = useStyles();

  const calculateSubtotal = (quantity, price) => quantity * price;

  const nameFormatter = (str) => {
    return str.toLowerCase();
  };

  return (
      <TableContainer component={Paper} className={classes.root}>
        <Table
          className={classes.table}
          size="small"
          aria-label="tabla con productos del carrito"
        >
          <TableHead>
            <TableRow>
              {tableTitle.map((titleName, i) => (
                <TableCell 
                  key={i} 
                  align="center"
                  className={classes.tableTitle}>{titleName.title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {console.log(list)}
            {list.map((row) => (
              <TableRow key={row._id}>
                <TableCell align="center" component="th" scope="row">
                  <img
                    src={row.image}
                    alt="foto del producto"
                    width="auto"
                    height="70px"
                  />
                </TableCell>
                <TableCell className={classes.tableContent} align="center">{nameFormatter(row.name)}</TableCell>
                <TableCell className={classes.tableContent} align="center">{moneyFormatter(row.price)}</TableCell>
                <TableCell className={classes.tableContent} align="center">{row.quantity}</TableCell>
                <TableCell className={classes.tableContent} align="center">
                  {moneyFormatter(calculateSubtotal(row.quantity, row.price))}
                </TableCell>
                <TableCell className={classes.tableContent} align="center">
                  <IconButton
                    className={classes.deleteButton}
                    onClick={() => deleteItem(row._id)}
                    aria-label="borrar"
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
};

export default GeneralTable;
