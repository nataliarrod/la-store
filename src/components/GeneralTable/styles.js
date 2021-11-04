import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  tableTitle: {
    fontSize: theme.typography.body2.fontSize,
    color: theme.palette.main.pink,
    textTransform: "Capitalize",
    fontWeight: "normal",
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.link.fontSize,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: theme.typography.body1.fontSize,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: theme.typography.fontSize,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: theme.typography.h6.fontSize,
    },
    [theme.breakpoints.down("sm")]: {
      padding: "2px",
    },
  },
  imageProduct: {
    "& > img": {
      width: "40px",
      height: "40px",
      [theme.breakpoints.up("md")]: {
        width: "60px",
        height: "60px",
      },
      [theme.breakpoints.up("lg")]: {
        width: "70px",
        height: "70px",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "2px",
      },
    },
  },
  tableContent: {
    fontSize: theme.typography.body2.fontSize,
    color: theme.palette.main.gray,
    textTransform: "lowercase",
    "&::first-letter": {
      textTransform: "capitalize",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.link.fontSize,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: theme.typography.body1.fontSize,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: theme.typography.fontSize,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: theme.typography.h6.fontSize,
    },
    [theme.breakpoints.down("sm")]: {
      padding: "2px",
    },
  },
  deleteButton: {
    "& > MuiButtonBase-root": {
      marginTop: "20px",
    },
  },
}));

export default useStyles;
